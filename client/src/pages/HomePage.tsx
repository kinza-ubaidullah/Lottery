import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Sidebar } from './components/Sidebar';
import { ChatSidebar } from './components/ChatSidebar';
import { PRIZE_CARDS, MOCK_WINS } from '../constants';
import { ASSETS } from '../assets';
import { useIsMobile } from "@/hooks/use-mobile";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { GameInstructionsSection } from "./sections/GameInstructionsSection";
import { LotteryPlaySection } from "./sections/LotteryPlaySection";
import { LotteryVerificationSection } from "./sections/LotteryVerificationSection";
import { PreviousWinsListSection } from "./sections/PreviousWinsListSection";
import { SelectGameModal } from "@/components/modals/SelectGameModal";
import { DesktopLayout } from "@/components/layout/DesktopLayout";

export const HomePage = () => {
  const isMobile = useIsMobile();
  const [isSelectGameOpen, setIsSelectGameOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) {
      const timer = setTimeout(() => {
        setIsSelectGameOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="w-full flex flex-col gap-8 md:gap-12">
        <LotteryPlaySection />
        <LotteryVerificationSection />
        <GameInstructionsSection />
        <PreviousWinsListSection />
      </div>
    );
  }

  return (
    <>
      <div className="space-y-10 px-4 md:px-8 max-w-7xl mx-auto w-full">

        {/* BANNER GRID (2/3 & 1/3 division) */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 relative">
          <div
            className="xl:col-span-2 relative min-h-[380px] rounded-[40px] overflow-hidden p-8 md:p-12 flex flex-col justify-center shadow-2xl group"
            style={{
              background: 'linear-gradient(180deg, #13191F 0%, #1F262E 100%)',
              border: '1px solid transparent',
              borderImageSource: 'linear-gradient(245.7deg, #FF8142 0%, rgba(153, 77, 39, 0) 12.41%), linear-gradient(65.14deg, #FF8142 2.8%, rgba(153, 77, 39, 0) 14.46%)',
              borderImageSlice: 1
            }}
          >
            <div className="absolute top-0 right-0 w-full h-full z-0 overflow-hidden pointer-events-none">
              <div style={{
                position: 'absolute',
                width: '100%',
                maxWidth: '680px',
                aspectRatio: '1/1',
                right: '-10%',
                top: '-20%',
                background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)',
                opacity: 0.6,
                borderRadius: '50%',
                zIndex: 0,
                filter: 'blur(40px)',
                pointerEvents: 'none'
              }} />
              <img
                src={ASSETS.CHARACTERS.BITCOIN_FOX}
                className="absolute object-contain z-10 w-[300px] lg:w-[400px] xl:w-[476px] top-[10%] right-[-30%] lg:right-[-40%]"
                style={{ height: 'auto', maxHeight: '110%' }}
                alt="Mascot"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#13191F] via-[#13191F]/50 to-transparent z-20"></div>
              {/* Floating Coin */}
              <img
                src="/figmaAssets/bitcoin-3-1.png"
                className="absolute z-20 object-contain w-[40px] xl:w-[60px] top-[20%] right-[10%] xl:right-[15%]"
                alt="Coin"
              />
            </div>
            <div className="relative z-30 max-w-lg">
              <div
                className="flex items-center mb-1 bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] w-[180px] h-[50px] rounded-[12px] p-1 gap-2"
              >
                <div className="bg-white/10 text-white rounded-[8px] w-[42px] h-[42px] flex items-center justify-center">
                  <img src="/figmaAssets/bitcoin-3-1.png" className="w-[24px] h-[24px] object-contain" alt="BTC" />
                </div>
                <span className="font-['Montserrat'] font-black text-[19px] tracking-[0.1em] text-white uppercase">BITCOIN</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black italic leading-[0.8] tracking-tighter text-[#FFD1B7] drop-shadow-2xl mb-1">LOTTERY</h1>
              <p className="text-[14px] md:text-[15px] font-bold text-[#94A3B8] mb-6">Guess 6 Numbers. Match & Win</p>

              {/* Tickets Info */}
              <div className="flex items-center gap-3 mb-6 bg-[#1F262E]/50 w-fit pr-4 rounded-full border border-white/5 p-1">
                <img src="/figmaAssets/image-191.png" className="w-[32px] h-[32px] object-contain" alt="Ticket" />
                <span className="text-white font-bold text-[14px]">Tickets</span>
                <div className="bg-gradient-to-b from-[#FF8142] to-[#994D27] px-2 py-0.5 rounded-[6px] text-white font-bold text-[12px] border border-white/20">5$</div>
                <span className="text-white font-bold text-[14px]">only</span>
              </div>

              <div className="flex flex-wrap items-end gap-6 mb-8">
                {/* Verify Card */}
                <div className="w-[180px] h-[80px] rounded-[16px] bg-[#51A225] relative overflow-hidden flex flex-col justify-center px-4 shadow-lg">
                  <div className="font-black italic text-white text-[14px] leading-tight z-10">Fully verifiable<br /><span className="text-[12px] font-bold opacity-80 not-italic">on Blockchain.com</span></div>
                  <img
                    src="/figmaAssets/verify-label-1.png"
                    alt="Verified"
                    className="absolute w-[67px] h-[67px] top-[40%] left-[25%] opacity-100"
                  />
                </div>

                {/* Countdown */}
                <div className="flex flex-col gap-2">
                  <span className="text-[#94A3B8] font-bold text-[12px]">Next draw in</span>
                  <div className="flex gap-2">
                    <div className="w-[48px] h-[48px] rounded-[16px] bg-[#13181D] border border-[#525D68] flex items-center justify-center text-white font-black text-xl relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5" />
                      <span className="relative z-10">09</span>
                    </div>
                    <div className="w-[48px] h-[48px] rounded-[16px] bg-[#13181D] border border-[#525D68] flex items-center justify-center text-white font-black text-xl relative overflow-hidden shadow-2xl">
                      <div className="absolute inset-x-0 top-0 h-1/2 bg-white/5" />
                      <span className="relative z-10">23</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-10 py-4 rounded-2xl font-black uppercase text-[11px] shadow-2xl text-white transition-all active:scale-95 hover:brightness-110"
                  style={{ background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)' }}
                >Play now</button>

                <button className="w-full sm:w-auto px-10 py-4 rounded-2xl font-black uppercase text-[11px] shadow-2xl text-[#FFD1B7] border border-[#FF8142]/30 transition-all active:scale-95 hover:bg-white/5"
                  style={{ background: 'linear-gradient(180deg, #5C2B10 0%, #2D1A10 100%)' }}
                >Verify results</button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <Card className="relative flex-1 overflow-hidden border-none shadow-2xl flex flex-col justify-between p-6 bg-[#3E5F00] min-h-[200px]">
              <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }} />
              <div className="relative z-20 space-y-2 max-w-[70%]">
                <h2 className="text-white text-[24px] md:text-[32px] font-[900] leading-[0.9] uppercase tracking-tighter">Lucky Hour <br />is now live</h2>
                <p className="text-white/80 text-[12px] md:text-[14px] font-medium leading-tight">higher prizes for the <br />next 60 minutes.</p>
                <Button className="h-[40px] px-6 rounded-full bg-gradient-to-b from-[#8FD811] to-[#E1FF75] border border-[#BEFF25] text-black font-black hover:brightness-110 transition-all shadow-xl uppercase text-[12px] active:scale-95">Play now</Button>
              </div>
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <img src="/figmaAssets/img7.png" className="absolute object-contain z-10 w-[180px] md:w-[240px] top-[40%] left-[20%] md:left-[100px] rotate-[6.83deg]" alt="Machine" />
                <img src="/figmaAssets/box.png" className="absolute object-contain z-20 w-[100px] md:w-[130px] top-[30%] left-[15%] md:left-[70px]" alt="Box" />
                <img src="/figmaAssets/money1.png" className="absolute object-contain z-30 w-[80px] md:w-[98px] top-[10%] right-[10%]" alt="money" />
              </div>
            </Card>

            <Card className="h-[140px] rounded-[24px] border border-white/5 p-6 flex flex-col justify-center gap-3 shadow-2xl relative overflow-hidden bg-[#13181D]">
              <div className="absolute right-[-20%] top-[-50%] w-[70%] h-[200%] bg-[#BDFF25] opacity-20 blur-[60px] pointer-events-none" />
              <div className="relative z-10">
                <h3 className="text-white text-[24px] font-black uppercase leading-none mb-1">4390J3</h3>
                <p className="text-[#556575] text-[10px] font-black uppercase tracking-widest">LATEST BITCOIN BLOCK #</p>
              </div>
              <div className="flex items-end justify-between gap-2 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1">
                    {['5', '3', '8', '9', 'K', 'J'].map((n, i) => (
                      <div key={i} className="w-[28px] h-[36px] rounded-[6px] flex items-center justify-center text-white text-[14px] font-black shadow-lg"
                        style={{ background: 'linear-gradient(180deg, #1F1813 0%, #E36826 100%), linear-gradient(180deg, rgba(255, 131, 63, 0.2) 0%, rgba(255, 179, 138, 0.2) 100%)', backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box', border: '1px solid transparent' }}>
                        {n}
                      </div>
                    ))}
                  </div>
                  <span className="text-[#556575] text-[10px] font-bold w-[50px] leading-tight hidden xl:block uppercase">Winning digits</span>
                </div>
                <Button className="h-[36px] px-5 rounded-[10px] bg-[#BDFF25] text-black font-black uppercase text-[11px] hover:bg-[#a6e020] border-none shadow-lg active:scale-95 transition-all">Verify</Button>
              </div>
            </Card>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-8 mt-10 p-4 bg-[#1F262E]/20 rounded-3xl border border-white/5">
          <div className="flex items-center gap-4 flex-1">
            <img src="/figmaAssets/image-188-5.png" className="h-[80px] w-auto object-contain drop-shadow-lg" alt="How it works" />
            <div className="flex flex-col">
              <h3 className="text-white text-[15px] font-black tracking-tight uppercase">See how the game works</h3>
              <p className="text-[#94A3B8] text-[13px] opacity-80">This is an example draw using real Bitcoin block logic</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[52px] h-[64px] rounded-[10px] bg-[#313C47] border border-[#525D68] flex items-center justify-center text-white font-extrabold text-[24px]">0</div>
            <div className="w-[52px] h-[64px] rounded-[10px] bg-gradient-to-b from-[#1F1813] to-[#E36826] border border-[#FF8962] flex items-center justify-center text-white font-extrabold text-[24px]">0</div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-[52px] h-[64px] rounded-[10px] bg-[#13181D] border border-[#525D68] flex items-center justify-center">
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none"><path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" fill="#525D68" /></svg>
              </div>
            ))}
          </div>
          <button className="w-full lg:w-[203px] h-[48px] rounded-[8px] bg-gradient-to-b from-[#FF4B0F] to-[#FF6F3F] border border-[#FF8962] text-white font-black uppercase text-[13px] active:scale-95 transition-all">Randomize demo</button>
        </div>

        {/* PRIZE BOARD */}
        <div className="w-full mt-16 overflow-x-auto custom-scrollbar pb-4">
          <div className="flex items-center justify-between min-w-[1000px] lg:min-w-0 gap-4">
            {PRIZE_CARDS.map((card, index) => {
              let glowColor = null;
              let badgeGradientInfo = { start: '#1F1813', end: '#E36826', border: '255, 131, 63' };
              if (index === 0) glowColor = '#B45401';
              else if (index === 1) { glowColor = '#FF5100'; badgeGradientInfo = { start: '#2b1100', end: '#FF5100', border: '255, 81, 0' }; }
              else if (index === 2) { glowColor = '#7BFF00'; badgeGradientInfo = { start: '#152b00', end: '#7BFF00', border: '123, 255, 0' }; }
              else if (index === 4) { glowColor = '#9000FF'; badgeGradientInfo = { start: '#18002b', end: '#9000FF', border: '144, 0, 255' }; }

              return (
                <div key={card.digits} className="flex-1 min-h-[131px] flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer transition-all hover:brightness-110 rounded-[12px] bg-gradient-to-b from-[#13191F] to-[#1F262E] border border-[#252F38] p-4 gap-2">
                  {glowColor && <div className="absolute top-[-20%] left-0 right-0 h-[60%] opacity-80 blur-[72px]" style={{ background: glowColor }} />}
                  <div className="flex items-center justify-center w-[63px] h-[33px] rounded-[8px] bg-gradient-to-b from-transparent to-transparent border border-transparent shadow-lg relative z-10"
                    style={{ backgroundImage: `linear-gradient(180deg, ${badgeGradientInfo.start} 0%, ${badgeGradientInfo.end} 100%), linear-gradient(180deg, rgba(${badgeGradientInfo.border}, 0.2) 0%, rgba(${badgeGradientInfo.border}, 0.2) 100%)`, backgroundOrigin: 'border-box', backgroundClip: 'padding-box, border-box', border: '1px solid transparent' }}>
                    <span className="text-white font-black text-[13px]">{card.digits}</span>
                  </div>
                  <span className="text-white text-[13px] font-medium relative z-10">Digit match</span>
                  <div className="flex items-center gap-2 relative z-10">
                    <img src="/figmaAssets/image-188-5.png" className="w-[40px] h-[40px] object-contain" alt="Prize" />
                    <div className="flex flex-col">
                      <span className="text-[#556575] text-[10px] font-bold uppercase leading-none">Prize</span>
                      <span className="text-white text-[16px] font-black leading-none">{card.prize}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PREVIOUS WINS SECTION */}
        <div className="w-full flex flex-col items-center gap-8 py-10">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-[#7BFF00] blur-md opacity-40"></div>
              <span className="relative text-2xl">🏆</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter">Previous wins</h3>
          </div>
          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto w-full justify-center px-4 custom-scrollbar">
            {["Best drops", "Highest wins", "My bets"].map((tab, i) => (
              <div key={tab} className="relative cursor-pointer group whitespace-nowrap">
                <span className={cn("text-[14px] font-black uppercase tracking-wide transition-colors", i === 0 ? "text-white" : "text-[#525D68] hover:text-white")}>{tab}</span>
                {i === 0 && <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#7BFF00] to-transparent shadow-[0_0_10px_#7BFF00]"></div>}
              </div>
            ))}
          </div>

          <div className="w-full bg-[#0D1216] rounded-[24px] p-4 md:p-8 overflow-x-auto custom-scrollbar">
            <div className="min-w-[1200px]">
              <div className="grid grid-cols-7 gap-4 mb-6 px-6 text-[#556575] font-black text-[11px] uppercase tracking-widest">
                <div>User</div><div>Date</div><div>Ticket amount</div><div>Ticket price</div><div>Numbers</div><div>Winning numbers</div><div className="text-right">Profit</div>
              </div>
              <div className="flex flex-col gap-2">
                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                  <div key={i} className="grid grid-cols-7 gap-4 items-center p-6 rounded-[16px] transition-colors hover:bg-white/[0.02]">
                    <div className="flex items-center gap-3"><img src="/figmaAssets/frame-340-9.png" className="w-10 h-10 rounded-full" alt="U" /><span className="text-white font-black text-[13px]">0xA9f...3e2</span></div>
                    <div className="flex items-center gap-2 text-[#94A3B8] font-bold text-[13px]"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>2 min ago</div>
                    <div className="flex items-center gap-2 text-white font-bold text-[13px]"><svg width="16" height="16" viewBox="0 0 24 24" fill="#7BFF00"><path d="M21 8H3V6H21V8ZM21 16H3V18H21V16ZM16 11H8V13H16V11Z" /></svg>2 tickets</div>
                    <div className="flex items-center gap-2 text-white font-bold text-[13px]"><div className="w-4 h-4 rounded-full bg-[#FF8962]"></div>569 USD</div>
                    <div className="flex gap-1.5">
                      {['5', '3', '8', '9', 'K', 'J'].map((num, idx) => (
                        <div key={idx} className="w-8 h-8 rounded-[4px] flex items-center justify-center text-[12px] font-black text-white"
                          style={{ background: num === '5' ? 'linear-gradient(180deg,#1F1813 0%,#E36826 100%)' : 'linear-gradient(180deg,#13191F 0%,#1F262E 100%)', border: '1px solid', borderImageSource: num === '5' ? 'linear-gradient(180deg,rgba(255,131,63,0.2) 0%,rgba(255,179,138,0.2) 100%)' : 'linear-gradient(180deg,rgba(70,84,99,0.2) 0%,rgba(152,175,198,0.2) 100%)', borderImageSlice: 1 }}>{num}</div>
                      ))}
                    </div>
                    <div className="flex gap-1.5">
                      {['5', '3', '8', '9', 'K', 'J'].map((num, idx) => (
                        <div key={idx} className="w-8 h-8 rounded-[4px] flex items-center justify-center text-[12px] font-black text-white" style={{ background: 'linear-gradient(180deg,#1F1813 0%,#E36826 100%)', border: '1px solid', borderImageSource: 'linear-gradient(180deg,rgba(255,131,63,0.2) 0%,rgba(255,179,138,0.2) 100%)', borderImageSlice: 1 }}>{num}</div>
                      ))}
                    </div>
                    <div className="text-right text-white font-black text-[13px] flex items-center justify-end gap-2"><div className="w-2 h-2 rounded-full bg-[#7BFF00]"></div>+ 569 USD</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SelectGameModal isOpen={isSelectGameOpen} onClose={() => setIsSelectGameOpen(false)} />
    </>
  );
};
