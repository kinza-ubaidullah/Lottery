import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LatestBitcoinBlockSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-8 md:gap-16 relative py-8">
      {/* Simulation Banner */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 p-5 md:p-7 rounded-[32px] md:rounded-[40px] bg-[#12171D] border border-white/5 relative overflow-visible">

        {/* Left Section: Icon & Text */}
        <div className="flex items-center gap-3 md:gap-4 relative z-10">
          <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 relative">
            <img
              className="w-full h-full object-contain relative z-10"
              alt="Help Icon"
              src="/figmaAssets/image-180.png"
            />
          </div>

          <div className="flex flex-col">
            <h2 className="text-base md:text-[20px] font-black text-white leading-tight font-['Montserrat'] uppercase tracking-tight whitespace-nowrap">
              See how the game works
            </h2>
            <div className="text-[9px] md:text-[11px] text-[#a1b4c6] font-bold leading-relaxed opacity-60 font-['Outfit'] mt-0.5 uppercase tracking-wider hidden sm:block">
              <p>No wallet. No risk. Just a demo.</p>
            </div>
          </div>
        </div>

        {/* Center Section: Interaction area (Slots) */}
        <div className="flex items-center gap-1.5 md:gap-2 relative z-10 shrink-0">
          {/* Box 1: Dark grey badge like mobile */}
          <div className="w-9 h-12 md:w-[48px] md:h-[62px] flex items-center justify-center rounded-lg md:rounded-xl bg-[#2D3741] shadow-[0_3px_0_#1A2128] border-none">
            <span className="text-lg md:text-[22px] font-black text-white font-['Montserrat']">0</span>
          </div>
          {/* Box 2: Orange Gradient badge like mobile */}
          <div className="w-9 h-12 md:w-[48px] md:h-[62px] flex items-center justify-center rounded-lg md:rounded-xl bg-[linear-gradient(180deg,#FF8C53_0%,#E36826_100%)] shadow-[0_3px_0_#A83200] border-none">
            <span className="text-lg md:text-[22px] font-black text-white font-['Montserrat']">0</span>
          </div>
          {/* Muted Icon Boxes */}
          {[1, 2].map((i) => (
            <div key={i} className="w-9 h-12 md:w-[48px] md:h-[62px] flex items-center justify-center rounded-lg md:rounded-xl bg-[#1A2128] border border-white/5 opacity-80">
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#2D3741]/50 flex items-center justify-center">
                <img src="/figmaAssets/frame-377.svg" className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 opacity-30" alt="Shield" />
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Button */}
        <div className="shrink-0 relative z-10">
          <Button
            className="px-5 md:px-8 h-10 md:h-14 rounded-lg md:rounded-xl text-white font-black text-[10px] md:text-base transition-all active:scale-95 font-['Montserrat'] uppercase tracking-tight"
            style={{
              background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)'
            }}
          >
            Randomize as demo
          </Button>
        </div>

        {/* Atmospheric flair */}
        <div className="absolute -right-40 -top-40 w-[600px] h-[600px] bg-[#FF6B26]/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      {/* Prize Table Section */}
      <div className="flex flex-col gap-6 md:gap-10">
        <h3 className="text-[#a1b4c6] font-semibold md:font-bold text-xs md:text-2xl uppercase tracking-widest px-2 text-center md:text-left opacity-60 font-['Outfit']">
          Prizes if your digit match
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-6 md:gap-10">
          {[
            {
              digitMatch: "2",
              digitClassName: "bg-[#323B44]",
              digitTextClassName: "text-white",
              prize: "Free ticket",
              prizeImage: "/figmaAssets/image-188-1.png",
              cardBg: "bg-[#1F262E]",
            },
            {
              digitMatch: "3",
              digitClassName: "bg-[linear-gradient(180deg,#3F2412_0%,#E36826_100%)]",
              digitTextClassName: "text-[#eee6d3]",
              prize: "$300",
              prizeImage: "/figmaAssets/image-188-5.png",
              cardBg: "linear-gradient(180deg, #13191F 0%, #1F262E 100%)",
              glow: "radial-gradient(circle at top right, rgba(227, 104, 38, 0.15) 0%, transparent 60%)"
            },
            {
              digitMatch: "4",
              digitClassName: "bg-[#FF6B26]",
              digitTextClassName: "text-white",
              prize: "$3 000",
              prizeImage: "/figmaAssets/image-188-5.png",
              cardBg: "linear-gradient(135deg, #1A0F0A 0%, #1F262E 100%)",
              glow: "radial-gradient(circle at top right, rgba(255, 107, 38, 0.2) 0%, transparent 60%)"
            },
            {
              digitMatch: "5",
              digitClassName: "bg-[#BDFF25]",
              digitTextClassName: "text-black",
              prize: "$50 000",
              prizeImage: "/figmaAssets/image-188-5.png",
              cardBg: "linear-gradient(135deg, #253602 0%, #1F262E 100%)",
              glow: "radial-gradient(circle at top right, rgba(189, 255, 37, 0.3) 0%, transparent 70%)"
            },
            {
              digitMatch: "6",
              digitClassName: "bg-[linear-gradient(180deg,#411C6D_0%,#9A16E1_100%)]",
              digitTextClassName: "text-white",
              prize: "Jackpot",
              prizeImage: "/figmaAssets/image-188-5.png",
              cardBg: "linear-gradient(180deg, #13191F 0%, #1F262E 100%)",
              glow: "radial-gradient(circle at top right, rgba(154, 118, 255, 0.2) 0%, transparent 60%)"
            },
          ].map((card, index) => (
            <Card
              key={index}
              className={`group relative flex flex-col items-center justify-center p-6 md:p-10 rounded-[32px] md:rounded-[40px] transition-all duration-300 overflow-hidden w-full 
                ${index === 4 ? "md:col-span-2" : "md:col-span-1"}
                min-h-[220px] md:min-h-[320px] hover:scale-[1.02] cursor-default lg:w-[calc(33.333%-1.67rem)] shadow-none`}
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
                <div className={`w-10 h-10 md:w-20 md:h-20 flex items-center justify-center rounded-lg md:rounded-[22px] font-bold md:font-black border border-white/5 ${card.digitClassName} ${card.digitTextClassName} text-sm md:text-3xl font-mono leading-none`}>
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
      </div>
    </section>
  );
};
