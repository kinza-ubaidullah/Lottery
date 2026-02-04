import React from "react";
import { Badge } from "@/components/ui/badge";

interface LotteryDrawCardProps {
    status: "Expired" | "Active" | "Next round" | "Coming soon";
    blockNumber: string;
    jackpotValue: string;
    prizePoolValue: string;
    className?: string;
    timer?: string;
}

export const LotteryDrawCard: React.FC<LotteryDrawCardProps> = ({
    status,
    blockNumber,
    jackpotValue,
    prizePoolValue,
    className = "",
    timer = "09:44"
}) => {
    // Style mappings based on status
    const statusConfig = {
        "Expired": {
            badgeBg: "bg-[#242D35]",
            badgeBorder: "none",
            btnBg: "#1A2128",
            btnBorder: "1px solid rgba(255, 255, 255, 0.05)",
            btnText: "Result pending",
            btnTextColor: "text-[#525D68]",
            cardBg: "#0F1419",
            cardBorder: "border-white/5",
            borderGradient: null
        },
        "Active": {
            badgeBg: "linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)",
            badgeBorder: "1px solid #BEFF25",
            btnBg: "linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)",
            btnBorder: "1px solid #BEFF25",
            btnText: "Participate",
            btnTextColor: "text-[#0F1419]",
            cardBg: "radial-gradient(circle at 50% -20%, rgba(189, 255, 37, 0.15) 0%, #0F1419 60%)",
            cardBorder: "border-[#BDFF25]/20",
            borderGradient: null
        },
        "Next round": {
            badgeBg: "linear-gradient(180deg, #1A131F 0%, #9726E3 100%)",
            badgeBorder: "1px solid rgba(175, 63, 255, 0.2)",
            btnBg: "linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)",
            btnBorder: "1px solid #BEFF25",
            btnText: "Participate",
            btnTextColor: "text-[#0F1419]",
            cardBg: "#0F1419",
            cardBorder: "border-white/5",
            borderGradient: null
        },
        "Coming soon": {
            badgeBg: "linear-gradient(90deg, #C7521F 0%, #68260B 100%)",
            badgeBorder: "1px solid rgba(199, 82, 31, 0.3)",
            btnBg: "#141A20",
            btnBorder: "1px solid rgba(122, 162, 178, 0.05)",
            btnText: "Participate",
            btnTextColor: "text-[#2D3843]",
            cardBg: "#0F1419",
            cardBorder: "border-white/5",
            borderGradient: null
        }
    }[status];

    return (
        <div
            className={`w-full rounded-[24px] border ${statusConfig.cardBorder} overflow-hidden shadow-2xl flex flex-col group transition-all duration-300 hover:scale-[1.01] relative ${className}`}
            style={{ background: statusConfig.cardBg }}
        >
            {/* Gradient Border for "Next round" */}
            {statusConfig.borderGradient && (
                <div
                    className="absolute inset-0 p-[1px] rounded-[24px] pointer-events-none z-10"
                    style={{
                        background: statusConfig.borderGradient,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                    }}
                />
            )}
            {/* Header info */}
            <div className={`flex items-center ${status === "Coming soon" ? "justify-start" : "justify-between"} px-6 py-5`}>
                <Badge
                    className={`${(status === 'Active' || status === 'Expired') ? 'text-black' : 'text-white'} hover:opacity-90 font-bold font-['Outfit'] px-3 py-1.5 rounded-[8px] border-none text-[14px] transition-colors`}
                    style={{ background: status === 'Expired' ? '#7AA2B2' : statusConfig.badgeBg, border: statusConfig.badgeBorder }}
                >
                    {status}
                </Badge>
                {status !== "Coming soon" && (
                    <div className="flex items-center gap-2">
                        <span className="text-[#525D68] font-bold font-['Montserrat'] text-[16px] md:text-[18px]">Block</span>
                        <span className="text-white font-black font-['Montserrat'] text-[20px] md:text-[24px]">#{blockNumber}</span>
                    </div>
                )}
            </div>

            {/* Inner Boxes Container */}
            <div className="flex flex-col sm:flex-row gap-3 px-6 pb-6 min-h-[140px] justify-center">
                {status === "Coming soon" ? (
                    <div className="flex flex-col items-center justify-center py-4">
                        <span className="text-[#525D68] font-bold font-['Montserrat'] text-[16px] mb-1">Block</span>
                        <h2 className="text-white font-black font-['Montserrat'] text-[40px] leading-none mb-2 tracking-tight">#{blockNumber}</h2>
                        <p className="text-[#7AA2B2] font-medium font-['Outfit'] text-[16px]">Starts in {timer}</p>
                    </div>
                ) : (
                    <>
                        {/* Left Box - Jackpot */}
                        <div
                            className="flex-1 h-[140px] rounded-[20px] relative overflow-hidden flex flex-col justify-center pl-6 pr-2"
                            style={{ background: 'linear-gradient(180deg, #4A1A9E 0%, #9017CF 100%)' }}
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.1)_0%,_transparent_60%)] pointer-events-none" />
                            <span className="text-white text-[15px] font-bold font-['Montserrat'] mb-1 opacity-70">Jackpot :</span>
                            <span className="text-white text-[32px] font-black font-['Montserrat'] leading-none tracking-tight">{jackpotValue}</span>
                            <img
                                src="/figmaAssets/gift1.png"
                                className="absolute right-[-10%] bottom-[-5%] w-[110px] h-[110px] object-contain pointer-events-none transition-transform group-hover:scale-110 duration-500"
                                alt="Jackpot Bag"
                            />
                        </div>

                        {/* Right Box - Prize Pool */}
                        <div
                            className="flex-1 h-[140px] rounded-[20px] relative overflow-hidden flex flex-col justify-center pl-6 pr-2"
                            style={{ background: 'linear-gradient(135deg, #7E9B0F 0%, #BDFF25 100%)' }}
                        >
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,_rgba(255,255,255,0.2)_0%,_transparent_60%)] pointer-events-none" />
                            <span className="text-white text-[15px] font-bold font-['Montserrat'] mb-1 opacity-70">Prize Pool :</span>
                            <span className="text-white text-[32px] font-black font-['Montserrat'] leading-none tracking-tight">{prizePoolValue}</span>
                            <img
                                src="/figmaAssets/gift.png"
                                className="absolute right-[-10%] bottom-[-5%] w-[110px] h-[110px] object-contain pointer-events-none transition-transform group-hover:scale-110 duration-500"
                                alt="Prize Gift"
                            />
                        </div>
                    </>
                )}
            </div>

            {/* Footer / Status Bottom */}
            <div className="px-6 pb-6">
                <button
                    className={`w-full h-[56px] rounded-[16px] flex items-center justify-center transition-all active:scale-95 font-bold font-['Montserrat'] text-[18px] ${statusConfig.btnTextColor}`}
                    style={{ background: statusConfig.btnBg, border: statusConfig.btnBorder }}
                >
                    {statusConfig.btnText}
                </button>
            </div>
        </div>
    );
};
