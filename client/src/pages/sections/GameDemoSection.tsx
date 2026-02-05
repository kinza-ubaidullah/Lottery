import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const GameDemoSection: React.FC = () => {
    const [numbers, setNumbers] = useState(['0', '0']);
    const [rolling, setRolling] = useState(false);

    const rollNumbers = () => {
        setRolling(true);
        setTimeout(() => {
            const chars = '0123456789';
            setNumbers([
                chars[Math.floor(Math.random() * chars.length)],
                chars[Math.floor(Math.random() * chars.length)]
            ]);
            setRolling(false);
        }, 800);
    };

    return (
        <Card className="bg-[#12171D] rounded-[32px] md:rounded-[40px] p-5 md:p-7 border border-white/5 flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 shadow-none relative overflow-visible">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#E36826]/5 blur-[80px] pointer-events-none" />

            <div className="flex items-center space-x-3 md:space-x-4 relative z-10 shrink-0">
                <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 relative">
                    <img src="/figmaAssets/image-180.png" className="w-full h-full object-contain" alt="How it works" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-base md:text-[20px] font-black font-['Montserrat'] text-white uppercase tracking-tight leading-tight whitespace-nowrap">See how the game works</h2>
                    <p className="text-[#a1b4c6] text-[9px] md:text-[11px] font-bold font-['Outfit'] leading-relaxed opacity-60 uppercase tracking-wider mt-0.5 hidden sm:block">
                        No wallet. No risk. Just a demo.
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-1.5 md:gap-2 relative z-10 shrink-0">
                {/* Digit Boxes: Compact sized */}
                <div className="w-9 h-12 md:w-[48px] md:h-[62px] flex items-center justify-center rounded-lg md:rounded-xl bg-[#2D3741] shadow-[0_3px_0_#1A2128] border-none">
                    <span className="text-lg md:text-[22px] font-black text-white font-['Montserrat']">{numbers[0]}</span>
                </div>
                <div className="w-9 h-12 md:w-[48px] md:h-[62px] flex items-center justify-center rounded-lg md:rounded-xl bg-[linear-gradient(180deg,#FF8C53_0%,#E36826_100%)] shadow-[0_3px_0_#A83200] border-none">
                    <span className="text-lg md:text-[22px] font-black text-white font-['Montserrat']">{numbers[1]}</span>
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

            <div className="shrink-0 relative z-10">
                <Button
                    onClick={rollNumbers}
                    disabled={rolling}
                    className="px-5 md:px-8 h-10 md:h-14 rounded-lg md:rounded-xl font-['Montserrat'] font-black text-[10px] md:text-base border-none active:scale-95 transition-all text-white uppercase tracking-tight"
                    style={{
                        background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)'
                    }}
                >
                    {rolling && <RefreshCw className="w-4 h-4 animate-spin mr-2 shrink-0" />}
                    Randomize as demo
                </Button>
            </div>
        </Card>
    );
};
