import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";

export const VerifyResultsPage = (): JSX.Element => {
    const isMobile = useIsMobile();

    const lotteryResult = {
        block: "494302-44",
        hash: "00000000000000000000DD286256255DCB798A7FE3F22C381791C26DD4",
        hashHighlight: "5C4E2E",
        winningNumbers: ["J", "4", "b", "6", "J", "0"]
    };

    return (
        <div className="w-full flex flex-col items-center">
            <main className={cn(
                "w-full flex-1 flex flex-col gap-6 pb-20",
                isMobile ? "py-8" : ""
            )}>
                {/* Back Button */}
                <div className="w-full flex justify-start mt-4">
                    <BackButton label="Back to Play" href="/play-lottery" />
                </div>

                {/* Banner Section - Refined to match User Screenshot */}
                <div className="relative w-full rounded-[24px] overflow-hidden mt-2 shadow-2xl border border-white/5 h-[240px] md:h-[300px]">
                    {/* Background */}
                    <div
                        className="absolute inset-0 z-0 transition-colors duration-500"
                        style={{
                            background: "linear-gradient(90deg, #131A21 0%, #152B1E 40%, #1A1F26 100%)"
                        }}
                    >
                        {/* Diamond/Checkered Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.1]"
                            style={{
                                backgroundImage: `radial-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), radial-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)`,
                                backgroundSize: '60px 60px',
                                backgroundPosition: '0 0, 30px 30px'
                            }}
                        />
                        {/* Secondary Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.05]"
                            style={{
                                backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%), linear-gradient(-45deg, #000 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #000 75%), linear-gradient(-45deg, transparent 75%, #000 75%)`,
                                backgroundSize: '40px 40px',
                                backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
                            }}
                        />
                    </div>

                    <div className="relative z-10 flex items-center justify-between h-full">
                        {/* Text */}
                        <div className="flex flex-col gap-2 md:gap-5 pl-6 sm:pl-8 md:pl-20 max-w-[55%] md:max-w-[50%]">
                            <h1 className="text-white text-[32px] sm:text-[40px] md:text-[64px] font-[900] font-['Montserrat'] leading-[0.9] uppercase tracking-tighter drop-shadow-2xl">
                                Verify <br />
                                Results
                            </h1>
                            <p className="text-white/60 text-[12px] sm:text-[14px] md:text-[18px] font-medium font-['Montserrat'] leading-snug">
                                Check results on the website and compare them to blockchain
                            </p>
                        </div>

                        {/* Character Section */}
                        <div className="relative h-full w-[45%] md:w-[40%] flex items-center justify-center mr-2 md:mr-10">

                            {/* img30.png Character */}
                            <img
                                src="/figmaAssets/img30.png"
                                className="relative z-10 h-[85%] sm:h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                                alt="Fox King"
                            />

                            {/* Floating Icons */}
                            <img src="/figmaAssets/ball2.png" className="absolute top-[28%] md:top-[25%] -left-[10%] md:-left-[15%] w-8 md:w-16 z-20 drop-shadow-lg" />
                            <img src="/figmaAssets/image-193-1.png" className="absolute top-[40%] -right-2 md:-right-4 w-8 md:w-14 z-20 rotate-12" />

                            {/* Success Badge */}
                            <div className="absolute bottom-[22%] md:bottom-[20%] -right-1 md:-right-6 bg-[#BDFF25] p-1.5 md:p-2.5 rounded-[8px] md:rounded-[16px] shadow-[0_10px_30px_rgba(189,255,37,0.5)] rotate-12 z-20">
                                <CheckCircle2 className="w-4 h-4 md:w-7 md:h-7 text-black stroke-[3]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search & Results Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 w-full mt-4">

                    {/* Left Sidebar: Filters */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase">Search for the draw</label>
                            <div className="bg-[#141A20] border border-white/5 rounded-[12px] px-4 py-3 flex items-center gap-3">
                                <input
                                    type="text"
                                    placeholder="Enter ID"
                                    className="bg-transparent border-none outline-none text-white font-medium font-['Montserrat'] text-[14px] w-full"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase">Select from the draws</label>
                            <div className="bg-[#141A20] border border-white/5 rounded-[12px] px-4 py-3 flex items-center justify-between cursor-pointer group hover:border-white/10 transition-colors">
                                <span className="text-white font-bold font-['Montserrat'] text-[14px]">Draw</span>
                                <ChevronDown className="w-4 h-4 text-[#525D68] group-hover:text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Right Results Area */}
                    <div className="flex flex-col gap-6 w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                            {/* Card 1: First BTC Lottery Result */}
                            <div className="bg-[#13191F] border border-[#BDFF25]/10 rounded-[20px] p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#BDFF25]/5 to-transparent pointer-events-none" />
                                <h3 className="text-white font-black font-['Montserrat'] text-[18px] uppercase relative z-10">First BTC Lottery Result</h3>

                                <div className="flex flex-col gap-5 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#BDFF25]/10 border border-[#BDFF25]/20 flex items-center justify-center shrink-0">
                                            <div className="w-4 h-4 rounded-sm bg-[#FF6B26]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-[#525D68] text-[11px] font-bold uppercase">Block #</span>
                                            <span className="text-white font-black font-['Montserrat'] text-[18px]">{lotteryResult.block}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#00D95F]/10 border border-[#00D95F]/20 flex items-center justify-center shrink-0">
                                            <div className="w-4 h-4 rounded-full bg-[#00D95F]/50 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-[#00D95F]" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-[#525D68] text-[11px] font-bold uppercase">Full block hash</span>
                                            <p className="text-white font-medium font-['Montserrat'] text-[13px] break-all leading-tight">
                                                {lotteryResult.hash}
                                                <span className="text-black bg-[#FF8018] px-1 rounded-[2px] ml-1 font-black">{lotteryResult.hashHighlight}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <span className="text-[#525D68] text-[11px] font-bold uppercase ml-1">Winning 6-digit number</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-xl bg-[#BDFF25]/10 border border-[#BDFF25]/20 flex items-center justify-center shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B26] shadow-[0_0_10px_#FF6B26]" />
                                            </div>
                                            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                                                {lotteryResult.winningNumbers.map((num, i) => (
                                                    <div key={i} className="w-9 h-10 rounded-[6px] bg-[#1F262E] flex items-center justify-center text-[#BDFF25] font-black font-['Montserrat'] border border-white/5">
                                                        {num}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Blockchain Result */}
                            <div className="bg-[#3D2514] border border-[#FF6B26]/10 rounded-[20px] p-6 flex flex-col gap-6 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B26]/5 to-transparent pointer-events-none" />
                                <h3 className="text-white font-black font-['Montserrat'] text-[18px] uppercase relative z-10">Blockchain result</h3>

                                <div className="flex flex-col gap-5 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF6B26]/10 border border-[#FF6B26]/20 flex items-center justify-center shrink-0">
                                            <div className="w-4 h-4 rounded-sm bg-[#FF6B26]" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-white/40 text-[11px] font-bold uppercase">Block #</span>
                                            <span className="text-white font-black font-['Montserrat'] text-[18px]">{lotteryResult.block}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <div className="w-4 h-4 rounded-full border border-white/50 flex items-center justify-center overflow-hidden">
                                                <div className="w-full h-1/2 bg-white/20" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col min-w-0">
                                            <span className="text-white/40 text-[11px] font-bold uppercase">Full block hash</span>
                                            <p className="text-white font-medium font-['Montserrat'] text-[13px] break-all leading-tight">
                                                {lotteryResult.hash}
                                                <span className="bg-[#FF8018]/40 text-[#FF8018] px-1 rounded-[2px] ml-1 font-black">{lotteryResult.hashHighlight}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <span className="text-white/40 text-[11px] font-bold uppercase ml-1">Winning 6-digit number</span>
                                        <div className="flex items-center gap-2">
                                            <div className="w-10 h-10 rounded-xl bg-[#FF6B26]/10 border border-[#FF6B26]/20 flex items-center justify-center shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B26] shadow-[0_0_10px_#FF6B26]" />
                                            </div>
                                            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                                                {lotteryResult.winningNumbers.map((num, i) => (
                                                    <div key={i} className="w-9 h-10 rounded-[6px] bg-[#24211D] flex items-center justify-center text-white font-black font-['Montserrat'] border border-white/5">
                                                        {num}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Verification Success Bar */}
                        <div className="w-full h-[54px] rounded-[12px] bg-[#1A2616] border border-[#BDFF25]/20 flex items-center justify-center gap-3 mt-4">
                            <div className="w-6 h-6 rounded-full bg-[#BDFF25] flex items-center justify-center">
                                <CheckCircle2 className="w-4 h-4 text-black" />
                            </div>
                            <span className="text-white font-black font-['Montserrat'] text-[14px] md:text-[16px] uppercase tracking-wide">
                                Last 6 digit match - block verified
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};
