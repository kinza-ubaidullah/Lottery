import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import { Trophy, Medal, Crown, Star, User } from "lucide-react";
import { cn } from "@/lib/utils";

export const LeadersPage = (): JSX.Element => {
    const isMobile = useIsMobile();
    const [activeTab, setActiveTab] = useState("Biggest single win");

    const tabs = [
        "Biggest single win",
        "Most Free Tickets",
        "Refferral King",
        "Most wins in 24H"
    ];

    const topLeaders = [
        { name: "BONUSSss", amount: "569 USD", rank: 2, trophyColor: "#C0C0C0" }, // Silver
        { name: "BONUSSss", amount: "569 USD", rank: 1, trophyColor: "#FFD700" }, // Gold
        { name: "BONUSSss", amount: "569 USD", rank: 3, trophyColor: "#CD7F32" }  // Bronze
    ];

    const tableData = Array(7).fill({
        name: "jackie",
        purchased: "+ 569 USD",
        tickets: "2 tickets",
        price: "+ 569 USD"
    });

    const content = (
        <div className="w-full flex flex-col items-center" style={{ background: '#0D1216' }}>
            {isMobile && <AppHeaderSection />}

            <main className={cn(
                "w-full flex-1 flex flex-col gap-8 overflow-visible",
                isMobile ? "max-w-[1280px] px-4 py-8" : "px-4 md:px-10"
            )}>

                {/* Hero Section */}
                <div className="relative w-full h-[30vh] min-h-[280px] flex flex-col items-center justify-center overflow-hidden bg-[#0D1216]">
                    {/* Background Images & Gradient */}
                    <div className="absolute inset-0 z-0 select-none pointer-events-none">
                        <img
                            src="/figmaAssets/img15.png"
                            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                            alt="Background"
                        />
                        {/* Radial Gradient for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1216] via-transparent to-[#0D1216]/80" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0D1216]/50 to-[#0D1216]" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-8">
                        {/* Title */}
                        <h1 className="text-[#E7F6E7] text-[32px] md:text-[48px] font-black font-['Montserrat'] uppercase tracking-tight leading-none text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] mb-2 mt-4">
                            Hall of Fame
                        </h1>

                        {/* Character Image (Fox) */}
                        <div className="relative h-[65%] w-auto flex items-center justify-center">
                            <img
                                src="/figmaAssets/img14.png"
                                className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
                                alt="Hall of Fame Character"
                            />
                            {/* Back glow for character */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#E36826]/30 blur-[80px] rounded-full -z-10" />
                        </div>
                    </div>

                    {/* Navigation Tabs - Integrated at bottom */}
                    <div className="absolute bottom-4 z-20 w-full flex justify-center">
                        <div className="flex flex-wrap items-center justify-center gap-1 p-1 bg-[#141A20]/80 backdrop-blur-md rounded-xl border border-white/5 shadow-2xl">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-3 md:px-5 h-[32px] md:h-[36px] rounded-[8px] text-[11px] md:text-[12px] font-bold font-['Montserrat'] transition-all whitespace-nowrap",
                                        activeTab === tab
                                            ? "bg-[#FF5E1E] text-white shadow-lg"
                                            : "text-[#94A3B8] hover:text-white hover:bg-[#1E262E]"
                                    )}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Top 3 Cards Grid - Premium Replica */}
                <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 mt-16 px-4">
                    {/* Card 1: Gold (Left) - Styled with Orange Gradient */}
                    <div className="relative group mt-12 md:mt-0">
                        {/* 3D Floating Trophy */}
                        <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] md:w-[130px] md:h-[130px] z-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] will-change-transform">
                            <img
                                src="/figmaAssets/img13.png"
                                loading="lazy"
                                className="w-full h-full object-contain drop-shadow-2xl"
                                alt="Gold Trophy"
                            />
                        </div>

                        {/* Card Body */}
                        <div
                            className="h-[140px] md:h-[160px] rounded-[24px] p-5 pt-12 flex items-end justify-between shadow-[0_8px_30px_rgba(255,115,0,0.15)] relative overflow-hidden border border-[#FF7C11]/30 group-hover:border-[#FF7C11]/60 transition-all duration-300"
                            style={{ background: 'linear-gradient(180deg, rgba(255, 115, 0, 0.06) 0%, rgba(255, 124, 17, 0.16) 100%)' }}
                        >
                            {/* Inner Glow */}
                            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FF7C11]/10 to-transparent opacity-60 pointer-events-none" />

                            <div className="relative z-10 w-full flex items-center justify-between pl-1 pr-1 pb-1">
                                {/* User Info */}
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-[12px] bg-[#FF6B26] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(255,107,38,0.3)] border border-white/20 ring-2 ring-[#FF6B26]/30">
                                        <img src="/figmaAssets/56bf336f3c47fe882b0dcbc4d788a5b0af194097.png" loading="lazy" className="w-full h-full object-cover" alt="User" />
                                    </div>
                                    <span className="text-white font-black font-['Montserrat'] text-[15px] uppercase tracking-wide drop-shadow-md">BONUSSss</span>
                                </div>

                                {/* Prize Pill */}
                                <div className="h-[36px] bg-[#3E2112] rounded-[10px] pl-2 pr-4 flex items-center gap-2 border border-[#FF7C11]/30 shadow-inner group-hover:bg-[#4A2815] transition-colors">
                                    <div className="w-4 h-4 rounded-full bg-[#FF6B26] shadow-[0_0_10px_rgba(255,107,38,0.6)]" />
                                    <span className="text-[#F0D5C5] font-bold text-[13px] font-['Montserrat']">569 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Silver (Center) */}
                    <div className="relative group mt-12 md:mt-0">
                        <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] md:w-[130px] md:h-[130px] z-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] will-change-transform">
                            <img
                                src="/figmaAssets/img13.png"
                                loading="lazy"
                                className="w-full h-full object-contain filter hue-rotate-[190deg] saturate-[0.8] brightness-125 contrast-125 drop-shadow-2xl"
                                alt="Silver Trophy"
                            />
                        </div>

                        <div className="h-[140px] md:h-[160px] bg-gradient-to-b from-[#18262C] to-[#0A0E11] rounded-[24px] p-5 pt-12 flex items-end justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/5 group-hover:border-[#4FD6FF]/30 transition-all duration-300">
                            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#4FD6FF]/10 to-transparent opacity-40 pointer-events-none" />

                            <div className="relative z-10 w-full flex items-center justify-between pl-1 pr-1 pb-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-[12px] bg-[#FF6B26] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/10 ring-2 ring-[#FF6B26]/20">
                                        <img src="/figmaAssets/img10.png" loading="lazy" className="w-full h-full object-cover" alt="User" />
                                    </div>
                                    <span className="text-white font-black font-['Montserrat'] text-[15px] uppercase tracking-wide drop-shadow-md">BONUSSss</span>
                                </div>

                                <div className="h-[36px] bg-[#141E24] rounded-[10px] pl-2 pr-4 flex items-center gap-2 border border-white/10 shadow-inner group-hover:bg-[#1A262D] transition-colors">
                                    <div className="w-4 h-4 rounded-full bg-[#FF6B26] shadow-[0_0_10px_rgba(255,107,38,0.6)]" />
                                    <span className="text-[#B4C6D6] font-bold text-[13px] font-['Montserrat']">569 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Bronze (Right) */}
                    <div className="relative group mt-12 md:mt-0">
                        <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[120px] h-[120px] md:w-[130px] md:h-[130px] z-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] will-change-transform">
                            <img
                                src="/figmaAssets/img13.png"
                                loading="lazy"
                                className="w-full h-full object-contain filter hue-rotate-[-40deg] sepia-[0.4] saturate-150 brightness-95 contrast-125 drop-shadow-2xl"
                                alt="Bronze Trophy"
                            />
                        </div>

                        <div className="h-[140px] md:h-[160px] bg-gradient-to-b from-[#2C1D1D] to-[#120B0B] rounded-[24px] p-5 pt-12 flex items-end justify-between shadow-[0_8px_30px_rgba(0,0,0,0.5)] relative overflow-hidden border border-white/5 group-hover:border-[#CD7F32]/30 transition-all duration-300">
                            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#CD7F32]/10 to-transparent opacity-40 pointer-events-none" />

                            <div className="relative z-10 w-full flex items-center justify-between pl-1 pr-1 pb-1">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-[12px] bg-[#FF6B26] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/10 ring-2 ring-[#FF6B26]/20">
                                        <img src="/figmaAssets/img10.png" loading="lazy" className="w-full h-full object-cover" alt="User" />
                                    </div>
                                    <span className="text-white font-black font-['Montserrat'] text-[15px] uppercase tracking-wide drop-shadow-md">BONUSSss</span>
                                </div>

                                <div className="h-[36px] bg-[#241616] rounded-[10px] pl-2 pr-4 flex items-center gap-2 border border-white/10 shadow-inner group-hover:bg-[#2D1C1C] transition-colors">
                                    <div className="w-4 h-4 rounded-full bg-[#FF6B26] shadow-[0_0_10px_rgba(255,107,38,0.6)]" />
                                    <span className="text-[#D6B4B4] font-bold text-[13px] font-['Montserrat']">569 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leaderboard Table */}
                <Card className="w-full max-w-[1100px] mx-auto bg-[#0D1115]/50 border border-white/5 rounded-[32px] overflow-hidden shadow-2xl backdrop-blur-sm">
                    <div className="w-full overflow-x-auto custom-scrollbar">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-white/5">
                                    <th className="px-8 py-6 text-left text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase tracking-widest whitespace-nowrap">Place</th>
                                    <th className="px-8 py-6 text-left text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase tracking-widest whitespace-nowrap">User</th>
                                    <th className="px-8 py-6 text-left text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase tracking-widest whitespace-nowrap">Purchased</th>
                                    <th className="px-8 py-6 text-left text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase tracking-widest whitespace-nowrap">Tickets</th>
                                    <th className="px-8 py-6 text-left text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase tracking-widest whitespace-nowrap">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, idx) => (
                                    <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="w-10 h-10 rounded-full bg-[#1E262E] border border-white/5 flex items-center justify-center text-white font-black">
                                                {idx + 4}
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 rounded-lg bg-[#0D1216] border border-white/5 overflow-hidden">
                                                    <img src="/figmaAssets/img10.png" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="text-white font-bold font-['Montserrat'] uppercase text-sm">{row.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#BDFF25]" />
                                                <span className="text-white font-black text-sm uppercase tracking-tight">{row.purchased}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[#A1B4C6] font-bold text-sm uppercase">{row.tickets}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-[#BDFF25]" />
                                                <span className="text-white font-black text-sm uppercase tracking-tight">{row.price}</span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>

                <FooterLinksSection />
            </main>
        </div>
    );

    if (isMobile) {
        return (
            <div className="bg-[#12171d] overflow-x-hidden w-full min-h-screen relative flex flex-col items-center">
                {content}
            </div>
        );
    }

    return (
        <DesktopLayout>
            {content}
        </DesktopLayout>
    );
};
