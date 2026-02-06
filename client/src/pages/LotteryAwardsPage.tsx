import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { cn } from "@/lib/utils";
import { DesktopLayout } from "@/components/layout/DesktopLayout";

import { BackButton } from "@/components/ui/BackButton";

export const LotteryAwardsPage = () => {
    const isMobile = useIsMobile();
    const [activeTab, setActiveTab] = useState("all"); // all, my, special

    const content = (
        <div className="w-full flex flex-col items-center bg-[#0D1216] min-h-screen">
            {/* Back Button */}
            <div className="w-full max-w-[1240px] px-4 pt-6 flex justify-start">
                <BackButton label="Back to Dashboard" href="/dashboard" />
            </div>
            {/* Hero Section */}
            <div className="w-full relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background - hall1.png */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('/figmaAssets/hall1.png')`,
                    }}
                >
                    <div className="absolute inset-0 bg-[#0D1216]/60 bg-gradient-to-t from-[#0D1216] via-transparent to-[#0D1216]/20" />
                </div>

                {/* Floating Elements (Coins/Tickets) - Decorative */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <img src="/figmaAssets/bitcoin-3-1.png" className="absolute top-10 left-[10%] w-16 h-16 md:w-20 md:h-20 animate-bounce delay-700 opacity-80 rotate-[-15deg]" alt="coin" />
                    <img src="/figmaAssets/bitcoin-3-1.png" className="absolute top-20 right-[15%] w-14 h-14 md:w-24 md:h-24 animate-pulse delay-1000 opacity-90 rotate-[15deg]" alt="coin" />
                    {/* Falling tickets or other elements can be added here */}
                </div>

                {/* Main Content */}
                <div className="relative z-20 flex flex-col items-center justify-end h-full w-full max-w-[1240px] px-4 pb-0">
                    {/* Title */}
                    <h1 className="font-['Montserrat'] font-[900] text-3xl md:text-5xl text-[#E3FFB2] uppercase tracking-wider mb-2 md:mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] text-center w-full px-4">
                        Lottery Awards
                    </h1>

                    {/* Fox Image - img17.png */}
                    <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[450px] md:h-[450px] -mb-6 md:-mb-10 z-10 flex items-end justify-center">
                        <img
                            src="/figmaAssets/img17.png"
                            className="w-full h-full object-contain drop-shadow-2xl filter brightness-110"
                            alt="Fox King"
                        />
                    </div>

                    {/* Tabs - Optimized for mobile */}
                    <div className="absolute bottom-4 sm:bottom-6 z-30 bg-[#1A1F26] p-1 md:p-1.5 rounded-[12px] md:rounded-[16px] border border-white/5 flex items-center gap-0.5 md:gap-1 shadow-2xl backdrop-blur-md max-w-[95%] overflow-x-auto no-scrollbar">
                        {["all", "my", "special"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={cn(
                                    "px-3 sm:px-6 py-2 sm:py-2.5 rounded-[8px] md:rounded-[12px] text-[11px] sm:text-[13px] font-bold font-['Montserrat'] transition-all whitespace-nowrap",
                                    activeTab === tab
                                        ? "bg-[#FF6B26] text-white shadow-lg"
                                        : "text-[#9FA3A9] hover:text-white hover:bg-white/5"
                                )}
                            >
                                {tab === "all" ? "All awards" : tab === "my" ? "My awards" : "Special awards"}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Awards Grid Section */}
            <div className="w-full max-w-[1240px] px-4 py-8 md:py-16 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {[
                        {
                            id: 1,
                            title: "Baby Fox",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Claimed",
                            image: "/figmaAssets/img18.png",
                            colorStart: "#FF9C00", // Orange
                            colorEnd: "#FF4D00"
                        },
                        {
                            id: 2,
                            title: "Player Fox",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Unclaimed",
                            image: "/figmaAssets/img27.png",
                            colorStart: "#8F45FF",
                            colorEnd: "#581CFF"
                        },
                        {
                            id: 3,
                            title: "Lucky Fox",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Claimed",
                            image: "/figmaAssets/img20.png", // Green
                            colorStart: "#65E016",
                            colorEnd: "#3EA800"
                        },
                        {
                            id: 4,
                            title: "Streak Fox",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Unclaimed",
                            image: "/figmaAssets/img21.png", // Blue
                            colorStart: "#00E0FF",
                            colorEnd: "#0085FF"
                        },
                        {
                            id: 5,
                            title: "Lucky Belly Rub",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Unclaimed",
                            image: "/figmaAssets/img18.png", // Reuse Orange/Red
                            colorStart: "#FF6B26",
                            colorEnd: "#E34900"
                        },
                        {
                            id: 6,
                            title: "Golden Fox",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Unclaimed",
                            image: "/figmaAssets/img20.png", // Reuse Green
                            colorStart: "#65E016",
                            colorEnd: "#3EA800"
                        },
                        {
                            id: 7,
                            title: "Fox Party",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Unclaimed",
                            image: "/figmaAssets/img21.png", // Reuse Blue
                            colorStart: "#00E0FF",
                            colorEnd: "#0085FF"
                        },
                        {
                            id: 8,
                            title: "Legend Fox",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Unclaimed",
                            image: "/figmaAssets/img22.png", // Red
                            colorStart: "#FF3D71",
                            colorEnd: "#FF1C45"
                        },
                        {
                            id: 9,
                            title: "Fox Zen",
                            desc: "Your very first ticket — welcome to the bamboo forest!",
                            status: "Unclaimed",
                            image: "/figmaAssets/img29.png",
                            colorStart: "#8F45FF",
                            colorEnd: "#581CFF"
                        }
                    ].map((award) => (
                        <div
                            key={award.id}
                            className="relative group h-[120px] sm:h-[140px] md:h-[160px] rounded-[16px] sm:rounded-[24px] overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300 shadow-xl"
                        >
                            {/* Background Layers */}
                            <div className="absolute inset-0 z-0 bg-[#151A20]" />
                            <div
                                className="absolute inset-0 z-0 opacity-100"
                                style={{ background: `linear-gradient(135deg, ${award.colorStart}20 0%, rgba(21, 26, 32, 0) 60%)` }}
                            />

                            {/* Radial Glow Spot */}
                            <div
                                className="absolute -left-4 -top-4 w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full blur-[40px] md:blur-[50px] opacity-30 z-0 transition-opacity group-hover:opacity-50"
                                style={{ background: award.colorStart }}
                            />

                            {/* Border Highlight on Hover */}
                            <div className="absolute inset-0 border border-white/5 group-hover:border-white/10 rounded-[16px] sm:rounded-[24px] pointer-events-none z-20 transition-colors" />

                            {/* Content */}
                            <div className="relative z-10 w-full h-full flex items-center p-3 md:p-4">
                                {/* Image Left */}
                                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] shrink-0 mr-2 md:mr-3 drop-shadow-2xl transition-transform group-hover:scale-105">
                                    <img src={award.image} className="w-full h-full object-contain" alt={award.title} />
                                </div>

                                {/* Text Right */}
                                <div className="flex-1 pt-4 sm:pt-5 pr-1">
                                    {/* Claimed Status */}
                                    <div className={cn(
                                        "absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-[4px] sm:rounded-[6px] text-[8px] sm:text-[10px] font-black uppercase tracking-wider",
                                        award.status === "Claimed"
                                            ? "bg-[#BDFF25] text-[#0D1216] shadow-[0_0_12px_rgba(189,255,37,0.3)]"
                                            : "bg-[#252F39] text-[#9FA3A9] border border-white/5"
                                    )}>
                                        {award.status}
                                    </div>

                                    <h3 className="text-white font-[900] font-['Montserrat'] text-[14px] sm:text-[16px] md:text-[18px] mb-1 sm:mb-1.5 leading-none tracking-tight truncate max-w-[100px] sm:max-w-none">
                                        {award.title}
                                    </h3>
                                    <p className="text-[#9FA3A9] text-[9px] sm:text-[11px] leading-tight font-medium font-['Montserrat'] line-clamp-2">
                                        {award.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <FooterLinksSection />
        </div>
    );

    if (isMobile) {
        return content;
    }

    return (
        <DesktopLayout>
            {content}
        </DesktopLayout>
    );
};
