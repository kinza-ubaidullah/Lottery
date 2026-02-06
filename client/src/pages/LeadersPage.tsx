import React, { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import { Trophy, Medal, Crown, Star, User } from "lucide-react";
import { cn } from "@/lib/utils";

import { BackButton } from "@/components/ui/BackButton";

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

            {/* Back Button */}
            <div className="w-full px-4 md:px-10 pt-6 flex justify-start">
                <BackButton label="Back to Home" href="/" />
            </div>

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
                    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pb-8 pt-4 md:pt-0">
                        {/* Title */}
                        <h1 className="text-[#E7F6E7] text-[28px] sm:text-[32px] md:text-[48px] font-black font-['Montserrat'] uppercase tracking-tight leading-none text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] mb-2 mt-4">
                            Hall of Fame
                        </h1>

                        {/* Character Image (Fox) */}
                        <div className="relative h-[55%] md:h-[65%] w-auto flex items-center justify-center mt-2 md:mt-0">
                            <img
                                src="/figmaAssets/img14.png"
                                className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
                                alt="Hall of Fame Character"
                            />
                            {/* Back glow for character */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] md:w-[200px] h-[160px] md:h-[200px] bg-[#E36826]/30 blur-[60px] md:blur-[80px] rounded-full -z-10" />
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
                <div className="w-full max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8 mb-8 mt-16 px-4">
                    {/* Card 1: Gold (Left) - Styled with Orange Gradient */}
                    <div className="relative group mt-12 sm:mt-8 md:mt-0">
                        {/* 3D Floating Trophy */}
                        <div className="absolute -top-[45px] md:-top-[60px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] md:w-[130px] md:h-[130px] z-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] will-change-transform">
                            <img
                                src="/figmaAssets/trophy.png"
                                loading="lazy"
                                className="w-full h-full object-contain drop-shadow-2xl"
                                alt="Gold Trophy"
                            />
                        </div>

                        {/* Card Body */}
                        <div
                            className="w-full md:w-auto h-[130px] md:h-[160px] rounded-[12px] p-4 md:p-5 pt-10 md:pt-12 flex items-end justify-between shadow-[0_8px_30px_rgba(255,115,0,0.15)] relative overflow-hidden border border-[#FF7C11]/30 group-hover:border-[#FF7C11]/60 transition-all duration-300"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 115, 0, 0.06) 0%, rgba(255, 124, 17, 0.16) 100%)'
                            }}
                        >
                            {/* Inner Glow */}
                            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FF7C11]/10 to-transparent opacity-60 pointer-events-none" />

                            <div className="relative z-10 w-full flex items-center justify-between pl-1 pr-1 pb-1">
                                {/* User Info */}
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] bg-[#FF6B26] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(255,107,38,0.3)] border border-white/20 ring-2 ring-[#FF6B26]/30">
                                        <img src="/figmaAssets/img16.png" className="w-full h-full object-contain" alt="User" />
                                    </div>
                                    <span className="text-white font-black font-['Montserrat'] text-[13px] md:text-[15px] uppercase tracking-wide drop-shadow-md truncate max-w-[80px] md:max-w-none">BONUSss</span>
                                </div>

                                {/* Prize Pill */}
                                <div className="w-[100px] md:w-[128px] h-[36px] md:h-[44px] rounded-[8px] px-2 md:px-4 py-2 md:py-3 flex items-center justify-center gap-2 bg-white/[0.05] transition-colors">
                                    <span className="text-[#F0D5C5] font-bold text-[11px] md:text-[13px] font-['Montserrat']">569 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Silver (Center) */}
                    <div className="relative group mt-12 sm:mt-8 md:mt-0">
                        <div className="absolute -top-[45px] md:-top-[60px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] md:w-[130px] md:h-[130px] z-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] will-change-transform">
                            <img
                                src="/figmaAssets/trophy.png"
                                loading="lazy"
                                className="w-full h-full object-contain filter hue-rotate-[190deg] saturate-[0.8] brightness-125 contrast-125 drop-shadow-2xl"
                                alt="Silver Trophy"
                            />
                        </div>

                        <div
                            className="h-[130px] md:h-[160px] rounded-[24px] p-4 md:p-5 pt-10 md:pt-12 flex items-end justify-between shadow-[0_8px_30px_rgba(0,208,255,0.15)] relative overflow-hidden border border-[#4FD6FF]/30 group-hover:border-[#4FD6FF]/60 transition-all duration-300"
                            style={{
                                background: 'linear-gradient(180deg, rgba(0, 208, 255, 0.06) 0%, rgba(212, 246, 255, 0.16) 100%)'
                            }}
                        >
                            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#4FD6FF]/10 to-transparent opacity-40 pointer-events-none" />

                            <div className="relative z-10 w-full flex items-center justify-between pl-1 pr-1 pb-1">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] bg-[#FF6B26] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.4)] border border-white/10 ring-2 ring-[#FF6B26]/20">
                                        <img src="/figmaAssets/img16.png" className="w-full h-full object-contain" alt="User" />
                                    </div>
                                    <span className="text-white font-black font-['Montserrat'] text-[13px] md:text-[15px] uppercase tracking-wide drop-shadow-md truncate max-w-[80px] md:max-w-none">BONUSss</span>
                                </div>

                                <div className="w-[100px] md:w-[128px] h-[36px] md:h-[44px] rounded-[8px] px-2 md:px-4 py-2 md:py-3 flex items-center justify-center gap-2 bg-white/[0.05] transition-colors">
                                    <span className="text-[#B4C6D6] font-bold text-[11px] md:text-[13px] font-['Montserrat']">569 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Bronze (Right) */}
                    <div className="relative group mt-12 sm:mt-8 md:mt-0">
                        <div className="absolute -top-[45px] md:-top-[60px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] md:w-[130px] md:h-[130px] z-20 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] will-change-transform">
                            <img
                                src="/figmaAssets/trophy.png"
                                loading="lazy"
                                className="w-full h-full object-contain filter hue-rotate-[-40deg] sepia-[0.4] saturate-150 brightness-95 contrast-125 drop-shadow-2xl"
                                alt="Bronze Trophy"
                            />
                        </div>

                        <div
                            className="h-[130px] md:h-[160px] rounded-[24px] p-4 md:p-5 pt-10 md:pt-12 flex items-end justify-between shadow-[0_8px_30px_rgba(255,117,117,0.15)] relative overflow-hidden border border-[#FF7575]/30 group-hover:border-[#FF7575]/60 transition-all duration-300"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 117, 117, 0.06) 0%, rgba(255, 102, 64, 0.16) 100%)'
                            }}
                        >
                            <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#FF7575]/10 to-transparent opacity-40 pointer-events-none" />

                            <div className="relative z-10 w-full flex items-center justify-between pl-1 pr-1 pb-1">
                                <div className="flex items-center gap-2 md:gap-3">
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-[10px] md:rounded-[12px] bg-[#FF6B26] flex items-center justify-center overflow-hidden shrink-0 shadow-[0_4px_12px_rgba(255,107,38,0.3)] border border-white/20 ring-2 ring-[#FF6B26]/20">
                                        <img src="/figmaAssets/img16.png" className="w-full h-full object-contain" alt="User" />
                                    </div>
                                    <span className="text-white font-black font-['Montserrat'] text-[13px] md:text-[15px] uppercase tracking-wide drop-shadow-md truncate max-w-[80px] md:max-w-none">BONUSss</span>
                                </div>

                                {/* Prize Pill */}
                                <div className="w-[100px] md:w-[128px] h-[36px] md:h-[44px] rounded-[8px] px-2 md:px-4 py-2 md:py-3 flex items-center justify-center gap-2 bg-white/[0.05] transition-colors">
                                    <span className="text-[#D6B4B4] font-bold text-[11px] md:text-[13px] font-['Montserrat']">569 USD</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Leaderboard Table */}
                {/* Leaderboard Table */}
                <Card className="w-full max-w-[1100px] mx-auto bg-transparent border-none shadow-none mt-8">
                    <div className="w-full overflow-x-auto custom-scrollbar">
                        <table className="w-full border-separate border-spacing-y-2 px-2">
                            <thead>
                                <tr>
                                    <th className="px-6 py-4 text-left text-[#9FA3A9] text-[13px] font-bold font-['Montserrat'] whitespace-nowrap pl-8">Place</th>
                                    <th className="px-6 py-4 text-left text-[#9FA3A9] text-[13px] font-bold font-['Montserrat'] whitespace-nowrap">User</th>
                                    <th className="px-6 py-4 text-left text-[#9FA3A9] text-[13px] font-bold font-['Montserrat'] whitespace-nowrap">Purchased</th>
                                    <th className="px-6 py-4 text-left text-[#9FA3A9] text-[13px] font-bold font-['Montserrat'] whitespace-nowrap">Tickets</th>
                                    <th className="px-6 py-4 text-left text-[#9FA3A9] text-[13px] font-bold font-['Montserrat'] whitespace-nowrap pr-8">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((row, idx) => (
                                    <tr key={idx} className="group transition-all duration-300 hover:-translate-y-1">
                                        <td className="px-4 md:px-6 py-4 bg-[#131920] first:rounded-l-[16px] last:rounded-r-[16px] border-y border-l border-[#1E262E] group-hover:border-[#2A343E] pl-4 md:pl-8 overflow-hidden">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] md:rounded-[12px] bg-[#252F39] flex items-center justify-center text-white font-bold font-['Montserrat'] text-[12px] md:text-base shadow-inner border border-white/5 shrink-0">
                                                {idx + 4}
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-6 py-4 bg-[#131920] border-y border-[#1E262E] group-hover:border-[#2A343E]">
                                            <div className="flex items-center gap-2 md:gap-4">
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] md:rounded-[10px] bg-[#FF6B26] flex items-center justify-center overflow-hidden border border-white/10 shadow-lg shrink-0">
                                                    <img src="/figmaAssets/img16.png" className="w-full h-full object-contain" alt="User" />
                                                </div>
                                                <span className="text-white font-bold font-['Montserrat'] text-[13px] md:text-[15px] tracking-wide truncate max-w-[80px] md:max-w-[120px] lg:max-w-none">{row.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-6 py-4 bg-[#131920] border-y border-[#1E262E] group-hover:border-[#2A343E]">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#BDFF25] shadow-[0_0_8px_rgba(189,255,37,0.4)] shrink-0" />
                                                <span className="text-white font-bold text-[12px] md:text-[14px] font-['Montserrat'] tracking-wide truncate">{row.purchased}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-6 py-4 bg-[#131920] border-y border-[#1E262E] group-hover:border-[#2A343E] hidden sm:table-cell">
                                            <div className="flex items-center gap-2.5">
                                                <div className="flex items-center justify-center w-6 h-6">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M19.5 8.25H4.5C3.67157 8.25 3 8.92157 3 9.75V14.25C3 15.0784 3.67157 15.75 4.5 15.75H19.5C20.3284 15.75 21 15.0784 21 14.25V9.75C21 8.92157 20.3284 8.25 19.5 8.25Z" stroke="#BDFF25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M8.25 8.25V15.75" stroke="#BDFF25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" />
                                                    </svg>
                                                </div>
                                                <span className="text-[#A1B4C6] font-medium text-[14px] font-['Montserrat']">{row.tickets}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 md:px-6 py-4 bg-[#131920] first:rounded-l-[16px] last:rounded-r-[16px] border-y border-r border-[#1E262E] group-hover:border-[#2A343E] pr-4 md:pr-8">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#BDFF25] shadow-[0_0_8px_rgba(189,255,37,0.4)] shrink-0" />
                                                <span className="text-white font-bold text-[12px] md:text-[14px] font-['Montserrat'] tracking-wide truncate">{row.price}</span>
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
