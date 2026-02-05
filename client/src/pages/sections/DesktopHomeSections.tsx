import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

export const DesktopBannerSection = () => {
    const [, setLocation] = useLocation();

    return (
        <div className="flex flex-col gap-6 mb-12">
            <div className="grid grid-cols-12 gap-6">
                {/* 1. LEFT MAIN BANNER (Bitcoin Lottery) */}
                <div className="col-span-8 relative bg-[#0D1115] rounded-[2.5rem] overflow-hidden border border-white/5 group min-h-[500px] flex shadow-2xl">
                    {/* Atmospheric Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(227,104,38,0.15)_0%,transparent_70%)] pointer-events-none" />
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #8a96a3 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                    {/* Fox Asset - Suited Fox from Screenshot */}
                    <div className="absolute right-0 bottom-0 h-full w-[55%] pointer-events-none z-10 flex items-end justify-end">
                        <img
                            src="/figmaAssets/image-189.png"
                            className="h-[95%] w-auto object-contain object-right-bottom transition-transform duration-700 group-hover:scale-[1.02]"
                            alt="Fox Mascot"
                        />
                    </div>

                    {/* Content Area */}
                    <div className="relative z-20 p-12 flex flex-col justify-between w-[55%] h-full">
                        <div className="flex flex-col gap-6">
                            {/* Title Section */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-3 bg-[#E36826] w-fit px-4 py-1.5 rounded-xl shadow-lg shadow-orange-950/20">
                                    <img src="/figmaAssets/bitcoin-3-1.png" className="w-5 h-5 object-contain" alt="BTC" />
                                    <span className="font-['Montserrat'] font-black text-white text-[18px] tracking-wider uppercase leading-none">BITCOIN</span>
                                </div>
                                <h1 className="font-['Montserrat'] font-black text-[72px] leading-[0.8] text-white tracking-tighter uppercase">
                                    LOTTERY
                                </h1>
                                <p className="text-[#525D68] text-[18px] font-bold tracking-tight">
                                    Guess 6 Numbers. Match & Win
                                </p>
                            </div>

                            {/* Tickets Badge & Stats */}
                            <div className="flex items-center gap-4 mt-2">
                                <div className="flex items-center gap-3 bg-[#1A1E24]/80 backdrop-blur-md border border-white/5 w-fit px-4 py-2.5 rounded-2xl relative z-10">
                                    <img src="/figmaAssets/image-194-1.png" className="w-7 h-7 object-contain" alt="Ticket" />
                                    <span className="text-[#525D68] text-base font-bold">Tickets</span>
                                    <div className="bg-[#E36826] px-2.5 py-0.5 rounded-lg text-white font-black text-base">5$</div>
                                    <span className="text-[#525D68] text-base font-bold">only</span>
                                </div>
                            </div>

                            {/* Verifiable & Timer Row */}
                            <div className="flex items-center gap-6 mt-2">
                                <div className="flex flex-col gap-1.5 bg-[#50B200] p-4 rounded-2xl w-[160px] relative overflow-hidden group/green shadow-lg shadow-green-950/10">
                                    <img src="/figmaAssets/image-180.png" className="absolute -bottom-1 -right-1 w-12 h-12 opacity-20" alt="Verify" />
                                    <span className="text-white font-black text-sm uppercase leading-tight z-10">Fully verifiable</span>
                                    <span className="text-white/80 text-[10px] font-bold z-10">on Blockchain.com</span>
                                    <div className="mt-1 z-10">
                                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md">
                                            <img src="/figmaAssets/image-180.png" className="w-5 h-5 object-contain" alt="Check" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-[#525D68] text-[11px] font-black uppercase tracking-widest">Next draw in</span>
                                    <div className="flex gap-2">
                                        <div className="bg-[#11161B] w-12 h-14 rounded-xl border border-white/5 flex items-center justify-center text-white font-black text-2xl shadow-inner">09</div>
                                        <div className="bg-[#11161B] w-12 h-14 rounded-xl border border-white/5 flex items-center justify-center text-white font-black text-2xl shadow-inner">23</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Banner Buttons */}
                        <div className="flex items-center gap-3 mt-8 relative z-20">
                            <button
                                onClick={() => setLocation("/play-lottery")}
                                className="px-10 h-[56px] bg-[#E36826] hover:bg-[#FF6B26] text-white font-black text-lg rounded-2xl shadow-lg shadow-orange-950/30 transition-all active:scale-95 flex items-center justify-center font-['Montserrat'] uppercase"
                            >
                                Play now
                            </button>
                            <button
                                onClick={() => setLocation("/lottery-results")}
                                className="px-10 h-[56px] border border-white/5 bg-[#1F262E]/80 hover:bg-[#2a343e] text-white font-black text-lg rounded-2xl transition-all active:scale-95 flex items-center justify-center font-['Montserrat'] uppercase"
                            >
                                Verify results
                            </button>
                        </div>

                        {/* Bottom Glow Effect */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(circle_at_50%_120%,rgba(143,216,17,0.15)_0%,transparent_70%)] pointer-events-none" />
                    </div>
                </div>

                {/* 2. RIGHT COLUMN (Lucky Hour & Latest Block) */}
                <div className="col-span-4 flex flex-col gap-6">
                    {/* Top: Lucky Hour */}
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 group flex flex-col min-h-[240px] shadow-2xl" style={{ backgroundColor: '#3E5F00' }}>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_top,rgba(189,255,37,0.1)_0%,transparent_60%)] pointer-events-none" />

                        <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-white font-black text-[36px] leading-[0.9] uppercase tracking-tighter font-['Montserrat']">
                                    Lucky Hour<br />
                                    <span className="text-white">is now live</span>
                                </h3>
                                <p className="text-white/80 text-[13px] font-bold mt-2 font-['Outfit']">
                                    higher prizes for the<br />next 60 minutes.
                                </p>
                            </div>

                            <img src="/figmaAssets/gift.png" className="absolute top-4 left-[60%] w-12 h-12 object-contain opacity-40 animate-bounce" alt="gift" />
                            <img src="/figmaAssets/img7.png" className="absolute bottom-[-80px] right-[-80px] h-[100%] w-auto object-contain z-10" alt="Lucky Hour Character" />

                            <Button
                                className="w-fit h-[48px] px-8 text-[#0d1511] font-black text-sm rounded-xl transition-all active:scale-95 font-['Montserrat'] uppercase z-20 shadow-[0_4px_20px_rgba(143,216,17,0.3)] border border-[#BEFF25]"
                                style={{ background: 'linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)' }}
                            >
                                Play now
                            </Button>
                        </div>
                    </div>

                    {/* Bottom: Latest Bitcoin Block */}
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl p-8 flex flex-col justify-between min-h-[234px]" style={{ background: 'linear-gradient(180deg, #13191F 0%, #1F262E 100%)' }}>
                        {/* Atmospheric Green Glow at bottom */}
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(circle_at_50%_120%,rgba(189,255,37,0.15)_0%,transparent_70%)] pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-2">
                            <h3 className="text-white font-black text-[32px] uppercase tracking-tighter italic font-['Montserrat'] leading-none">4390J3</h3>
                            <p className="text-[#525D68] text-[10px] font-black uppercase tracking-[0.2em] font-['Montserrat']">Latest Bitcoin Block #</p>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex gap-2">
                                {[5, 3, 0, 9].map((num, i) => (
                                    <div key={i} className="w-12 h-14 bg-[linear-gradient(180deg,#FF8C53_0%,#E36826_100%)] rounded-2xl flex items-center justify-center shadow-[0_6px_0_#A83200] border-none group-hover:scale-105 transition-transform duration-300">
                                        <span className="text-[#12171d] font-black text-2xl font-['Montserrat']">{num}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <img src="/figmaAssets/image-193-1.png" className="absolute top-4 right-4 w-12 h-12 object-contain opacity-20" alt="coin" />
                        <img src="/figmaAssets/image-193-1.png" className="absolute bottom-10 right-10 w-8 h-8 object-contain opacity-10" alt="coin" />

                        <Button
                            className="w-full h-[52px] mt-8 text-[#0d1511] font-black text-base rounded-xl transition-all active:scale-95 border border-[#BEFF25] font-['Montserrat'] uppercase shadow-[0_4px_20px_rgba(143,216,17,0.3)]"
                            style={{ background: 'linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)' }}
                        >
                            Verify
                        </Button>
                    </div>
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
