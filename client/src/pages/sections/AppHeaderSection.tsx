import { Button } from "@/components/ui/button";

export const AppHeaderSection = (): JSX.Element => {
  return (
    <header className="relative w-full border-b border-[#242d35]">
      <div className="relative w-full h-[53px]">
        <img
          className="absolute top-[21px] right-[14px] w-[67px] h-[11px]"
          alt="Status indicators"
          src="/figmaAssets/group.png"
        />

        <div className="absolute top-4 left-[21px] w-[54px] h-[21px] flex items-center">
          <div className="mt-px h-4 flex-1 [font-family:'SF_Pro_Display-Regular',Helvetica] font-normal text-sm text-center tracking-[-0.28px] leading-[14px]">
            <span className="text-white tracking-[-0.04px] leading-4">
              9:41
            </span>
          </div>
        </div>

        <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_64px)] w-[127px] h-[37px] bg-black rounded-[18.5px]" />
      </div>

      <div className="relative w-full h-[50px] flex items-center justify-between px-3">
        <h1 className="[font-family:'Luckiest_Guy',Helvetica] font-normal text-[#fffdf7] text-[23.4px] tracking-[-0.23px] leading-[23.4px] whitespace-nowrap">
          LOTTERY
        </h1>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-auto px-2.5 py-2 rounded-md border-none bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] overflow-hidden relative before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
          >
            <span className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#fff0c3] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
              Log in
            </span>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="h-auto pl-4 pr-2 py-2 rounded-md border border-solid border-[#ff8961] bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)]"
          >
            <span className="font-12-bold font-[number:var(--12-bold-font-weight)] text-white text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
              Sign up
            </span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-7 h-7 p-0 rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(0,170,255,1)_0%,rgba(144,218,255,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(0,170,255,1)_0%,rgba(144,218,255,1)_100%)]"
          >
            <img
              className="w-[19px] h-5 object-cover"
              alt="Icon"
              src="/figmaAssets/image-184.png"
            />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-7 h-7 p-0 rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(154,118,255,1)_0%,rgba(200,180,255,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(154,118,255,1)_0%,rgba(200,180,255,1)_100%)]"
          >
            <img
              className="w-[18px] h-[19px] object-cover"
              alt="Icon"
              src="/figmaAssets/image-183.png"
            />
          </Button>

          <img
            className="w-5 h-6 object-cover"
            alt="Icon"
            src="/figmaAssets/image-182.png"
          />
        </div>
      </div>
    </header>
  );
};
