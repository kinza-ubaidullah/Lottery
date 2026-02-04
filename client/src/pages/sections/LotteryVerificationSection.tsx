import { Button } from "@/components/ui/button";

export const LotteryVerificationSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full rounded-[20px] md:rounded-[32px] overflow-hidden p-5 md:p-8 shadow-2xl flex items-center min-h-[120px] md:min-h-[180px]"
      style={{
        background: 'linear-gradient(180deg, #50B200 0%, #729100 100%)'
      }}
    >
      <div className="flex items-center justify-between w-full gap-4 relative z-10">
        <div className="flex flex-col gap-0 md:gap-1 z-30">
          <h3 className="text-white text-xl md:text-5xl font-bold tracking-tight leading-tight md:leading-none">
            Fully verifiable
          </h3>
          <p className="text-white/80 text-sm md:text-3xl font-medium tracking-tight">
            on Blockchain.com
          </p>
        </div>

        <div className="flex items-center gap-4 md:gap-12 flex-1 justify-end h-full">
          {/* Central Verify Badge - Optimized positioning */}
          <div className="absolute left-[55%] md:left-1/2 -translate-x-1/2 top-[-10%] md:top-[-15%] lg:top-[-20%] z-20 pointer-events-none opacity-60 md:opacity-100">
            <img
              className="w-28 h-28 md:w-60 md:h-60 lg:w-72 lg:h-72 object-contain"
              alt="Verify Badge"
              src="/figmaAssets/verify-label-1.png"
            />
          </div>

          <Button
            className="w-[90px] h-[44px] md:w-[160px] md:h-[64px] rounded-[10px] md:rounded-[18px] text-[#253602] font-black text-sm md:text-2xl transition-all active:scale-95 border-none shadow-xl z-30"
            style={{
              background: 'linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)'
            }}
          >
            Verify
          </Button>
        </div>
      </div>

      {/* Gloss Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
    </section>
  );
};
