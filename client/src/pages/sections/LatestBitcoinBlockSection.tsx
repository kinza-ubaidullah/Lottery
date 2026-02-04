import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const digitBoxes = [
  {
    type: "digit",
    value: "0",
    className: "bg-[#323B44] border-none shadow-[0_6px_0_#1C2228]",
    textClassName: "text-white",
  },
  {
    type: "digit",
    value: "0",
    className: "bg-[linear-gradient(180deg,#FF8C53_0%,#E36826_100%)] border-none shadow-[0_6px_0_#A83200]",
    textClassName: "text-white",
  },
  {
    type: "icon",
    className: "bg-[#181D23] border-none shadow-[0_6px_0_#0D1115]",
    icon: "/figmaAssets/frame-377.svg",
  },
  {
    type: "icon",
    className: "bg-[#181D23] border-none shadow-[0_6px_0_#0D1115]",
    icon: "/figmaAssets/frame-379.svg",
  },
  {
    type: "icon",
    className: "bg-[#181D23] border-none shadow-[0_6px_0_#0D1115]",
    icon: "/figmaAssets/frame-380.svg",
  },
  {
    type: "icon",
    className: "bg-[#181D23] border-none shadow-[0_6px_0_#0D1115]",
    icon: "/figmaAssets/frame-381.svg",
  },
];

const prizeCards = [
  {
    digitMatch: "2",
    digitClassName: "bg-[#323B44] shadow-[0_4px_0_#1C2228]",
    digitTextClassName: "text-white",
    prize: "Free ticket",
    prizeImage: "/figmaAssets/image-188-1.png",
    cardBg: "bg-[#1F262E]",
  },
  {
    digitMatch: "3",
    digitClassName: "bg-[linear-gradient(180deg,#3F2412_0%,#E36826_100%)] shadow-[0_4px_0_#201509]",
    digitTextClassName: "text-[#eee6d3]",
    prize: "$300",
    prizeImage: "/figmaAssets/image-188-5.png",
    cardBg: "linear-gradient(180deg, #13191F 0%, #1F262E 100%)",
    glow: "radial-gradient(circle at top right, rgba(227, 104, 38, 0.15) 0%, transparent 60%)"
  },
  {
    digitMatch: "4",
    digitClassName: "bg-[#FF6B26] shadow-[0_4px_0_#A83200]",
    digitTextClassName: "text-white",
    prize: "$3 000",
    prizeImage: "/figmaAssets/image-188-5.png",
    cardBg: "linear-gradient(135deg, #1A0F0A 0%, #1F262E 100%)",
    glow: "radial-gradient(circle at top right, rgba(255, 107, 38, 0.2) 0%, transparent 60%)"
  },
  {
    digitMatch: "5",
    digitClassName: "bg-[#BDFF25] shadow-[0_4px_0_#6D9500]",
    digitTextClassName: "text-black",
    prize: "$50 000",
    prizeImage: "/figmaAssets/image-188-5.png",
    cardBg: "linear-gradient(135deg, #253602 0%, #1F262E 100%)",
    glow: "radial-gradient(circle at top right, rgba(189, 255, 37, 0.3) 0%, transparent 70%)"
  },
  {
    digitMatch: "6",
    digitClassName: "bg-[linear-gradient(180deg,#411C6D_0%,#9A16E1_100%)] shadow-[0_4px_0_#1D0A35]",
    digitTextClassName: "text-white",
    prize: "Jackpot",
    prizeImage: "/figmaAssets/image-188-5.png",
    cardBg: "linear-gradient(180deg, #13191F 0%, #1F262E 100%)",
    glow: "radial-gradient(circle at top right, rgba(154, 118, 255, 0.2) 0%, transparent 60%)"
  },
];

