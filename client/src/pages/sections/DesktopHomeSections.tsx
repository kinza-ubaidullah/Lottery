import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export const DesktopBannerSection = () => {
    const [, setLocation] = useLocation();
    const [countdown, setCountdown] = useState({ minutes: 9, seconds: 23 });

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { minutes: prev.minutes - 1, seconds: 59 };
                }
                return { minutes: 9, seconds: 59 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const winningDigits = ["5", "3", "8", "9", "K", "J"];

    return (
        <div className="relative w-full h-[456px] mb-12">
            {/* 1. MAIN BANNER BOX - Bitcoin Lottery (738x440) */}
            <div
                className="absolute left-0 top-0 w-[738px] h-[440px] bg-[#0D1115] rounded-[12px] border border-white/10 overflow-hidden shadow-2xl group flex shrink-0"
                style={{ background: 'linear-gradient(135deg, #0B0E11 0%, #3D1C0A 100%)' }}
            >
                {/* Atmospheric Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(227,104,38,0.25)_0%,transparent_70%)] pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #8a96a3 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                {/* Fox Mascot - Pixel Perfect Specs from Figma */}
                <img
                    src="/figmaAssets/image-189.png"
                    className="absolute z-10 pointer-events-none transition-transform duration-700 group-hover:scale-[1.02]"
                    style={{
                        width: '476px',
                        height: '714px',
                        top: '29px',
                        left: '308px',
                        opacity: 1,
                        rotate: '0deg'
                    }}
                    alt="Fox Mascot"
                />

                {/* Content Area */}
                <div className="relative z-20 p-10 flex flex-col justify-between w-full h-full">
                    <div className="flex flex-col gap-6 items-start">
                        {/* Title Section */}
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3 bg-[#FF4B0F] w-fit px-4 py-1.5 rounded-lg shadow-lg">
                                <img src="/figmaAssets/bitcoin-3-1.png" className="w-5 h-5 object-contain" alt="BTC" />
                                <span className="font-['Montserrat'] font-black text-white text-[14px] tracking-widest uppercase leading-none">BITCOIN</span>
                            </div>
                            <h1 className="font-['Montserrat'] font-black text-[72px] leading-[0.85] text-white tracking-tighter uppercase">
                                LOTTERY
                            </h1>
                            <p className="text-[#A1B4C6] text-[18px] font-bold tracking-tight opacity-70">
                                Guess 6 Numbers. Match & Win
                            </p>
                        </div>

                        {/* Tickets Badge */}
                        <div className="flex items-center gap-4 bg-[#1F1813]/60 backdrop-blur-md rounded-[16px] px-5 py-3 border border-white/5 shadow-xl mt-2">
                            <img src="/figmaAssets/image-194-1.png" className="w-6 h-4 object-contain" alt="Ticket" />
                            <span className="text-white font-bold text-lg font-['Montserrat']">Tickets</span>
                            <div className="bg-[#FF4B0F] px-4 py-1 rounded-[8px] shadow-lg">
                                <span className="text-white font-black text-xl font-['Montserrat']">5$</span>
                            </div>
                            <span className="text-white/40 font-black text-md font-['Montserrat']">only</span>
                        </div>

                        {/* Verifiable & Timer Row */}
                        <div className="flex items-center gap-6 mt-2">
                            <div className="bg-[#58A700] rounded-[24px] p-6 flex flex-col gap-1 min-w-[200px] shadow-[0_15px_40px_rgba(88,167,0,0.4)] relative overflow-hidden group/green">
                                <div className="absolute inset-x-0 bottom-0 h-1 z-10 bg-white/20" />
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex flex-col">
                                        <span className="text-white font-black text-[17px] font-['Montserrat'] uppercase leading-none mb-1">Fully verifiable</span>
                                        <span className="text-white/80 font-medium text-[12px] font-['Montserrat']">on Blockchain.com</span>
                                    </div>
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                                        <span className="text-[#58A700] font-black text-[16px]">✓</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-[11px] font-black text-white/40 font-['Montserrat'] uppercase tracking-widest leading-none">Next draw in</span>
                                <div className="flex gap-2">
                                    <div className="bg-[#141A20] w-[64px] h-[68px] rounded-[16px] border border-white/5 flex items-center justify-center text-white font-black text-[32px] shadow-2xl relative overflow-hidden">
                                        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5 pointer-events-none" />
                                        <span className="font-['Montserrat'] relative z-10">{String(countdown.minutes).padStart(2, "0")}</span>
                                    </div>
                                    <div className="bg-[#141A20] w-[64px] h-[68px] rounded-[16px] border border-white/5 flex items-center justify-center text-white font-black text-[32px] shadow-2xl relative overflow-hidden">
                                        <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5 pointer-events-none" />
                                        <span className="font-['Montserrat'] relative z-10">{String(countdown.seconds).padStart(2, "0")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mt-4 relative z-20">
                        <button
                            onClick={() => setLocation("/play-lottery")}
                            className="px-10 h-[64px] bg-[#FF4B0F] hover:bg-[#FF6530] text-white font-black text-[22px] rounded-[18px] shadow-[0_15px_40px_rgba(255,75,15,0.4)] transition-all active:scale-95 uppercase font-['Montserrat'] border border-white/10"
                            style={{ background: 'linear-gradient(180deg, #FF6F3F 0%, #FF4B0F 100%)' }}
                        >
                            Play now
                        </button>
                        <button
                            onClick={() => setLocation("/lottery-results")}
                            className="px-8 h-[64px] border border-[#512711] bg-[#2A150A] hover:bg-[#3D1F0E] text-[#FFF0C3] font-black text-[19px] rounded-[18px] transition-all active:scale-95 flex items-center justify-center font-['Montserrat'] uppercase"
                            style={{ background: 'linear-gradient(180deg, #512711 0%, #2A150A 100%)' }}
                        >
                            Verify results
                        </button>
                    </div>
                </div>
            </div>

            {/* 2. LUCKY HOUR CARD - Pos: Top 0, Left 780 (relative) -> Page Left 868 */}
            <div
                className="absolute left-[780px] top-0 w-[521px] h-[227px] rounded-[12px] overflow-hidden border border-white/10 shadow-2xl group flex shrink-0"
                style={{ background: 'linear-gradient(180deg, #58A700 0%, #BDFF25 100%)' }}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(255,255,255,0.2)_0%,transparent_60%)] pointer-events-none" />

                <div className="relative z-20 p-8 flex flex-col h-full justify-between w-full max-w-[65%]">
                    <div className="space-y-3">
                        <h3 className="text-white font-[900] text-[40px] leading-[0.9] uppercase tracking-tighter font-['Montserrat']">
                            Lucky Hour<br />is now live
                        </h3>
                        <p className="text-white/80 text-[18px] font-medium font-['Montserrat'] leading-tight">
                            higher prizes for the<br />next 60 minutes.
                        </p>
                    </div>

                    <button
                        className="w-fit h-[48px] px-8 bg-[#BDFF25] hover:bg-[#a6e020] text-black font-black text-[16px] rounded-full transition-all active:scale-95 font-['Montserrat'] uppercase z-20 shadow-xl border-none"
                    >
                        Play now
                    </button>
                </div>

                {/* Combined Assets for Lucky Hour */}
                <div className="absolute top-0 right-0 h-full w-[60%] pointer-events-none z-10 overflow-hidden">
                    <img
                        src="/figmaAssets/img7.png"
                        className="absolute right-[-10%] bottom-[-5%] h-[95%] w-auto object-contain z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                        alt="Machine"
                    />
                    <img
                        src="/figmaAssets/gift.png"
                        className="absolute right-[15%] bottom-[5%] h-[65%] w-auto object-contain z-20 drop-shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                        alt="Gift"
                    />
                    <img src="/figmaAssets/ball2.png" className="absolute top-[20%] left-[5%] w-10 rotate-12 drop-shadow-lg" alt="ball" />
                    <img src="/figmaAssets/ball7.png" className="absolute bottom-[20%] left-[8%] w-14 rotate-[-25deg] drop-shadow-xl z-20" alt="ball" />
                </div>
            </div>

            {/* 3. VERIFY BLOCK CARD - Pos: Top 247, Left 780 (relative) -> Page Top 321, Left 868 */}
            <div
                className="absolute left-[780px] top-[247px] w-[521px] h-[193px] bg-[#0F151B] rounded-[12px] overflow-hidden border border-white/5 shadow-2xl group flex flex-col justify-center p-8"
            >
                <div className="relative z-20 flex flex-col gap-6">
                    <div className="space-y-1">
                        <h3 className="text-white text-[48px] font-[900] font-['Montserrat'] tracking-tight leading-none uppercase">4390J3</h3>
                        <span className="text-white/40 font-black text-[12px] font-['Montserrat'] uppercase tracking-[0.2em]">Latest Bitcoin block #</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex gap-1.5 shrink-0">
                            {winningDigits.map((digit, i) => (
                                <div key={i} className="w-10 h-10 bg-[linear-gradient(180deg,#FF833F_0%,#FF4B0F_100%)] rounded-[10px] flex items-center justify-center shadow-[0_4px_10px_rgba(255,75,15,0.3)] border-t border-white/20">
                                    <span className="text-white text-[22px] font-black font-['Montserrat']">{digit}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-0 leading-none">
                            <span className="text-white/30 font-black text-[12px] font-['Montserrat'] uppercase tracking-tighter">Winning</span>
                            <span className="text-white/30 font-black text-[12px] font-['Montserrat'] uppercase tracking-tighter">digits</span>
                        </div>
                    </div>
                </div>

                <div className="absolute right-8 bottom-8 z-30">
                    <button
                        onClick={() => setLocation("/verify-results")}
                        className="h-[56px] px-10 rounded-[16px] bg-[#BDFF25] text-black font-black text-[18px] uppercase shadow-[0_15px_30px_rgba(189,255,37,0.4)] hover:bg-[#a6e020] active:scale-95 transition-all border-none">
                        Verify
                    </button>
                </div>

                {/* Decor Coins */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
                    <img src="/figmaAssets/image-193-1.png" className="absolute top-[10%] right-[-5%] w-24 blur-[1px] rotate-[-25deg]" alt="Coin" />
                    <img src="/figmaAssets/image-193-1.png" className="absolute bottom-[5%] right-[25%] w-14 rotate-[12deg]" alt="Coin" />
                </div>
            </div>
        </div>
    );
};

export const DesktopGameInfoSection = () => {
    return null; // Integrated into HomePage.tsx as GameDemoSection
};

export const DesktopPrizesSection = () => {
    return null; // Integrated into HomePage.tsx as PrizeTiersSection
};

export const DesktopPreviousWinsSection = () => {
    return null; // Integrated into HomePage.tsx as PreviousWinsListSection
};
