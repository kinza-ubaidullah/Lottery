import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SelectGameModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SelectGameModal: React.FC<SelectGameModalProps> = ({ isOpen, onClose }) => {
    const [selectedGame, setSelectedGame] = useState<"exact" | "jumble">("jumble");

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-[650px] p-0 bg-[#0B0E11] border-none rounded-[36px] overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.8)]">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,900&family=Outfit:wght@400;500;700&display=swap');
                `}} />

                <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-white text-[28px] font-black font-['Montserrat'] tracking-tight">
                            Select a game
                        </h2>
                    </div>

                    {/* Content - Stacked Cards */}
                    <div className="flex flex-col gap-3">
                        {/* Exact Number Card */}
                        <div
                            onClick={() => setSelectedGame("exact")}
                            className={cn(
                                "group relative h-[200px] rounded-[24px] cursor-pointer transition-all duration-500 overflow-hidden border",
                                selectedGame === "exact"
                                    ? "border-[#B4FF25]/60 shadow-[0_0_50px_rgba(180,255,37,0.25)] scale-[1.01]"
                                    : "border-white/5 hover:border-white/10"
                            )}
                            style={{
                                background: 'linear-gradient(135deg, #192025 0%, #203510 50%, #192025 100%)',
                            }}
                        >
                            {/* Inner Main Div */}
                            <div className="relative z-20 h-full w-full flex items-center px-8">
                                {/* LEFT SECTION: Typography & Button */}
                                <div className="flex-[1.5] flex flex-col justify-center space-y-5">
                                    <div className="space-y-1">
                                        <h3 className="text-white text-[32px] font-black uppercase tracking-tight font-['Montserrat'] leading-none">
                                            Exact Number
                                        </h3>
                                        <p className="text-white text-[15px] leading-[1.2] max-w-[280px] font-medium font-['Outfit'] opacity-70">
                                            Choose 6 digits and the order of characters must match
                                        </p>
                                    </div>

                                    <Button
                                        className={cn(
                                            "w-[140px] h-[52px] rounded-[16px] font-black text-[18px] transition-all duration-300 shadow-xl border-none text-white",
                                            selectedGame === "exact" ? "bg-gradient-to-b from-[#FF6B26] to-[#FF4D12]" : "opacity-70"
                                        )}
                                        style={selectedGame === "exact" ? {} : { background: 'linear-gradient(180deg, #2B3540 0%, #4A5968 100%)' }}
                                    >
                                        {selectedGame === "exact" ? "Selected" : "Select"}
                                    </Button>
                                </div>

                                {/* RIGHT SECTION: Mascot Space */}
                                <div className="flex-1 h-full relative">
                                    <img
                                        src="/figmaAssets/img2.png"
                                        className="absolute bottom-[-10px] right-[-10px] h-[115%] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.05] z-10"
                                        alt="Mascot"
                                    />
                                    <img src="/figmaAssets/ball2.png" className="absolute top-[20%] right-[10%] w-10 drop-shadow-lg z-0" alt="ball 2" />
                                    <img src="/figmaAssets/ball.png" className="absolute top-[50%] right-[45%] w-12 drop-shadow-xl z-0" alt="ball 3" />
                                    <img src="/figmaAssets/ball7.png" className="absolute bottom-[5%] right-[0%] w-20 drop-shadow-2xl z-20" alt="ball 7" />
                                    <img src="/figmaAssets/image-193-1.png" className="absolute top-[10%] right-[30%] w-10 opacity-80 z-0" alt="coin" />
                                </div>
                            </div>

                            {/* Background Layers */}
                            <div className="absolute top-[-50%] left-[-20%] w-[140%] h-[200%] bg-gradient-to-br from-white/[0.07] via-transparent to-transparent rotate-12 pointer-events-none z-0" />
                            <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
                                style={{ background: 'radial-gradient(circle at 10% 50%, #B4FF25 0%, transparent 60%)' }} />
                        </div>

                        {/* Jumble Bumble Card */}
                        <div
                            onClick={() => setSelectedGame("jumble")}
                            className={cn(
                                "group relative h-[180px] rounded-[24px] cursor-pointer transition-all duration-500 overflow-hidden border",
                                selectedGame === "jumble"
                                    ? "border-[#FF6B26]/70 shadow-[0_0_50px_rgba(255,107,38,0.3)] scale-[1.01]"
                                    : "border-white/5 hover:border-white/10"
                            )}
                            style={{
                                background: 'linear-gradient(135deg, #3D2411 0%, #5C3317 60%, #7A421D 100%)',
                            }}
                        >
                            {/* Inner Main Div */}
                            <div className="relative z-20 h-full w-full flex items-center px-8">
                                {/* LEFT SECTION: Typography & Button */}
                                <div className="flex-[1.5] flex flex-col justify-center space-y-5">
                                    <div className="space-y-1">
                                        <h3 className="text-white text-[32px] font-black uppercase tracking-tight font-['Montserrat'] leading-none">
                                            Jumble Bumble
                                        </h3>
                                        <p className="text-white text-[15px] leading-[1.2] max-w-[280px] font-medium font-['Outfit'] opacity-70">
                                            Choose 6 digits and the order of characters can be mixed
                                        </p>
                                    </div>

                                    <Button
                                        className={cn(
                                            "w-[140px] h-[52px] rounded-[16px] font-black text-[18px] transition-all duration-300 shadow-xl border-none text-white",
                                            selectedGame === "jumble" ? "bg-gradient-to-b from-[#FF6B26] to-[#FF4D12]" : "opacity-70"
                                        )}
                                        style={selectedGame === "jumble" ? {} : { background: 'linear-gradient(180deg, #2B3540 0%, #4A5968 100%)' }}
                                    >
                                        {selectedGame === "jumble" ? "Selected" : "Select"}
                                    </Button>
                                </div>

                                {/* RIGHT SECTION: Mascot Space */}
                                <div className="flex-1 h-full relative">
                                    <img
                                        src="/figmaAssets/img6.png"
                                        className="absolute bottom-[-10px] right-[-10px] h-[115%] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.05] z-10"
                                        alt="Mascot"
                                    />
                                    <img src="/figmaAssets/ball2.png" className="absolute top-[15%] right-[5%] w-10 drop-shadow-lg z-0" alt="ball" />
                                    <img src="/figmaAssets/ball7.png" className="absolute bottom-[2%] right-[0%] w-20 drop-shadow-2xl z-20" alt="ball 7" />
                                    <img src="/figmaAssets/image-193-1.png" className="absolute top-[10%] right-[40%] w-10 opacity-90 z-0" alt="coin" />
                                </div>
                            </div>

                            {/* Background Layers */}
                            <div className="absolute top-[-50%] right-[-20%] w-[140%] h-[200%] bg-gradient-to-bl from-white/[0.07] via-transparent to-transparent -rotate-12 pointer-events-none z-0" />
                            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-gradient-to-l from-[#7C2DFE]/30 via-transparent to-transparent pointer-events-none z-0" />
                        </div>

                        {/* Main Action Button */}
                        <Button
                            onClick={onClose}
                            className="w-full h-[60px] mt-2 rounded-[24px] text-white font-black text-[22px] font-['Montserrat'] italic uppercase tracking-tighter shadow-[0_15px_35px_rgba(255,75,15,0.45)] border border-[#FF8962] active:scale-[0.97] transition-all duration-300"
                            style={{
                                background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)',
                            }}
                        >
                            Choose
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
