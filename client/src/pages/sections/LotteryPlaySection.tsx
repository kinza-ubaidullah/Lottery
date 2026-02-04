import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useLocation } from "wouter";

const timerDigits = [
  { value: "09" },
  { value: "23" },
];

export const LotteryPlaySection = (): JSX.Element => {
  const [, setLocation] = useLocation();
  return (
    <Card
      className="relative w-full rounded-[24px] md:rounded-[40px] overflow-hidden border-none shadow-2xl min-h-[400px] md:min-h-[520px] flex items-center z-10"
      style={{
        background: '#0D1115'
      }}
    >
      {/* Background Atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 90% 40%, rgba(227, 104, 38, 0.4) 0%, transparent 60%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
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

      <CardContent className="relative w-full h-full p-6 md:p-12 flex flex-col justify-center z-20 overflow-hidden">
        {/* Assets & Decorations */}
        <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
          {/* Fox mascot */}
          <img
            src="/figmaAssets/image-189.png"
            className="absolute right-[-10%] md:right-[-2%] bottom-[-5%] md:bottom-[-25%] h-[75%] md:h-[95%] lg:h-[105%] w-auto object-contain z-10 opacity-30 md:opacity-100"
            alt="Fox Character"
          />

          {/* Floating Ticket Badge - Reduced Boldness on mobile */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-12 lg:right-12 z-40 pointer-events-auto">
            <div className="flex items-center gap-1 md:gap-4 bg-[#3E2712]/95 backdrop-blur-xl rounded-lg md:rounded-[20px] px-3 md:px-8 py-2 md:py-4 border border-white/10 shadow-2xl scale-[0.75] md:scale-90 lg:scale-100 origin-top-right">
              <img src="/figmaAssets/image-194-1.png" className="w-5 h-3 md:w-12 md:h-8 object-contain" alt="Ticket icon" />
              <span className="text-white font-bold md:font-black text-xs md:text-2xl tracking-tighter font-['Outfit']">Tickets</span>
              <div className="bg-[#1F1813]/90 px-1.5 md:px-4 py-0.5 md:py-1 rounded md:rounded-lg border border-white/10 shadow-inner">
                <span className="text-[#FF8142] font-bold md:font-black text-xs md:text-2xl font-['Montserrat']">5$</span>
              </div>
              <span className="text-white font-semibold md:font-black text-[10px] md:text-xl font-['Outfit'] opacity-60">only</span>
            </div>
          </div>

          <img src="/figmaAssets/image-193-1.png" className="absolute top-[10%] right-[10%] w-8 md:w-20 opacity-20" alt="Coin 1" />
          <img src="/figmaAssets/image-193-1.png" className="absolute bottom-[25%] right-[40%] md:right-[32%] w-10 md:w-28 z-20 opacity-30 md:opacity-50" alt="Coin 2" />
          <img src="/figmaAssets/image-194-1.png" className="absolute bottom-[10%] right-[50%] md:right-[45%] w-12 md:w-32 opacity-20 transform -rotate-12" alt="Ticket L" />
        </div>

        {/* Content Block */}
        <div className="flex flex-col gap-6 md:gap-12 relative z-30 w-full md:w-[60%] h-full justify-center pt-12 md:pt-16 lg:pt-0">
          <div className="flex flex-col gap-4 md:gap-8 text-left">
            <div className="flex items-center">
              {/* Bitcoin Badge - Sized for mobile fit */}
              <div className="flex items-center gap-2 md:gap-4 bg-[#FF4F12] px-4 md:px-10 py-1.5 md:py-4 rounded-xl md:rounded-[24px] shadow-lg border border-white/10 uppercase"
                style={{ background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)' }}>
                <img src="/figmaAssets/bitcoin-3-1.png" className="w-4 h-4 md:w-12 md:h-12 object-contain" alt="BTC" />
                <span className="font-['Montserrat'] font-bold md:font-black text-white text-[10px] md:text-2xl lg:text-4xl tracking-widest leading-none">BITCOIN</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 md:gap-4">
              <h2 className="font-['Montserrat'] font-bold md:font-extrabold lg:font-[900] text-[32px] md:text-[48px] lg:text-[72px] leading-[0.9] md:leading-normal tracking-tighter md:tracking-tight uppercase">
                <span className="text-[#FFC7B1]">LOT</span>
                <span className="text-white">TERY</span>
              </h2>
              <p className="text-[#a1b4c6] text-base md:text-2xl lg:text-3xl font-semibold md:font-bold tracking-tight font-['Outfit'] opacity-70 leading-snug">
                Guess 6 Numbers. Match & Win
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:gap-6">
            <span className="text-sm md:text-2xl font-medium text-[#a1b4c6] font-['Outfit'] tracking-wide opacity-80">Next draw in</span>
            <div className="flex gap-2.5 md:gap-4">
              {timerDigits.map((digit, i) => (
                <div key={i} className="w-14 h-12 md:w-28 md:h-24 bg-[#0D1115] rounded-xl md:rounded-[28px] border border-white/10 shadow-lg flex items-center justify-center">
                  <span className="text-white text-2xl md:text-6xl font-bold md:font-black font-sans leading-none">{digit.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-8 pt-4 md:pt-8">
            <Button
              onClick={() => setLocation("/play-lottery")}
              className="w-[140px] h-[48px] md:w-[240px] md:h-[72px] rounded-lg md:rounded-2xl text-white font-['Outfit'] font-bold md:font-black text-xs md:text-2xl lg:text-3xl shadow-lg border border-[#FF8962] transition-all active:scale-95 tracking-tighter"
              style={{
                background: 'linear-gradient(180deg, #FF6F3F 0%, #FF4B0F 100%)'
              }}
            >
              Play Now
            </Button>
            <Button
              onClick={() => setLocation("/lottery-results")}
              className="w-[160px] h-[48px] md:w-[280px] md:h-[72px] rounded-lg md:rounded-2xl text-[#FFF0C3] font-['Outfit'] font-bold md:font-black text-xs md:text-2xl lg:text-3xl shadow-lg border border-[#3F2412] transition-all active:scale-95 tracking-tighter"
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
