import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface WinnerBreakdownItem {
    matchCount: number;
    userCount: number;
}

interface LotteryResultsDetailCardProps {
    status: string;
    blockNumber: string;
    prizePool: string;
    drawDate: string;
    totalTickets: string;
    winningNumber: string;
    winnerCount: number;
    breakdown: WinnerBreakdownItem[];
    className?: string;
}

export const LotteryResultsDetailCard: React.FC<LotteryResultsDetailCardProps> = ({
    status = "Completed",
    blockNumber,
    prizePool,
    drawDate,
    totalTickets,
    winningNumber,
    winnerCount,
    breakdown,
    className = ""
}) => {
    return (
        <div className={`w-full bg-[#0F1419] rounded-[24px] border border-white/5 shadow-2xl relative flex flex-col pt-8 pb-10 px-6 group transition-all duration-300 hover:scale-[1.01] hover:z-30 ${className}`}>

            {/* Header */}
            <div className="flex flex-col items-center gap-2 mb-6 text-center">
                <Badge className="bg-[#242D35] hover:bg-[#2e3943] text-white font-bold font-['Outfit'] px-4 py-1.5 rounded-[8px] border-none text-[14px]">
                    {status}
                </Badge>
                <div className="flex items-center gap-2">
                    <span className="text-[#525D68] font-bold font-['Montserrat'] text-[18px]">Block</span>
                    <span className="text-white font-black font-['Montserrat'] text-[24px]">#{blockNumber}</span>
                </div>
            </div>

            {/* Stats Grid - Fixed to 2 columns for all screens */}
            <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-[#141A20] rounded-[16px] p-4 flex flex-col gap-1">
                    <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat']">Prize Pool</span>
                    <span className="text-white text-[16px] font-black font-['Montserrat'] whitespace-nowrap">{prizePool} USDT</span>
                </div>
                <div className="bg-[#141A20] rounded-[16px] p-4 flex flex-col gap-1">
                    <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat']">Draw Date</span>
                    <span className="text-white text-[16px] font-black font-['Montserrat'] whitespace-nowrap">{drawDate}</span>
                </div>
                <div className="bg-[#141A20] rounded-[16px] p-4 flex flex-col gap-1">
                    <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat']">Total Tickets</span>
                    <span className="text-white text-[16px] font-black font-['Montserrat']">{totalTickets}</span>
                </div>
                <div className="bg-[#141A20] rounded-[16px] p-4 flex flex-col gap-1">
                    <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat']">Winning Number</span>
                    <span className="text-white text-[18px] font-black font-['Montserrat'] tracking-widest">{winningNumber}</span>
                </div>
            </div>

            {/* Winner Breakdown Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <img src="/figmaAssets/champion.svg" className="w-5 h-5 opacity-80" alt="Crown" />
                    <span className="text-white font-black font-['Montserrat'] text-[15px] uppercase">Winner Breakdown</span>
                </div>
                <span className="text-[#00F0FF] font-black font-['Montserrat'] text-[15px] uppercase">{winnerCount} users</span>
            </div>

            {/* Breakdown Items - Prize Tiers */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-4 mb-6">
                {breakdown.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 bg-[#141A20] rounded-[16px] py-4 px-2 border border-white/5 transition-colors hover:border-[#BDFF25]/30">
                        <div className="w-8 h-8 rounded-full bg-[#BDFF25] flex items-center justify-center shadow-[0_0_15px_rgba(189,255,37,0.3)]">
                            <span className="text-black font-black font-['Montserrat'] text-[14px]">{item.matchCount}</span>
                        </div>
                        <span className="text-white font-black font-['Montserrat'] text-[16px]">{item.userCount}</span>
                    </div>
                ))}
            </div>

            {/* View More Button - Centered at bottom, floating outside */}
            <div className="absolute bottom-[-24px] left-0 right-0 flex justify-center z-40">
                <Button className="h-[48px] px-8 bg-[#1F262E] hover:bg-[#29323d] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-2px] active:scale-95">
                    <span className="text-white font-bold font-['Montserrat'] text-[16px]">View more</span>
                </Button>
            </div>
        </div>
    );
};
