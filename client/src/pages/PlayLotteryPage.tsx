import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { Card, CardContent } from "@/components/ui/card";
import { LotteryDrawCard } from "@/components/cards/LotteryDrawCard";
import { PreviousWinsListSection } from "./sections/PreviousWinsListSection";
import { DesktopLayout } from "@/components/layout/DesktopLayout";

export const PlayLotteryPage = (): JSX.Element => {
    const isMobile = useIsMobile();

    const content = (
        <div className="w-full flex flex-col items-center">
            {isMobile && <AppHeaderSection />}

            <main className={isMobile ? "w-full max-w-[1280px] flex flex-col items-center gap-12 px-4 py-8 md:px-8 md:py-16" : "w-full flex flex-col gap-12"}>

                {/* Main Banner - Designed to match the screenshot */}
                <Card
                    className="relative w-full rounded-[24px] md:rounded-[40px] overflow-hidden border-none shadow-2xl min-h-[400px] md:min-h-[450px] flex items-center z-10"
                    style={{ background: 'linear-gradient(180deg, #13191F 0%, #1F262E 100%)' }}
                >
                    {/* Background Atmosphere & Pattern */}
                    <div className="absolute inset-0 pointer-events-none z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }} />
                    <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 10% 50%, rgba(143, 216, 17, 0.25) 0%, transparent 50%)' }} />
                    <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 90% 40%, rgba(227, 104, 38, 0.2) 0%, transparent 60%)' }} />
                    <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0" style={{ background: 'radial-gradient(circle at 100% 0%, rgba(0,0,0,0.4) 0%, transparent 50%)' }} />
                    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" style={{ background: 'radial-gradient(circle at 100% 60%, rgba(255, 111, 63, 0.1) 0%, transparent 70%)' }} />

                    {/* Styled Gradient Border */}
                    <div className="absolute inset-0 pointer-events-none z-10">
                        <div className="absolute inset-0 p-[1.5px] rounded-[24px] md:rounded-[40px]" style={{ background: 'linear-gradient(245.7deg, #FF8142 0%, rgba(153, 77, 39, 0) 12.41%), linear-gradient(65.14deg, #9AFF42 2.8%, rgba(154, 255, 66, 0) 14.46%)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }} />
                    </div>

                    {/* Main Character - Aligned to bottom 0 for cleaner responsive behavior */}
                    <img
                        src="/figmaAssets/img2.png"
                        className="absolute right-0 bottom-0 h-[85%] md:h-[100%] w-auto object-contain z-10 pl-4 md:pl-10"
                        alt="Character"
                    />

                    {/* Floating Assets & Balls */}
                    <img src="/figmaAssets/image-193-1.png" className="absolute top-[12%] right-[25%] w-8 md:w-20 opacity-90 animate-pulse z-0" alt="Coin 1" />
                    <img src="/figmaAssets/image-193-1.png" className="absolute top-[5%] right-[10%] w-6 md:w-16 opacity-80 z-0" alt="Coin 2" />
                    <img src="/figmaAssets/image-193-1.png" className="absolute bottom-[10%] right-[55%] w-8 md:w-20 opacity-80 z-20" alt="Coin 3" />

                    <img src="/figmaAssets/ball2.png" className="absolute top-[50%] right-[32%] w-10 md:w-24 z-20 drop-shadow-xl" alt="Ball Yellow 3" />
                    <img src="/figmaAssets/ball8.png" className="absolute top-[25%] right-[5%] w-8 md:w-20 z-0 drop-shadow-lg" alt="Ball Orange 2" />
                    <img src="/figmaAssets/ball7.png" className="absolute bottom-[5%] right-[2%] w-16 md:w-36 z-20 drop-shadow-2xl" alt="Ball Purple 7" />

                    <CardContent className="relative w-full h-full p-6 md:p-12 flex flex-col justify-center z-20 overflow-hidden">



                        <div className="flex flex-col gap-6 md:gap-8 relative z-30 w-full md:w-[60%] h-full justify-center pt-8 md:pt-0 items-start text-left">

                            {/* "PLAY LOTTERY" Button */}
                            <button className="inline-flex items-center gap-2 md:gap-3 w-[200px] md:w-[280px] h-[40px] md:h-[60px] rounded-[8px] md:rounded-[12px] pl-1.5 pr-3 pt-1 pb-2 shadow-[0_4px_20px_rgba(143,216,17,0.3)] z-40 transition-transform hover:scale-105 active:scale-95 text-left items-center"
                                style={{ background: 'linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)' }}>
                                <div className="w-7 h-7 md:w-11 md:h-11 bg-[#FF6B26] rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-white text-[12px] md:text-[20px] font-bold">6</span>
                                </div>
                                <span className="text-[#0D1115] text-[13px] md:text-[22px] font-black font-['Montserrat'] tracking-tight truncate leading-none">PLAY LOTTERY</span>
                            </button>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-white text-[32px] md:text-[56px] font-[900] font-['Montserrat'] leading-[0.9] tracking-tight">
                                    Exact Number
                                </h2>
                                <p className="text-[#A1B4C6] text-base md:text-2xl font-medium font-['Outfit'] max-w-[400px] leading-snug">
                                    Choose 6 digits and the order of characters must match
                                </p>
                            </div>

                        </div>
                    </CardContent>
                </Card>

                {/* Live & Upcoming Section Header */}
                <div className="flex items-center gap-2">
                    <span className="text-[#BDFF25] text-2xl">★</span>
                    <h3 className="text-white text-2xl md:text-3xl font-bold font-['Montserrat']">Live & Upcoming</h3>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <LotteryDrawCard
                        status="Expired"
                        blockNumber="239504"
                        jackpotValue="17.6K"
                        prizePoolValue="17.6K"
                    />
                    <LotteryDrawCard
                        status="Active"
                        blockNumber="239505"
                        jackpotValue="22.5K"
                        prizePoolValue="15.0K"
                    />
                    <LotteryDrawCard
                        status="Next round"
                        blockNumber="239506"
                        jackpotValue="17.6K"
                        prizePoolValue="17.6K"
                    />
                    <LotteryDrawCard
                        status="Coming soon"
                        blockNumber="239507"
                        jackpotValue="-"
                        prizePoolValue="-"
                        timer="09:44"
                    />
                </div>

                {/* Previous Wins Section */}
                <div className="w-full">
                    <PreviousWinsListSection />
                </div>

            </main>

            <FooterLinksSection />
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
