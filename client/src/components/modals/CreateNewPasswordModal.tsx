import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface CreateNewPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    onBack: () => void;
    onSubmit: () => void;
}

export const CreateNewPasswordModal: React.FC<CreateNewPasswordModalProps> = ({ isOpen, onClose, onBack, onSubmit }) => {
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[calc(100%-16px)] sm:max-w-[420px] bg-[#0F1419] border-none rounded-[20px] sm:rounded-[24px] shadow-2xl p-5 sm:p-8 block overflow-y-auto max-h-[85vh]">
                <DialogHeader className="flex flex-col gap-2 items-start text-left">
                    <DialogTitle className="text-white text-[20px] sm:text-[24px] font-bold font-['Montserrat']">
                        Create new password
                    </DialogTitle>
                    <DialogDescription className="text-[#6C7682] text-[13px] sm:text-[14px] font-medium font-['Outfit'] leading-tight">
                        Create new password
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col gap-5 sm:gap-6 mt-4 sm:mt-6">
                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="text-[#6C7682] text-[13px] sm:text-[14px] font-medium font-['Outfit'] ml-1">Password</label>
                        <Input
                            type="password"
                            placeholder="Enter here"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-[#151B22] border-none h-12 sm:h-14 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#FF6F3F]/30 transition-all text-[15px] px-5 shadow-inner"
                        />
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="text-[#6C7682] text-[13px] sm:text-[14px] font-medium font-['Outfit'] ml-1">Repeat password</label>
                        <Input
                            type="password"
                            placeholder="Enter here"
                            value={repeatPassword}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            className="bg-[#151B22] border-none h-12 sm:h-14 rounded-[12px] text-white placeholder:text-[#323B44] font-['Outfit'] focus:ring-1 focus:ring-[#FF6F3F]/30 transition-all text-[15px] px-5 shadow-inner"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1">
                        <Button
                            onClick={onBack}
                            className="w-full h-12 sm:h-14 bg-[#323B44] hover:bg-[#3e4854] text-white font-bold text-base sm:text-lg rounded-[12px] shadow-lg transition-all active:scale-[0.98] font-['Outfit'] tracking-normal"
                        >
                            Back
                        </Button>
                        <Button
                            disabled={!password || !repeatPassword}
                            onClick={onSubmit}
                            className="w-full h-12 sm:h-14 bg-[linear-gradient(180deg,#FF6F3F_0%,#FF4B0F_100%)] text-white font-bold text-base sm:text-lg rounded-[12px] shadow-[0_10px_25px_rgba(255,111,63,0.3)] transition-all active:scale-[0.98] font-['Outfit'] tracking-normal disabled:opacity-50 disabled:grayscale disabled:cursor-not-allowed"
                        >
                            Recover
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
