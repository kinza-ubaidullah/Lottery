import { Button } from "@/components/ui/button";

export const LotteryVerificationSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-2xl overflow-hidden bg-[linear-gradient(180deg,rgba(80,178,0,1)_0%,rgba(114,145,0,1)_100%)] shadow-xl p-6 md:p-8">
      {/* Decorative pattern/glow */}
      <div className="absolute inset-0 bg-white/5 opacity-50 pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <img
              className="w-12 h-12 md:w-16 md:h-16 object-contain"
              alt="Verify label"
              src="/figmaAssets/verify-label-1.png"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight leading-none uppercase">
              Fully verifiable
            </h3>
            <p className="text-white/70 text-sm md:text-base font-medium">
              Check results on <span className="text-white font-bold underline cursor-pointer">Blockchain.com</span>
            </p>
          </div>
        </div>

        <Button className="w-full sm:w-auto px-8 h-12 rounded-xl border border-lime-300 bg-[linear-gradient(180deg,rgba(143,216,17,1)_0%,rgba(225,255,117,1)_100%)] hover:scale-105 active:scale-95 transition-all text-[#253602] font-black text-base shadow-lg shadow-lime-950/20">
          Verify Draw
        </Button>
      </div>
    </section>
  );
};
