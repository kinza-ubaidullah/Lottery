import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

const timerDigits = [
  { value: "09" },
  { value: "23" },
];

const winningDigits = ["5", "3", "8", "9", "K", "J"];

export const LotteryPlaySection = (): JSX.Element => {
  const [, setLocation] = useLocation();

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 md:px-0">
      {/* LEFT MAIN HERO - lg:col-span-2 */}
      <Card
        className="relative lg:col-span-2 rounded-[32px] overflow-hidden border-none shadow-2xl min-h-[650px] md:min-h-[540px] h-auto p-6 md:p-12 flex flex-col justify-between"
        style={{
          background: 'linear-gradient(135deg, #0B0E11 0%, #3D1C0A 100%)'
        }}
      >
        {/* Background Atmosphere & Glow */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(227, 104, 38, 0.25) 0%, transparent 60%)'
        }} />

        {/* Content Container */}
        <div className="relative z-20 flex flex-col gap-6 items-start h-full">
          {/* Top Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-[#FF4B0F] px-5 py-2 rounded-xl shadow-lg border border-white/10 w-fit">
              <img src="/figmaAssets/bitcoin-3-1.png" className="w-5 h-5 object-contain" alt="BTC" />
              <span className="font-['Montserrat'] font-[900] text-white text-[14px] tracking-widest leading-none uppercase">BITCOIN</span>
            </div>

            <div className="space-y-2 relative z-30">
              <h2 className="font-['Montserrat'] font-[900] text-[48px] sm:text-[58px] md:text-[84px] text-white leading-[0.85] uppercase tracking-tighter">
                LOTTERY
              </h2>
              <p className="text-[#A1B4C6] text-lg md:text-xl font-medium font-['Outfit'] max-w-[280px] md:max-w-[340px] leading-tight opacity-80">
                Guess 6 Numbers. Match & Win
              </p>
            </div>
          </div>

          {/* Tickets Badge */}
          <div className="flex items-center gap-3 md:gap-4 bg-[#1F1813]/60 backdrop-blur-md rounded-[16px] px-4 md:px-5 py-2 md:py-2.5 border border-white/5 shadow-xl">
            <img src="/figmaAssets/image-194-1.png" className="w-5 h-3 md:w-6 md:h-4 object-contain" alt="Ticket" />
            <span className="text-white font-bold text-base md:text-lg font-['Outfit']">Tickets</span>
            <div className="bg-[#FF4B0F] px-2.5 md:px-3 py-1 rounded-[8px] shadow-lg">
              <span className="text-white font-black text-lg md:text-xl font-['Montserrat']">5$</span>
            </div>
            <span className="text-white/40 font-black text-xs md:text-md font-['Outfit']">only</span>
          </div>

          {/* Verifiable Badge - Repositioned slightly */}
          <div className="bg-[#58A700] rounded-[24px] p-5 md:p-6 flex flex-col gap-1 min-w-[180px] md:min-w-[200px] shadow-[0_10px_40px_rgba(88,167,0,0.3)] backdrop-blur-sm mt-2 md:mt-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-white font-black text-[14px] md:text-[16px] font-['Montserrat'] uppercase leading-none">Fully verifiable</span>
                <span className="text-white/70 font-medium text-[11px] md:text-[12px] font-['Outfit']">on Blockchain.com</span>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="#58A700 text-[12px] md:text-[14px] font-bold text-[#58A700]">✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1 min-h-[40px] md:min-h-0" />

          {/* Bottom Actions */}
          <div className="w-full flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-6 md:gap-8">
              {/* Timer */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] md:text-[11px] font-[900] text-white/40 font-['Montserrat'] uppercase tracking-widest">Next draw in</span>
                <div className="flex gap-2">
                  {timerDigits.map((digit, i) => (
                    <div key={i} className="w-[54px] md:w-[64px] h-[58px] md:h-[68px] bg-[#13171D] rounded-xl border border-white/10 flex items-center justify-center shadow-inner">
                      <span className="text-white text-[24px] md:text-[32px] font-black font-['Montserrat']">{digit.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Main Buttons */}
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto">
                <Button
                  onClick={() => setLocation("/play-lottery")}
                  className="h-[54px] md:h-[64px] px-8 md:px-12 w-full md:w-auto rounded-[16px] font-['Montserrat'] font-black text-lg md:text-xl shadow-[0_15px_30px_rgba(255,75,15,0.4)] border border-white/10 active:scale-95 transition-all uppercase"
                  style={{ background: 'linear-gradient(180deg, #FF6F3F 0%, #FF4B0F 100%)' }}
                >
                  Play now
                </Button>
                <Button
                  onClick={() => setLocation("/lottery-results")}
                  className="h-[54px] md:h-[64px] px-8 md:px-8 w-full md:w-auto rounded-[16px] font-['Montserrat'] font-bold text-lg md:text-xl border border-[#3F2412] text-[#FFF0C3] backdrop-blur-md active:scale-95 transition-all uppercase"
                  style={{ background: 'rgba(63, 36, 18, 0.4)' }}
                >
                  Verify results
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mascot & Floating Assets - Adjusted for mobile overlap */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <img
            src="/figmaAssets/image-189.png"
            className="absolute right-[-10%] sm:right-[-4%] bottom-0 h-[70%] sm:h-[85%] md:h-[96%] w-auto object-contain z-10 opacity-40 sm:opacity-100"
            alt="Fox Mascot"
          />
          <img src="/figmaAssets/image-193-1.png" className="absolute top-[18%] right-[28%] w-16 md:w-24 opacity-60 blur-[1px] rotate-12" alt="Coin" />
          <img src="/figmaAssets/image-193-1.png" className="absolute bottom-[22%] right-[36%] w-24 md:w-32 opacity-80" alt="Coin" />
          <img src="/figmaAssets/image-194-1.png" className="absolute top-[8%] right-[8%] w-24 md:w-32 opacity-30 rotate-[15deg] blur-[1px]" alt="Ticket" />
        </div>
      </Card>

      {/* RIGHT COLUMN - lg:col-span-1 */}
      <div className="lg:col-span-1 flex flex-col gap-6">
        {/* TOP: LUCKY HOUR */}
        <Card
          className="relative flex-1 rounded-[32px] overflow-hidden border-none shadow-2xl min-h-[260px] p-8 md:p-10 flex flex-col justify-between"
          style={{ background: 'linear-gradient(180deg, #58A700 0%, #BDFF25 100%)' }}
        >
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '20px 20px' }} />

          <div className="relative z-20 space-y-4 max-w-[60%]">
            <h2 className="text-white text-[34px] md:text-[42px] font-black font-['Montserrat'] leading-[0.9] uppercase tracking-tighter">
              Lucky Hour is now live
            </h2>
            <p className="text-white/80 text-lg font-medium font-['Outfit'] leading-tight">
              higher prizes for the next 60 minutes.
            </p>
            <Button className="h-[48px] px-8 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold hover:bg-white/30 transition-all shadow-xl">
              Play now
            </Button>
          </div>

          {/* Assets */}
          <div className="absolute top-[-10%] right-[-15%] h-full w-[65%] flex items-center justify-center">
            <div className="relative scale-110">
              <img src="/figmaAssets/gift.png" className="w-60 object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.4)]" alt="Gift" />
              <div className="absolute top-[-10px] right-[-10px] space-y-[-10px]">
                <img src="/figmaAssets/ball2.png" className="w-12 rotate-12 drop-shadow-lg" alt="ball" />
                <img src="/figmaAssets/ball7.png" className="w-16 rotate-[-15deg] translate-x-4 drop-shadow-xl" alt="ball" />
              </div>
            </div>
          </div>
        </Card>

        {/* BOTTOM: VERIFY BLOCK */}
        <Card
          className="relative flex-1 rounded-[32px] overflow-hidden border-none shadow-2xl min-h-[260px] p-8 md:p-10 flex flex-col justify-between"
          style={{ background: '#13191F' }}
        >
          <div className="relative z-20 space-y-4">
            <div className="space-y-1">
              <h3 className="text-white text-[38px] font-black font-['Montserrat'] tracking-tight leading-none">4390J3</h3>
              <span className="text-white/40 font-black text-[12px] font-['Montserrat'] uppercase tracking-[0.2em]">Latest Bitcoin block #</span>
            </div>

            <div className="flex gap-2.5 pt-2">
              {winningDigits.map((digit, i) => (
                <div key={i} className="w-11 h-11 bg-[#FF6B26] rounded-xl flex items-center justify-center shadow-lg border border-white/10">
                  <span className="text-white text-xl font-black font-['Montserrat']">{digit}</span>
                </div>
              ))}
            </div>
            <span className="block text-[11px] font-black text-white/20 font-['Montserrat'] uppercase tracking-widest mt-1">Winning digits</span>
          </div>

          <div className="relative z-20 flex justify-start pt-4">
            <Button
              onClick={() => setLocation("/verify-results")}
              className="h-[54px] px-12 rounded-[16px] bg-[#BDFF25] text-[#0B0E11] font-black text-base uppercase tracking-wider shadow-[0_10px_25px_rgba(189,255,37,0.4)] hover:bg-[#a6e020] active:scale-95 transition-all">
              Verify
            </Button>
          </div>

          {/* Decor Assets */}
          <div className="absolute inset-0 pointer-events-none opacity-50 overflow-hidden">
            <img src="/figmaAssets/image-193-1.png" className="absolute top-[10%] right-[10%] w-28 blur-[3px] rotate-45" alt="Coin" />
            <img src="/figmaAssets/image-193-1.png" className="absolute bottom-[5%] left-[30%] w-24 rotate-[-12deg] opacity-60" alt="Coin" />
          </div>
        </Card>
      </div>
    </div>
  );
};
