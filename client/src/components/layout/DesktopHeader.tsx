import { useState } from "react";
import { Link } from "wouter";
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
                    <h1 className="font-['Montserrat'] font-[900] text-white text-[24px] tracking-tight leading-none uppercase select-none">
                        LOTTERY
                    </h1>

                    <nav className="flex items-center gap-8">
                        <Link href="/play-lottery" className="flex items-center gap-2 text-[#525D68] hover:text-white transition-all group">
                            <img src="/figmaAssets/img3.png" className="w-4 h-4 opacity-50 group-hover:opacity-100 object-contain" />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat']">Play now</span>
                        </Link>
                        <Link href="/" className="flex items-center gap-2 text-[#525D68] hover:text-white transition-all group">
                            <img src="/figmaAssets/box.png" className="w-4 h-4 opacity-50 group-hover:opacity-100 object-contain" />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat']">How it works</span>
                        </Link>
                        <Link href="/" className="flex items-center gap-2 text-[#525D68] hover:text-white transition-all group">
                            <img src="/figmaAssets/image-180.png" className="w-4 h-4 opacity-50 group-hover:opacity-100 object-contain" />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat']">FAQ</span>
                        </Link>
                        <Link href="/lottery-results" className="flex items-center gap-2 text-[#525D68] hover:text-white transition-all group">
                            <img src="/figmaAssets/img4.png" className="w-4 h-4 opacity-50 group-hover:opacity-100 object-contain" />
                            <span className="text-[13px] font-black uppercase tracking-tight font-['Montserrat']">Verify results</span>
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
