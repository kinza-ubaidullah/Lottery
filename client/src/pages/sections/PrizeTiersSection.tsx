import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const PrizeTiersSection: React.FC = () => {
    const prizes = [
        {
            digitMatch: "2",
            digitClassName: "bg-[#323B44] border-white/5",
            digitTextClassName: "text-white",
            prize: "Free ticket",
            prizeImage: "/figmaAssets/image-188-1.png",
            cardBg: "linear-gradient(135deg, #0A0D11 0%, #13191F 100%)",
        },
        {
            digitMatch: "3",
            digitClassName: "bg-[linear-gradient(180deg,#3F2412_0%,#E36826_100%)] border-white/10",
            digitTextClassName: "text-[#eee6d3]",
            prize: "$300",
            prizeImage: "/figmaAssets/image-188-5.png",
            cardBg: "linear-gradient(180deg, #13191F 0%, #1F262E 100%)",
            glow: "radial-gradient(circle at top right, rgba(227, 104, 38, 0.15) 0%, transparent 60%)"
        },
        {
            digitMatch: "4",
            digitClassName: "bg-[#FF6B26] border-white/10",
            digitTextClassName: "text-white",
            prize: "$3 000",
            prizeImage: "/figmaAssets/image-188-5.png",
            cardBg: "linear-gradient(135deg, #1A0F0A 0%, #1F262E 100%)",
            glow: "radial-gradient(circle at top right, rgba(255, 107, 38, 0.2) 0%, transparent 60%)"
        },
        {
            digitMatch: "5",
            digitClassName: "bg-[#BDFF25] border-white/10",
            digitTextClassName: "text-black",
            prize: "$50 000",
            prizeImage: "/figmaAssets/image-188-5.png",
            cardBg: "linear-gradient(135deg, #253602 0%, #1F262E 100%)",
            glow: "radial-gradient(circle at top right, rgba(189, 255, 37, 0.3) 0%, transparent 70%)"
        },
        {
            digitMatch: "6",
            digitClassName: "bg-[linear-gradient(180deg,#411C6D_0%,#9A16E1_100%)] border-white/10",
            digitTextClassName: "text-white",
            prize: "Jackpot",
            prizeImage: "/figmaAssets/image-188-5.png",
            cardBg: "linear-gradient(180deg, #13191F 0%, #1F262E 100%)",
            glow: "radial-gradient(circle at top right, rgba(154, 118, 255, 0.2) 0%, transparent 60%)"
        },
    ];

    return (
        <section className="flex flex-col gap-6 md:gap-10 w-full mb-12">
            <h3 className="text-[#a1b4c6] font-semibold md:font-bold text-xs md:text-2xl uppercase tracking-widest px-2 text-center md:text-left opacity-60 font-['Outfit']">
                Prizes if your digit match
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-6 md:gap-10">
                {prizes.map((card, index) => (
                    <Card
                        key={index}
                        className={`group relative flex flex-col items-center justify-center p-6 md:p-10 rounded-[32px] md:rounded-[40px] transition-all duration-300 overflow-hidden w-full 
              ${index === 4 ? "md:col-span-2" : "md:col-span-1"}
              min-h-[220px] md:min-h-[320px] hover:scale-[1.02] cursor-default lg:w-[calc(33.333%-1.67rem)] shadow-none border border-[#252F38] bg-transparent`}
                        style={{
                            background: card.cardBg,
                        }}
                    >
                        {card.glow && (
                            <div
                                className="absolute inset-0 pointer-events-none opacity-40 md:opacity-60"
                                style={{ background: card.glow }}
                            />
                        )}

                        <CardContent className="p-0 flex flex-col items-center gap-4 w-full relative z-10">
                            <div className={`w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-lg md:rounded-[22px] font-bold md:font-black border ${card.digitClassName} ${card.digitTextClassName} text-sm md:text-3xl font-mono leading-none shadow-none`}>
                                {card.digitMatch}
                            </div>

                            <h4 className="text-white text-base md:text-[32px] font-bold md:font-[900] font-['Montserrat'] tracking-tight leading-none opacity-90">Digit match</h4>

                            <div className="flex items-center gap-3 md:gap-5 mt-2 md:mt-4 w-full justify-center">
                                <div className="w-10 h-10 md:w-16 md:h-16 flex items-center justify-center shrink-0">
                                    <img src={card.prizeImage} className="w-full h-full object-contain drop-shadow-xl" alt="Prize" />
                                </div>
                                <div className="flex flex-col items-start justify-center leading-none gap-0.5 md:gap-1">
                                    <span className="text-[10px] md:text-sm text-[#525D68] font-semibold md:font-bold uppercase tracking-widest font-['Outfit'] opacity-50">Prize</span>
                                    <span className="text-base md:text-[32px] font-bold md:font-[900] text-white font-['Montserrat'] leading-tight whitespace-nowrap">{card.prize}</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};
