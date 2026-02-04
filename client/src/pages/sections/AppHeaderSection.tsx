import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SignUpModal } from "@/components/modals/SignUpModal";

import { ForgotPasswordModal } from "@/components/modals/ForgotPasswordModal";
import { VerificationCodeModal } from "@/components/modals/VerificationCodeModal";
import { CreateNewPasswordModal } from "@/components/modals/CreateNewPasswordModal";

export const AppHeaderSection = (): JSX.Element => {
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
    <header className="relative w-full border-b border-[#242d35] bg-[#12171d] z-[100]">
      {/* Tightened mobile padding (px-2) and height consistency */}
      <div className="w-full max-w-[1280px] mx-auto h-[56px] md:h-[80px] flex items-center justify-between px-2 sm:px-4 md:px-6">
        <h1 className="font-['Luckiest_Guy'] text-white text-[22px] sm:text-[28px] md:text-[40px] tracking-tight leading-none uppercase shrink-0">
          LOTTERY
        </h1>

        {/* Tightened gap on mobile (gap-1) to fit all buttons on small screens */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-3 shrink-0">
          <div className="flex items-center">
            <Button
              variant="ghost"
              onClick={() => {
                setSignUpTab("login");
                setIsSignUpOpen(true);
              }}
              className="w-[50px] h-[26px] xs:w-[59px] xs:h-[28px] md:w-[80px] md:h-[36px] lg:w-[100px] lg:h-[44px] rounded-[6px] md:rounded-[8px] border-none bg-[linear-gradient(180deg,#1F1813_0%,#E36826_100%)] hover:opacity-90 text-[#fff0c3] font-bold text-[9px] xs:text-[10px] md:text-xs lg:text-base p-0 flex items-center justify-center gap-2 transition-all relative before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-[6px] md:before:rounded-[8px] before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              Log in
            </Button>
            <div className="relative group ml-1">
              <div className="absolute -top-1.5 -left-1.5 xs:-top-2 xs:-left-2 md:-top-3 md:-left-3 w-5 h-5 xs:w-6 xs:h-6 md:w-8 md:h-8 pointer-events-none z-20">
                <img src="/figmaAssets/image-188-1.png" className="w-full h-full object-contain" alt="Gift" />
              </div>
              <Button
                variant="ghost"
                onClick={() => {
                  setSignUpTab("register");
                  setIsSignUpOpen(true);
                }}
                className="w-[60px] h-[26px] xs:w-[70px] xs:h-[28px] md:w-[90px] md:h-[36px] lg:w-[120px] lg:h-[44px] rounded-[6px] md:rounded-[8px] bg-[#FF6B26] hover:bg-[#FF7B3B] text-white font-bold text-[9px] xs:text-[10px] md:text-xs lg:text-base p-0 flex items-center justify-center border-none shadow-[0_4px_10px_rgba(255,107,38,0.3)] transition-all"
              >
                Sign up
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
            {/* Reduced icon button size on mobile (w-7.5) for better fit */}
            <Button
              variant="ghost"
              size="icon"
              className="w-[30px] h-[30px] xs:w-9 xs:h-9 md:w-12 md:h-12 rounded-lg xs:rounded-xl bg-[linear-gradient(180deg,#00AAFF_0%,#90DAFF_100%)] hover:opacity-90 overflow-hidden"
            >
              <img src="/figmaAssets/image-184.png" className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 object-contain" alt="Globe" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-[30px] h-[30px] xs:w-9 xs:h-9 md:w-12 md:h-12 rounded-lg xs:rounded-xl bg-[linear-gradient(180deg,#9A76FF_0%,#C8B4FF_100%)] hover:opacity-90"
            >
              <img src="/figmaAssets/image-183.png" className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 object-contain" alt="Chat" />
            </Button>
          </div>
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
