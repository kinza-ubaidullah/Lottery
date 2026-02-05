import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { SignUpModal } from "@/components/modals/SignUpModal";
import { ForgotPasswordModal } from "@/components/modals/ForgotPasswordModal";
import { VerificationCodeModal } from "@/components/modals/VerificationCodeModal";
import { CreateNewPasswordModal } from "@/components/modals/CreateNewPasswordModal";
import { Gamepad2, Info, HelpCircle, ShieldCheck } from "lucide-react";

export const DesktopHeader = (): JSX.Element => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);
    const [signUpTab, setSignUpTab] = useState<"login" | "register">("register");
    const [isForgotOpen, setIsForgotOpen] = useState(false);
    const [isVerificationOpen, setIsVerificationOpen] = useState(false);
    const [isCreatePasswordOpen, setIsCreatePasswordOpen] = useState(false);
    const [location] = useLocation();

    // Helper to determine if a link is active
    const isActive = (path: string) => location === path;
    const isResultsActive = location === "/dashboard" || location === "/lottery-results";

    const handleRecoverPassword = () => {
        setIsSignUpOpen(false);
        setTimeout(() => {
            setIsForgotOpen(true);
        }, 100);
    };

    const handleVerification = () => {
        setIsForgotOpen(false);
        setTimeout(() => {
            setIsVerificationOpen(true);
        }, 100);
    };

    const handleCreatePassword = () => {
        setIsVerificationOpen(false);
        setTimeout(() => {
            setIsCreatePasswordOpen(true);
        }, 100);
    };

    return (
        <header className="fixed top-0 left-0 right-0 h-[72px] bg-[#0d1218]/95 backdrop-blur-md border-b border-white/5 z-[60] flex items-center">
            <div className="w-full px-8 flex items-center justify-between h-full">
                {/* Left Navigation */}
                <div className="flex items-center gap-10">
                    <Link href="/">
                        <h1 className="font-['Montserrat'] font-[900] text-white text-[24px] tracking-tight leading-none uppercase select-none cursor-pointer hover:opacity-80 transition-opacity">
                            LOTTERY
                        </h1>
                    </Link>

                    <nav className="flex items-center gap-8">
                        <Link href="/play-lottery" className={`relative flex items-center gap-2 transition-all group ${isActive('/play-lottery') ? 'text-white' : 'text-[#525D68] hover:text-white'}`}>
                            {isActive('/play-lottery') && (
                                <div className="absolute -bottom-[27px] left-1/2 -translate-x-1/2 w-[140%] h-[45px] bg-[radial-gradient(50%_100%_at_50%_100%,rgba(190,255,37,0.25)_0%,rgba(190,255,37,0)_100%)] pointer-events-none" />
                            )}
                            <img src="/figmaAssets/img3.png" className={`w-4 h-4 object-contain relative z-10 ${isActive('/play-lottery') ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat'] relative z-10">Play now</span>
                            {isActive('/play-lottery') && (
                                <div className="absolute -bottom-[27px] left-0 w-full h-[3px] bg-[#BEFF25] rounded-t-[2px] shadow-[0_0_12px_rgba(190,255,37,0.6)] z-10" />
                            )}
                        </Link>
                        <Link href="/how-it-works" className={`relative flex items-center gap-2 transition-all group ${isActive('/how-it-works') ? 'text-white' : 'text-[#525D68] hover:text-white'}`}>
                            {isActive('/how-it-works') && (
                                <div className="absolute -bottom-[27px] left-1/2 -translate-x-1/2 w-[140%] h-[45px] bg-[radial-gradient(50%_100%_at_50%_100%,rgba(190,255,37,0.25)_0%,rgba(190,255,37,0)_100%)] pointer-events-none" />
                            )}
                            <img src="/figmaAssets/box.png" className={`w-4 h-4 object-contain relative z-10 ${isActive('/how-it-works') ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat'] relative z-10">How it works</span>
                            {isActive('/how-it-works') && (
                                <div className="absolute -bottom-[27px] left-0 w-full h-[3px] bg-[#BEFF25] rounded-t-[2px] shadow-[0_0_12px_rgba(190,255,37,0.6)] z-10" />
                            )}
                        </Link>
                        <Link href="/faq" className={`relative flex items-center gap-2 transition-all group ${isActive('/faq') ? 'text-white' : 'text-[#525D68] hover:text-white'}`}>
                            {isActive('/faq') && (
                                <div className="absolute -bottom-[27px] left-1/2 -translate-x-1/2 w-[140%] h-[45px] bg-[radial-gradient(50%_100%_at_50%_100%,rgba(190,255,37,0.25)_0%,rgba(190,255,37,0)_100%)] pointer-events-none" />
                            )}
                            <img src="/figmaAssets/image-180.png" className={`w-4 h-4 object-contain relative z-10 ${isActive('/faq') ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat'] relative z-10">FAQ</span>
                            {isActive('/faq') && (
                                <div className="absolute -bottom-[27px] left-0 w-full h-[3px] bg-[#BEFF25] rounded-t-[2px] shadow-[0_0_12px_rgba(190,255,37,0.6)] z-10" />
                            )}
                        </Link>
                        <Link href="/dashboard" className={`relative flex items-center gap-2 transition-all group ${isResultsActive ? 'text-white' : 'text-[#525D68] hover:text-white'}`}>
                            {isResultsActive && (
                                <div className="absolute -bottom-[27px] left-1/2 -translate-x-1/2 w-[140%] h-[45px] bg-[radial-gradient(50%_100%_at_50%_100%,rgba(190,255,37,0.25)_0%,rgba(190,255,37,0)_100%)] pointer-events-none" />
                            )}
                            <img src="/figmaAssets/img4.png" className={`w-4 h-4 object-contain relative z-10 ${isResultsActive ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat'] relative z-10">Verify results</span>
                            {isResultsActive && (
                                <div className="absolute -bottom-[27px] left-0 w-full h-[3px] bg-[#BEFF25] rounded-t-[2px] shadow-[0_0_12px_rgba(190,255,37,0.6)] z-10" />
                            )}
                        </Link>
                    </nav>
                </div>

                {/* Right Actions - Mobile Styled Buttons */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        onClick={() => {
                            setSignUpTab("login");
                            setIsSignUpOpen(true);
                        }}
                        className="w-[100px] h-11 rounded-xl border-none bg-[linear-gradient(180deg,#1F1813_0%,#E36826_100%)] hover:opacity-90 text-[#fff0c3] font-bold text-sm p-0 flex items-center justify-center transition-all relative before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                    >
                        Log in
                    </Button>

                    <div className="relative group">
                        <div className="absolute -top-3 -left-3 w-8 h-8 pointer-events-none z-20">
                            <img src="/figmaAssets/image-188-1.png" className="w-full h-full object-contain" alt="Gift" />
                        </div>
                        <Button
                            onClick={() => {
                                setSignUpTab("register");
                                setIsSignUpOpen(true);
                            }}
                            className="h-11 px-8 bg-[#FF6B26] hover:bg-[#FF7B3B] text-white font-black text-sm rounded-xl shadow-[0_4px_20px_rgba(255,107,38,0.4)] transition-all active:scale-95 uppercase tracking-wider"
                        >
                            Sign up
                        </Button>
                    </div>

                    <div className="flex items-center gap-2 ml-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-11 h-11 rounded-xl bg-[linear-gradient(180deg,#00AAFF_0%,#90DAFF_100%)] hover:opacity-90 shadow-lg shadow-blue-500/10"
                        >
                            <img src="/figmaAssets/image-184.png" className="w-6 h-6 object-contain" alt="Globe" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-11 h-11 rounded-xl bg-[linear-gradient(180deg,#9A76FF_0%,#C8B4FF_100%)] hover:opacity-90 shadow-lg shadow-purple-500/10"
                        >
                            <img src="/figmaAssets/image-183.png" className="w-6 h-6 object-contain" alt="Chat" />
                        </Button>
                    </div>
                </div>

                <SignUpModal
                    isOpen={isSignUpOpen}
                    onClose={() => setIsSignUpOpen(false)}
                    onRecoverPassword={handleRecoverPassword}
                    initialTab={signUpTab}
                />
                <ForgotPasswordModal
                    isOpen={isForgotOpen}
                    onClose={() => setIsForgotOpen(false)}
                    onRecover={handleVerification}
                />
                <VerificationCodeModal
                    isOpen={isVerificationOpen}
                    onClose={() => setIsVerificationOpen(false)}
                    onVerify={handleCreatePassword}
                />
                <CreateNewPasswordModal
                    isOpen={isCreatePasswordOpen}
                    onClose={() => setIsCreatePasswordOpen(false)}
                    onBack={() => {
                        setIsCreatePasswordOpen(false);
                        setTimeout(() => {
                            setIsVerificationOpen(true);
                        }, 100);
                    }}
                    onSubmit={() => setIsCreatePasswordOpen(false)}
                />
            </div>
        </header>
    );
};
