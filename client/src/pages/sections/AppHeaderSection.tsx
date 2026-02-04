import { Button } from "@/components/ui/button";

export const AppHeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full border-b border-[#242d35] bg-[#12171d] z-50">
      <div className="w-full max-w-[1280px] mx-auto h-[60px] md:h-[80px] flex items-center justify-between px-4 md:px-6">
        <h1 className="font-['Luckiest_Guy'] text-white text-[24px] md:text-[40px] tracking-tight leading-none uppercase">
          LOTTERY
        </h1>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="w-[59px] h-[28px] md:w-[80px] md:h-[36px] lg:w-[100px] lg:h-[44px] rounded-[6px] md:rounded-[8px] border-none bg-[linear-gradient(180deg,#1F1813_0%,#E36826_100%)] hover:opacity-90 text-[#fff0c3] font-bold text-[10px] md:text-xs lg:text-base p-0 flex items-center justify-center gap-2 transition-all relative before:content-[''] before:absolute before:inset-0 before:p-[1px] before:rounded-[6px] md:before:rounded-[8px] before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              Log in
            </Button>
            <div className="relative group">
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-6 h-6 md:w-8 md:h-8 pointer-events-none z-20">
                <img src="/figmaAssets/image-188-1.png" className="w-full h-full object-contain" alt="Gift" />
              </div>
              <Button
                variant="ghost"
                className="w-[70px] h-[28px] md:w-[90px] md:h-[36px] lg:w-[120px] lg:h-[44px] rounded-[6px] md:rounded-[8px] bg-[#FF6B26] hover:bg-[#FF7B3B] text-white font-bold text-[10px] md:text-xs lg:text-base p-0 flex items-center justify-center border-none shadow-[0_4px_10px_rgba(255,107,38,0.3)] transition-all ml-1"
              >
                Sign up
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[linear-gradient(180deg,#00AAFF_0%,#90DAFF_100%)] hover:opacity-90 overflow-hidden"
            >
              <img src="/figmaAssets/image-184.png" className="w-6 h-6 object-contain" alt="Globe" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[linear-gradient(180deg,#9A76FF_0%,#C8B4FF_100%)] hover:opacity-90"
            >
              <img src="/figmaAssets/image-183.png" className="w-6 h-6 object-contain" alt="Chat" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
