import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { SignUpModal } from "@/components/modals/SignUpModal";
import { ForgotPasswordModal } from "@/components/modals/ForgotPasswordModal";
import { VerificationCodeModal } from "@/components/modals/VerificationCodeModal";
import { CreateNewPasswordModal } from "@/components/modals/CreateNewPasswordModal";
import { Gamepad2, Info, HelpCircle, ShieldCheck, LogIn, UserPlus, Wallet, User } from "lucide-react";

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
        <header className="fixed top-0 left-[96px] right-0 h-[74px] border-b border-white/[0.03] flex items-center justify-between px-10 bg-[#0c0d12]/90 backdrop-blur-md z-[60] shrink-0">
            <div className="flex items-center gap-14">
                {/* LOGO */}
                <Link href="/">
                    <div className="w-[114px] h-[30px] font-['Luckiest_Guy'] font-normal text-[30px] leading-[30px] tracking-[-0.01em] text-[#FFFDF8] select-none flex items-center cursor-pointer">LOTTERY</div>
                </Link>

                {/* NAVIGATION */}
                <nav className="hidden lg:flex items-center space-x-10">
                    <Link href="/play-lottery">
                        <a className="flex items-center gap-[8px] group transition-all">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="text-gray-500 group-hover:text-white transition-colors text-[16px] leading-none">🎮</span>
                            </div>
                            <span className={`h-[16px] font-['Montserrat'] font-bold text-[14px] leading-[16px] tracking-[-0.01em] flex items-center whitespace-nowrap transition-colors ${isActive('/play-lottery') ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Play now</span>
                        </a>
                    </Link>
                    <Link href="/how-it-works">
                        <a className="flex items-center gap-[8px] group transition-all">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="text-[#525D68] group-hover:text-white transition-colors text-[14px] leading-none">💬</span>
                            </div>
                            <span className={`h-[16px] font-['Montserrat'] font-bold text-[14px] leading-[16px] tracking-[-0.01em] flex items-center whitespace-nowrap transition-colors ${isActive('/how-it-works') ? 'text-white' : 'text-[#A2B4C6] group-hover:text-white'}`}>How it works</span>
                        </a>
                    </Link>
                    <Link href="/faq">
                        <a className="flex items-center gap-[8px] group transition-all">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <span className="text-[#525D68] group-hover:text-white transition-colors text-[14px] leading-none">👤</span>
                            </div>
                            <span className={`h-[31px] font-['Montserrat'] font-bold text-[14px] leading-[16px] tracking-[-0.01em] flex items-center whitespace-nowrap transition-colors ${isActive('/faq') ? 'text-white' : 'text-[#A2B4C6] group-hover:text-white'}`}>FAQ</span>
                        </a>
                    </Link>
                    <Link href="/lottery-results">
                        <a className="flex items-center gap-[8px] group transition-all">
                            <div className="w-[16px] h-[16px] flex items-center justify-center">
                                <img src="/figmaAssets/frame-381.svg" className={`w-[16px] h-[16px] object-contain transition-opacity ${isActive('/lottery-results') ? 'opacity-100' : 'opacity-50 group-hover:opacity-100'}`} alt="Verify" />
                            </div>
                            <span className={`h-[95px] font-['Montserrat'] font-bold text-[14px] leading-[16px] tracking-[-0.01em] flex items-center whitespace-nowrap transition-colors ${isActive('/lottery-results') ? 'text-white' : 'text-[#A2B4C6] group-hover:text-white'}`}>Verify results</span>
                        </a>
                    </Link>
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <Button
                    onClick={() => {
                        setSignUpTab("login");
                        setIsSignUpOpen(true);
                    }}
                    className="w-[93px] h-[44px] flex items-center justify-center rounded-[8px] border border-white/10 font-['Montserrat'] font-bold text-[14px] leading-[16px] tracking-[-0.01em] text-[#FFF0C4] transition-all active:scale-95 shadow-lg bg-transparent p-0"
                    style={{
                        background: 'linear-gradient(180deg, #2D1A10 0%, #5C2B10 100%)',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.1)'
                    }}
                >
                    Log in
                </Button>

                {/* SIGN UP */}
                <Button
                    onClick={() => {
                        setSignUpTab("register");
                        setIsSignUpOpen(true);
                    }}
                    className="relative w-[112px] h-[44px] flex items-center justify-center rounded-[8px] border border-[#FF8962] transition-all active:scale-95 shadow-lg shadow-orange-900/20 p-0 overflow-visible"
                    style={{
                        background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)',
                    }}
                >
                    <img
                        src="/figmaAssets/image-182.png"
                        className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[32px] h-[38px] object-contain"
                        alt=""
                    />
                    <span className="font-['Montserrat'] font-bold text-[13px] leading-[16px] tracking-[-0.01em] text-white">
                        Sign up
                    </span>
                </Button>

                {/* Language Badge */}
                <div
                    className="w-[44px] h-[44px] rounded-[8px] flex items-center justify-center cursor-pointer hover:brightness-110 transition-all shadow-lg"
                    style={{
                        background: 'linear-gradient(180deg, #00AAFF 0%, #90DAFF 100%)',
                        boxShadow: '0px 4px 10px rgba(0, 170, 255, 0.3)'
                    }}
                >
                    <img src="/figmaAssets/image-184.png" className="w-[36px] h-[36px] object-contain drop-shadow-md" alt="EN" />
                </div>

                {/* Chat Toggle Badge */}
                <div
                    className="w-[44px] h-[44px] rounded-[8px] flex items-center justify-center cursor-pointer hover:brightness-110 transition-all shadow-lg"
                    style={{
                        background: 'linear-gradient(180deg, #9A76FF 0%, #C8B4FF 100%)',
                        boxShadow: '0px 4px 10px rgba(154, 118, 255, 0.3)'
                    }}
                >
                    <img src="/figmaAssets/image-183.png" className="w-[28px] h-[28px] object-contain drop-shadow-md" alt="Chat" />
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
        </header>
    );
};
