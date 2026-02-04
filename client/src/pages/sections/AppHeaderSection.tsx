import { Button } from "@/components/ui/button";

export const AppHeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full border-b border-[#242d35] bg-[#12171d]/80 backdrop-blur-md sticky top-0 z-50">
      <div className="w-full max-w-[1280px] mx-auto h-[70px] flex items-center justify-between px-4 md:px-8">
        <h1 className="[font-family:'Luckiest_Guy',Helvetica] font-normal text-[#fffdf7] text-[28px] md:text-[32px] tracking-[-0.23px] leading-none whitespace-nowrap cursor-pointer hover:scale-105 transition-transform">
          LOTTERY
        </h1>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 p-0 rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(0,170,255,1)_0%,rgba(144,218,255,1)_100%)] hover:opacity-90 transition-opacity"
            >
              <img
                className="w-5 h-5 object-contain"
                alt="Icon"
                src="/figmaAssets/image-184.png"
              />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="w-9 h-9 p-0 rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(154,118,255,1)_0%,rgba(200,180,255,1)_100%)] hover:opacity-90 transition-opacity"
            >
              <img
                className="w-5 h-5 object-contain"
                alt="Icon"
                src="/figmaAssets/image-183.png"
              />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="default"
              className="h-10 px-4 py-2 rounded-lg border-none bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] hover:opacity-90 overflow-hidden relative"
            >
              <span className="font-14-bold text-[#fff0c3] whitespace-nowrap">
                Log in
              </span>
            </Button>

            <Button
              variant="ghost"
              size="default"
              className="h-10 px-4 py-2 rounded-lg border border-solid border-[#ff8961] bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] hover:opacity-90 transition-all shadow-[0_0_15px_rgba(255,75,15,0.3)]"
            >
              <span className="font-14-bold text-white whitespace-nowrap">
                Sign up
              </span>
            </Button>
          </div>

          <div className="flex items-center ml-2 cursor-pointer hover:opacity-80 transition-opacity">
            <img
              className="w-6 h-7 object-contain"
              alt="Menu Icon"
              src="/figmaAssets/image-182.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