export const LatestBitcoinBlockSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-8 md:gap-16 relative py-8 overflow-hidden">
      {/* Simulation Banner */}
      <div className="flex flex-col gap-6 md:gap-10 p-5 md:p-14 rounded-[40px] bg-[#12171D] border border-white/5 shadow-2xl relative overflow-hidden group">

        {/* Banner Content Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-6 md:gap-10">

          {/* Top Left: Icon & Text */}
          <div className="flex items-center gap-5 md:gap-10 w-full lg:w-auto">
            <div className="w-16 h-16 md:w-44 md:h-44 shrink-0 relative">
              <div className="absolute inset-0 bg-[#FF6B26]/10 blur-[30px] rounded-full scale-90" />
              <img
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                alt="Help Icon"
                src="/figmaAssets/image-180.png"
              />
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="text-xl md:text-6xl font-bold md:font-[900] text-white leading-[1.1] font-['Montserrat'] tracking-tight">See how the game works</h2>
              <div className="flex flex-col text-[10px] md:text-[28px] text-[#a1b4c6] font-medium leading-relaxed max-w-2xl opacity-70 font-['Outfit']">
                <p>No wallet. No risk. Just a demo.</p>
                <p>This draw uses real Bitcoin block logic</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Slots & Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 w-full pt-4">
          {/* Interaction area */}
          <div className="flex flex-wrap items-center gap-2 md:gap-3 justify-center md:justify-start">
            {digitBoxes.map((box, index) => (
              <div
                key={index}
                className={`w-9 h-9 md:w-20 md:h-20 flex items-center justify-center rounded-[10px] md:rounded-[22px] transition-all duration-300 ${box.className}`}
              >
                {box.type === "digit" ? (
                  <span className={`text-lg md:text-5xl font-bold md:font-black font-sans leading-none ${box.textClassName}`}>{box.value}</span>
                ) : (
                  <img
                    className="w-5 h-5 md:w-12 md:h-12 object-contain opacity-40 brightness-150"
                    alt="Shield Icon"
                    src={box.icon}
                  />
                )}
              </div>
            ))}
          </div>

          <Button
            className="w-full lg:w-auto px-8 md:px-16 h-12 md:h-24 rounded-xl md:rounded-[30px] text-white font-bold md:font-black text-lg md:text-5xl transition-all active:scale-95 border border-[#FF8962] shadow-xl font-['Outfit'] tracking-tighter"
            style={{
              background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)'
            }}
          >
            Randomize
          </Button>
        </div>

        {/* Subtle background flair */}
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-[#FF6B26]/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* Prize Table Section */}
      <div className="flex flex-col gap-6 md:gap-10">
        <h3 className="text-[#a1b4c6] font-semibold md:font-bold text-xs md:text-2xl uppercase tracking-widest px-2 text-center md:text-left opacity-60 font-['Outfit']">
          Prizes if your digit match
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-6 md:gap-10">
          {prizeCards.map((card, index) => (
            <Card
              key={index}
              className={`group relative flex flex-col items-center justify-center p-6 md:p-10 rounded-[32px] md:rounded-[40px] transition-all duration-300 shadow-2xl overflow-hidden w-full 
                ${index === 4 ? "md:col-span-2" : "md:col-span-1"}
                min-h-[220px] md:min-h-[320px] hover:scale-[1.02] cursor-default lg:w-[calc(33.333%-1.67rem)]`}
              style={{
                background: 'linear-gradient(135deg, #0A0D11 0%, #13191F 40%, #1F262E 100%)',
                border: '1px solid #252F38',
              }}
            >
              {card.glow && (
                <div
                  className="absolute inset-0 pointer-events-none opacity-40 md:opacity-60"
                  style={{ background: card.glow }}
                />
              )}

              <CardContent className="p-0 flex flex-col items-center gap-4 w-full relative z-10">
                <div className={`w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-lg md:rounded-[22px] font-bold md:font-black shadow-lg border border-white/5 ${card.digitClassName} ${card.digitTextClassName} text-sm md:text-3xl font-mono leading-none`}>
                  {card.digitMatch}
                </div>

                <h4 className="text-white text-base md:text-[32px] font-bold md:font-[900] font-['Montserrat'] tracking-tight leading-none opacity-90">Digit match</h4>

                <div className="flex items-center gap-3 md:gap-5 mt-2 md:mt-4 w-full justify-center">
                  {/* Fixed container for normalized alignment */}
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
      </div>
    </section>
  );
};
