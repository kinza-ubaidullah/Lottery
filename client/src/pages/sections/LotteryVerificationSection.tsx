import { Button } from "@/components/ui/button";

export const LotteryVerificationSection = (): JSX.Element => {
  return (
    <section
      className="relative w-full rounded-[20px] md:rounded-[32px] overflow-hidden p-4 md:p-8 shadow-2xl flex items-center min-h-[100px] md:min-h-[160px]"
      style={{
        background: 'linear-gradient(180deg, #50B200 0%, #729100 100%)'
      }}
    >
      <div className="flex items-center justify-between w-full gap-4 relative z-10">
        <div className="flex flex-col gap-0 md:gap-1">
          <h3 className="text-white text-xl md:text-5xl font-bold tracking-tight leading-loose md:leading-none">
            Fully verifiable
          </h3>
          <p className="text-white/80 text-sm md:text-3xl font-medium tracking-tight">
            on Blockchain.com
          </p>
        </div>

        <div className="flex items-center gap-4 md:gap-12 flex-1 justify-center md:justify-end h-full">
          {/* Central Verify Badge - Now positioned at the top edge */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[-30%] md:top-[-45%] z-20 pointer-events-none">
            <img
              className="w-24 h-24 md:w-64 md:h-64 object-contain"
              alt="Verify Badge"
              src="/figmaAssets/verify-label-1.png"
            />
          </div>

          <Button
            className="w-[80px] h-[40px] md:w-[160px] md:h-[64px] rounded-[10px] md:rounded-[18px] text-[#253602] font-black text-sm md:text-2xl transition-all active:scale-95 border-none shadow-xl z-30"
            style={{
              background: 'linear-gradient(180deg, #8FD811 0%, #E1FF75 100%)'
            }}
          >
            Verify
          </Button>
        </div>
      </div>

      {/* Gloss Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </section>
  );
};
