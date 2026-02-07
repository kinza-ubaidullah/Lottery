import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";



const winningDigits = ["5", "3", "8", "9", "K", "J"];

export const LotteryPlaySection = (): JSX.Element => {
  const [, setLocation] = useLocation();
  const [countdown, setCountdown] = useState({ minutes: 9, seconds: 23 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 9, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 relative px-4 xl:px-0">
      <Card
        className="relative lg:col-span-2 rounded-[32px] overflow-hidden border-none shadow-2xl min-h-[500px] p-8 md:p-12 flex flex-col justify-between"
        style={{
          background: 'linear-gradient(135deg, #0B0E11 0%, #3D1C0A 100%)'
        }}
      >
        {/* Background Atmosphere & Glow */}
        <div className="absolute inset-0 pointer-events-none z-0" style={{
          background: 'radial-gradient(circle at 70% 50%, rgba(227, 104, 38, 0.25) 0%, transparent 60%)'
        }} />
        <div className="absolute w-[100%] max-w-[680px] aspect-square right-[-10%] top-[-20%] bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] opacity-100 blur-[40px] rounded-full pointer-events-none z-0" />

        {/* Content Container */}
        <div className="relative z-20 flex flex-col gap-6 items-start h-full max-w-xl">
          {/* Top Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 bg-[#FF4B0F] px-5 py-2 rounded-xl shadow-lg border border-white/10 w-fit">
              <img src="/figmaAssets/bitcoin-3-1.png" className="w-5 h-5 object-contain" alt="BTC" />
              <span className="font-['Montserrat'] font-[900] text-white text-[14px] tracking-widest leading-none uppercase">BITCOIN</span>
            </div>

            <div className="space-y-2 relative z-30">
              <h3 className="font-['Montserrat'] font-[900] text-[40px] sm:text-[60px] lg:text-[84px] text-white leading-[0.85] uppercase tracking-tighter pt-4">
                LOTTERY
              </h3>
              <p className="text-[#A1B4C6] text-lg lg:text-xl font-medium font-['Montserrat'] max-w-[280px] md:max-w-[340px] leading-tight opacity-80 mt-2">
                Guess 6 Numbers. Match & Win
              </p>
            </div>
          </div>

          {/* Tickets Badge */}
          <div className="flex items-center gap-4 backdrop-blur-md rounded-[16px] px-5 py-3 border border-white/5 shadow-xl" style={{ background: 'linear-gradient(90deg, rgba(255, 111, 38, 0.24) 0%, rgba(153, 66, 23, 0) 100%)' }}>
            <img
              src="/figmaAssets/image-191.png"
              className="object-contain w-[38px] h-[40px]"
              alt="Ticket"
            />
            <span className="text-white font-bold text-lg">Tickets</span>
            <div className="bg-[#FF4B0F] px-4 py-1 rounded-[8px] shadow-lg">
              <span className="text-white font-black text-xl">5$</span>
            </div>
            <span className="text-white/40 font-black text-md">only</span>
          </div>

          {/* Verifiable Badge Group */}
          <div className="flex flex-wrap items-center gap-6 mt-4">
            <div className="rounded-[24px] p-6 flex flex-col gap-1 min-w-[200px] shadow-[0_15px_40px_rgba(88,167,0,0.4)] relative overflow-hidden group" style={{ background: 'linear-gradient(180deg, #50B200 0%, #729100 100%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
              <div className="flex flex-col">
                <span className="text-white font-black text-[17px] uppercase leading-none mb-1">Fully verifiable</span>
                <span className="text-white/80 font-medium text-[12px]">on Blockchain.com</span>
              </div>
            </div>

            {/* Timer */}
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-black text-white/40 uppercase tracking-widest">Next draw in</span>
              <div className="flex gap-2.5">
                <div className="w-[64px] h-[68px] rounded-[16px] flex items-center justify-center shadow-2xl relative overflow-hidden" style={{ background: '#13181D', border: '1px solid #525D68' }}>
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5" />
                  <span className="text-white text-[32px] font-[900] relative z-10">{String(countdown.minutes).padStart(2, "0")}</span>
                </div>
                <div className="w-[64px] h-[68px] rounded-[16px] flex items-center justify-center shadow-2xl relative overflow-hidden" style={{ background: '#13181D', border: '1px solid #525D68' }}>
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5" />
                  <span className="text-white text-[32px] font-[900] relative z-10">{String(countdown.seconds).padStart(2, "0")}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-[40px]" />

          {/* Bottom Actions */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row gap-5">
              <Button
                onClick={() => setLocation("/play-lottery")}
                className="h-[64px] px-12 rounded-[18px] font-black text-[22px] shadow-[0_15px_40px_rgba(255,75,15,0.4)] border border-white/15 transition-all uppercase"
                style={{ background: 'linear-gradient(180deg, #FF6F3F 0%, #FF4B0F 100%)' }}
              >
                Play now
              </Button>
              <Button
                onClick={() => setLocation("/lottery-results")}
                className="h-[64px] px-10 rounded-[18px] font-black text-[19px] border border-[#512711] text-[#FFF0C3] transition-all uppercase"
                style={{ background: 'linear-gradient(180deg, #1F1813 0%, #E36826 100%)' }}
              >
                Verify results
              </Button>
            </div>
          </div>
        </div>

        {/* Mascot & Assets */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <img
            src="/figmaAssets/image-189.png"
            alt="Fox Mascot"
            className="absolute object-contain z-10 w-[300px] md:w-[476px] top-[10%] right-[15%] md:right-[-40%]"
            style={{ height: 'auto', maxHeight: '110%' }}
          />
          <img src="/figmaAssets/image-193-1.png" className="absolute top-[20%] right-[15%] lg:right-[20%] w-16 md:w-20 opacity-30 blur-[2px] rotate-[15deg]" alt="Coin" />
          <img src="/figmaAssets/image-193-1.png" className="absolute bottom-[15%] right-[10%] lg:right-[15%] w-24 md:w-28 opacity-60 rotate-[-12deg]" alt="Coin" />
          <img src="/figmaAssets/image-194-1.png" className="absolute top-[10%] left-[40%] w-20 md:w-24 opacity-20 rotate-[10deg] blur-[1px]" alt="Ticket" />
        </div>
      </Card>

      {/* RIGHT COLUMN */}
      <div className="lg:col-span-1 flex flex-col gap-6 h-full">
        {/* TOP: LUCKY HOUR */}
        <Card
          className="relative flex-1 rounded-[12px] overflow-hidden border-none shadow-2xl flex flex-col justify-between p-8 min-h-[293px]"
          style={{ background: '#3E5F00' }}
        >
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />

          <div className="relative z-20 space-y-3 max-w-[70%]">
            <h2 className="text-white text-[32px] md:text-[40px] font-[900] leading-[0.9] uppercase tracking-tighter">
              Lucky Hour <br />is now live
            </h2>
            <p className="text-white/80 text-[16px] md:text-[18px] font-medium leading-tight">
              higher prizes for the <br />next 60 minutes.
            </p>
            <Button className="h-[48px] px-8 rounded-full bg-[#BDFF25] text-black font-black uppercase text-[16px] border-none active:scale-95 transition-all">
              Play now
            </Button>
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <img
              src="/figmaAssets/img7.png"
              className="absolute object-contain z-10 w-[240px] md:w-[320px] top-[10%] right-[-100px] md:right-[-120px]"
              style={{ transform: 'rotate(6.83deg)' }}
              alt="Lottery Machine"
            />
            <img
              src="/figmaAssets/box.png"
              className="absolute object-contain z-20 w-[180px] md:w-[240px] bottom-[-20px] left-[40%]"
              alt="Box"
            />
          </div>
        </Card>

        {/* BOTTOM: VERIFY BLOCK */}
        <Card
          className="relative h-[220px] lg:h-[135px] rounded-[12px] bg-[#0F151B] border-none shadow-2xl p-6 flex flex-col justify-center overflow-hidden"
        >
          <div className="relative z-20 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-white text-[32px] lg:text-[40px] font-[900] tracking-tight leading-none uppercase">4390J3</h3>
              <span className="text-white/40 font-black text-[12px] uppercase tracking-[0.2em] whitespace-nowrap">Latest Bitcoin block #</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-1.5 shrink-0">
                {winningDigits.map((digit, i) => (
                  <div key={i} className="w-8 h-8 lg:w-9 lg:h-9 bg-[linear-gradient(180deg,#FF833F_0%,#FF4B0F_100%)] rounded-[8px] flex items-center justify-center shadow-lg border-t border-white/20">
                    <span className="text-white text-[18px] lg:text-[20px] font-black">{digit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 z-30">
            <Button
              onClick={() => setLocation("/verify-results")}
              className="w-full lg:w-auto h-[48px] lg:h-[56px] px-8 rounded-[16px] bg-[#BDFF25] text-black font-black text-[16px] lg:text-[18px] uppercase shadow-lg border-none active:scale-95 transition-all">
              Verify
            </Button>
          </div>

          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <img src="/figmaAssets/image-193-1.png" className="absolute top-[10%] right-[-5%] w-20 opacity-30 blur-[1px]" alt="Coin" />
          </div>
        </Card>
      </div>
    </div>
  );
};
