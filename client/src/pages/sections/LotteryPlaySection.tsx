import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const timerDigits = [
  { value: "09" },
  { value: "23" },
];

export const LotteryPlaySection = (): JSX.Element => {
  return (
    <Card
      className="relative w-full rounded-[24px] md:rounded-[40px] overflow-hidden border-none shadow-2xl min-h-[340px] md:min-h-[520px] flex items-center"
      style={{
        background: '#0D1115'
      }}
    >
      {/* Background Atmosphere - Strong Orange Glow on the right */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 90% 40%, rgba(227, 104, 38, 0.4) 0%, transparent 60%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 100% 60%, rgba(255, 111, 63, 0.2) 0%, transparent 70%)'
        }}
      />

      {/* Styled Gradient Border */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div
          className="absolute inset-0 p-[1.5px] rounded-[24px] md:rounded-[40px]"
          style={{
            background: 'linear-gradient(245.7deg, #FF8142 0%, rgba(153, 77, 39, 0) 12.41%), linear-gradient(65.14deg, #FF8142 2.8%, rgba(153, 77, 39, 0) 14.46%)',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude'
          }}
        />
      </div>

      <CardContent className="relative w-full h-full p-6 md:p-12 flex flex-col justify-center z-20">
        {/* Assets & Decorations */}
        <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
          {/* Fox mascot - Large and expressive */}
          <img
            src="/figmaAssets/image-189.png"
            className="absolute right-[-15%] md:right-[-5%] bottom-[-40%] h-[90%] md:h-[110%] w-auto object-contain z-10"
            alt="Fox Character"
          />

          {/* Floating Ticket Badge - Top Position */}
          <div className="absolute top-[8%] right-[5%] md:right-[15%] z-30 pointer-events-auto">
            <div className="flex items-center gap-2 md:gap-4 bg-[#3E2712]/70 backdrop-blur-xl rounded-xl md:rounded-[20px] px-4 md:px-8 py-2 md:py-4 border border-white/10 shadow-2xl">
              <img src="/figmaAssets/image-194-1.png" className="w-6 h-4 md:w-12 md:h-8 object-contain" alt="Ticket icon" />
              <span className="text-white font-black text-xs md:text-2xl tracking-tighter">Tickets</span>
              <div className="bg-[#1F1813]/90 px-2 md:px-4 py-1 rounded-lg border border-white/10 shadow-inner">
                <span className="text-[#FF8142] font-black text-xs md:text-2xl">5$</span>
              </div>
              <span className="text-white font-black text-[10px] md:text-xl">only</span>
            </div>
          </div>

          {/* Decorative Coins/Tickets floating around */}
          <img src="/figmaAssets/image-193-1.png" className="absolute top-[5%] right-[2%] w-10 md:w-20 opacity-60" alt="Coin 1" />
          <img src="/figmaAssets/image-193-1.png" className="absolute bottom-[30%] right-[45%] w-12 md:w-24 z-20" alt="Coin 2" />
          <img src="/figmaAssets/image-194-1.png" className="absolute bottom-[15%] right-[55%] w-14 md:w-28 opacity-30 transform -rotate-12" alt="Ticket L" />
          <img src="/figmaAssets/image-194-1.png" className="absolute bottom-4 right-4 w-20 md:w-44 opacity-40 transform rotate-45" alt="Ticket R" />
        </div>

        <div className="flex flex-col gap-8 md:gap-12 relative z-30 w-full md:w-[60%] h-full justify-center">
          <div className="flex flex-col gap-4 md:gap-8 text-left">
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {/* Bitcoin Badge */}
              <div className="flex items-center gap-3 bg-[#FF4B0F] px-4 md:px-10 py-2 md:py-4 rounded-xl md:rounded-[24px] shadow-lg border border-white/10 uppercase"
                style={{ background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)' }}>
                <img src="/figmaAssets/bitcoin-3-1.png" className="w-6 h-6 md:w-12 md:h-12 object-contain" alt="BTC" />
                <span className="font-['Montserrat'] font-black text-white text-base md:text-4xl tracking-[0.1em]">BITCOIN</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 md:gap-4">
              <h2 className="font-['Montserrat'] font-[900] text-[18px] md:text-[48px] lg:text-[72px] leading-[22px] md:leading-normal tracking-tight uppercase">
                <span className="text-[#FFC7B1]">LOT</span>
                <span className="text-white">TERY</span>
              </h2>
              <p className="text-[#a1b4c6] text-base md:text-3xl font-bold tracking-tight">
                Guess 6 Numbers. Match & Win
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-base md:text-2xl font-bold text-[#a1b4c6]">Next draw in</span>
            <div className="flex gap-4">
              {timerDigits.map((digit, i) => (
                <div key={i} className="w-16 h-14 md:w-28 md:h-24 bg-[#0D1115] rounded-[20px] md:rounded-[28px] border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center">
                  <span className="text-white text-3xl md:text-6xl font-black font-sans">{digit.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8 pt-4 md:pt-8">
            <Button
              className="w-[140px] h-[44px] md:w-[240px] md:h-[72px] rounded-lg md:rounded-2xl text-white font-['Outfit'] font-black text-xs md:text-2xl lg:text-3xl shadow-lg border border-[#FF8962] transition-all active:scale-95 tracking-tight"
              style={{
                background: 'linear-gradient(180deg, #FF6F3F 0%, #FF4B0F 100%)'
              }}
            >
              Play Now
            </Button>
            <Button
              className="w-[160px] h-[44px] md:w-[280px] md:h-[72px] rounded-lg md:rounded-2xl text-[#FFF0C3] font-['Outfit'] font-black text-xs md:text-2xl lg:text-3xl shadow-lg border border-[#3F2412] transition-all active:scale-95 tracking-tight"
              style={{
                background: 'linear-gradient(180deg, #3F2412 0%, #E36826 100%)'
              }}
            >
              Verify Results
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
