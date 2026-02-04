import { Card, CardContent } from "@/components/ui/card";

const winningDigits = [
    { value: "5" },
    { value: "3" },
    { value: "8" },
    { value: "9" },
    { value: "K" },
    { value: "J" },
];

export const GameInstructionsSection = (): JSX.Element => {
    return (
        <Card
            className="relative w-full rounded-[24px] md:rounded-[40px] overflow-hidden border-none shadow-2xl"
            style={{
                background: 'linear-gradient(180deg, #13191F 0%, #171D24 100%)'
            }}
        >
            <CardContent className="p-4 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10 w-full overflow-hidden">
                <div className="flex flex-col gap-4 md:gap-6 w-full relative z-20">
                    {/* Top Row: Block Title & Number */}
                    <div className="flex items-center gap-3 md:gap-4 flex-wrap">
                        <span className="text-[12px] md:text-xl font-['Montserrat'] font-black text-[#a1b4c6] uppercase tracking-[3px] opacity-70">
                            LATEST BITCOIN BLOCK #
                        </span>
                        <span className="text-white text-base md:text-3xl font-black font-mono tracking-tight">
                            4390J3
                        </span>
                    </div>

                    {/* Bottom Row: Digits & Label */}
                    <div className="flex items-center gap-4 md:gap-8 flex-wrap">
                        <div className="flex items-center gap-2">
                            {winningDigits.map((digit, index) => (
                                <div
                                    key={index}
                                    className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl md:rounded-2xl shadow-lg border border-white/5"
                                    style={{
                                        background: 'linear-gradient(180deg, #1F1813 0%, #E36826 100%)'
                                    }}
                                >
                                    <span className="text-white text-sm md:text-2xl font-black">
                                        {digit.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <span className="text-[12px] md:text-2xl font-bold text-[#a1b4c6] tracking-tight">
                            Winning digits
                        </span>
                    </div>
                </div>

                {/* Decorative Assets - 3 coins + Gradient BEHIND them */}
                <div className="absolute right-0 top-0 h-full w-[250px] md:w-[450px] pointer-events-none z-10 overflow-hidden">
                    {/* Green Glow ONLY in the right corner, strictly focused */}
                    <div
                        className="absolute bottom-0 right-0 w-[100%] h-[100%] pointer-events-none z-0"
                        style={{
                            background: 'radial-gradient(circle at 100% 100%, #8FD811 0%, transparent 50%)',
                            opacity: 0.9
                        }}
                    />

                    {/* Top coin - partially cut off at the top edge */}
                    <img
                        src="/figmaAssets/image-193-1.png"
                        className="absolute top-[-20%] right-[35%] md:right-[40%] w-12 md:w-24 opacity-100 transform rotate-[-20deg] z-10 drop-shadow-2xl"
                        alt="Coin Top"
                    />
                    {/* Middle coin - tip of '>' on the right edge */}
                    <img
                        src="/figmaAssets/image-193-1.png"
                        className="absolute top-[35%] right-[2%] md:right-[5%] w-14 md:w-28 opacity-100 transform rotate-[10deg] z-10 drop-shadow-2xl"
                        alt="Coin Middle"
                    />
                    {/* Bottom coin - partially cut off at the bottom edge */}
                    <img
                        src="/figmaAssets/image-193-1.png"
                        className="absolute bottom-[-25%] right-[30%] md:right-[35%] w-18 md:w-36 opacity-100 transform rotate-[-15deg] z-10 drop-shadow-2xl"
                        alt="Coin Bottom"
                    />
                </div>
            </CardContent>

            {/* Styled Inner Edge Shimmer */}
            <div className="absolute inset-0 pointer-events-none z-30">
                <div
                    className="absolute inset-0 p-[1.5px] rounded-[24px] md:rounded-[40px]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 40%)',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                    }}
                />
            </div>
        </Card>
    );
};
