import React from "react";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { Card, CardContent } from "@/components/ui/card";
import { LotteryDrawCard } from "@/components/cards/LotteryDrawCard";
import { PreviousWinsListSection } from "./sections/PreviousWinsListSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LotteryResultsDetailCard } from "@/components/cards/LotteryResultsDetailCard";

const completedDraws = [
    {
        blockNumber: "239504",
        prizePool: "17.6K",
        drawDate: "December 21, 2025",
        totalTickets: "8 900",
        winningNumber: "B3A840",
        winnerCount: 88,
        breakdown: [
            { matchCount: 6, userCount: 0 }, { matchCount: 5, userCount: 12 }, { matchCount: 3, userCount: 11 }, { matchCount: 2, userCount: 88 }, { matchCount: 1, userCount: 1 }
        ]
    },
    {
        blockNumber: "239503",
        prizePool: "15.0K",
        drawDate: "December 20, 2025",
        totalTickets: "7 200",
        winningNumber: "A1D5B2",
        winnerCount: 45,
        breakdown: [
            { matchCount: 6, userCount: 0 }, { matchCount: 5, userCount: 5 }, { matchCount: 3, userCount: 10 }, { matchCount: 2, userCount: 30 }, { matchCount: 1, userCount: 0 }
        ]
    },
    {
        blockNumber: "239502",
        prizePool: "12.5K",
        drawDate: "December 19, 2025",
        totalTickets: "6 500",
        winningNumber: "C2E8F1",
        winnerCount: 32,
        breakdown: [
            { matchCount: 6, userCount: 0 }, { matchCount: 5, userCount: 2 }, { matchCount: 3, userCount: 8 }, { matchCount: 2, userCount: 22 }, { matchCount: 1, userCount: 0 }
        ]
    },
    {
        blockNumber: "239501",
        prizePool: "20.2K",
        drawDate: "December 18, 2025",
        totalTickets: "10 100",
        winningNumber: "D4F9G7",
        winnerCount: 112,
        breakdown: [
            { matchCount: 6, userCount: 1 }, { matchCount: 5, userCount: 15 }, { matchCount: 3, userCount: 20 }, { matchCount: 2, userCount: 76 }, { matchCount: 1, userCount: 0 }
        ]
    }
];

export const LotteryResultsPage = (): JSX.Element => {
    return (
        <div className="bg-[#12171d] overflow-x-hidden w-full min-h-screen relative flex flex-col items-center">
            <div className="w-full flex flex-col items-center">
                <AppHeaderSection />

                <main className="w-full max-w-[1280px] flex flex-col items-center gap-12 px-4 py-8 md:px-8 md:py-16">

                    {/* Results Banner */}
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

                        {/* Main Character (Fox holding book) */}
                        <img
                            src="/figmaAssets/book.png"
                            className="absolute right-0 bottom-0 h-[85%] md:h-[100%] w-auto object-contain z-10 pl-4 md:pl-10"
                            alt="Fox with results"
                        />

                        {/* Floating Assets - Adjusted for precision */}
                        <img src="/figmaAssets/image-193-1.png" className="absolute top-[15%] left-[50%] w-8 md:w-20 opacity-60 animate-pulse z-0" alt="Coin" />

                        <img src="/figmaAssets/money1.png" className="absolute top-[20%] right-[40%] w-12 md:w-32 opacity-80 z-20" alt="Cash 1" />
                        <img src="/figmaAssets/money2.png" className="absolute bottom-[20%] left-[45%] w-14 md:w-36 z-20" alt="Cash 2" />
                        <img src="/figmaAssets/money1.png" className="absolute bottom-[5%] left-[25%] w-10 md:w-28 z-0 opacity-40 h-auto" alt="Cash 3" />

                        <img src="/figmaAssets/ball2.png" className="absolute bottom-[30%] left-[37%] w-10 md:w-24 z-20 drop-shadow-xl" alt="Ball Yellow 3" />
                        <img src="/figmaAssets/ball8.png" className="absolute top-[25%] right-[5%] w-8 md:w-20 z-0 drop-shadow-lg" alt="Ball Orange 2" />
                        <img src="/figmaAssets/ball7.png" className="absolute bottom-[5%] right-[2%] w-16 md:w-36 z-20 drop-shadow-2xl" alt="Ball Purple 7" />

                        <CardContent className="relative w-full h-full p-6 md:p-12 flex flex-col justify-center z-20 overflow-hidden">
                            <div className="flex flex-col gap-2 md:gap-4 relative z-30 w-full md:w-[60%] h-full justify-center pt-8 md:pt-0 items-start text-left">
                                <h1 className="text-white text-[36px] md:text-[64px] font-[900] font-['Montserrat'] leading-[0.8] tracking-tight uppercase">
                                    Check past lotteries
                                </h1>
                                <p className="text-[#A1B4C6] text-lg md:text-2xl font-medium font-['Outfit'] max-w-[500px] leading-snug">
                                    Check previous winners
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="w-full flex flex-col gap-8">
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-2">
                                <span className="text-[#BDFF25] text-2xl drop-shadow-[0_0_8px_rgba(189,255,37,0.4)]">★</span>
                                <h3 className="text-white text-2xl md:text-3xl font-[900] font-['Montserrat'] uppercase tracking-tight">Live & Upcoming</h3>
                            </div>

                            <Tabs defaultValue="completed" className="w-full flex flex-col items-center">
                                <TabsList className="bg-[#141A20]/50 h-14 md:h-16 p-0 flex justify-center gap-2 rounded-xl overflow-hidden border border-white/5 w-full md:w-[600px] mb-12">
                                    {["completed", "active", "pending"].map((tab) => (
                                        <TabsTrigger
                                            key={tab}
                                            value={tab}
                                            className="relative flex-1 h-full px-4 font-['Montserrat'] font-bold text-sm md:text-lg capitalize transition-all border-none rounded-none
                                                       data-[state=active]:bg-transparent 
                                                       data-[state=active]:bg-[linear-gradient(180deg,rgba(189,255,37,0.15)_0%,transparent_100%)] 
                                                       data-[state=active]:text-white 
                                                       text-[#525D68]"
                                        >
                                            {tab}
                                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#BDFF25] opacity-0 data-[state=active]:opacity-100 transition-opacity z-10 shadow-[0_0_10px_rgba(189,255,37,0.5)]" />
                                        </TabsTrigger>
                                    ))}
                                </TabsList>

                                <TabsContent value="completed" className="w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20 w-full px-2">
                                        {completedDraws.map((draw, i) => (
                                            <LotteryResultsDetailCard
                                                key={i}
                                                {...draw}
                                                status="Completed"
                                            />
                                        ))}
                                    </div>
                                </TabsContent>

                                <TabsContent value="active" className="w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 w-full max-w-[1000px]">
                                        <LotteryDrawCard status="Active" blockNumber="239505" jackpotValue="22.5K" prizePoolValue="15.0K" />
                                        <LotteryDrawCard status="Active" blockNumber="239504" jackpotValue="18.2K" prizePoolValue="12.0K" />
                                    </div>
                                </TabsContent>

                                <TabsContent value="pending" className="w-full">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 w-full max-w-[1000px]">
                                        <LotteryDrawCard status="Next round" blockNumber="239506" jackpotValue="17.6K" prizePoolValue="17.6K" />
                                        <LotteryDrawCard status="Coming soon" blockNumber="239507" jackpotValue="-" prizePoolValue="-" timer="09:44" />
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>

                </main>

                <FooterLinksSection />
            </div>
        </div>
    );
};
