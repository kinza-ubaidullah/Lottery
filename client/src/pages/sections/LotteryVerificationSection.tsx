import { Button } from "@/components/ui/button";

export const LotteryVerificationSection = (): JSX.Element => {
  return (
    <section className="relative w-full rounded-lg overflow-hidden bg-[linear-gradient(180deg,rgba(80,178,0,1)_0%,rgba(114,145,0,1)_100%)] p-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <div className="h-4 flex items-center font-14-bold font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] whitespace-nowrap [font-style:var(--14-bold-font-style)]">
            Fully verifiable
          </div>
          <div className="h-3.5 flex items-center opacity-60 font-12-semibold font-[number:var(--12-semibold-font-weight)] text-white text-[length:var(--12-semibold-font-size)] tracking-[var(--12-semibold-letter-spacing)] leading-[var(--12-semibold-line-height)] whitespace-nowrap [font-style:var(--12-semibold-font-style)]">
            on Blockchain.com
          </div>
        </div>

        <img
          className="w-[67px] h-[45px] object-cover"
          alt="Verify label"
          src="/figmaAssets/verify-label-1.png"
        />

        <Button className="h-auto px-3 py-2.5 rounded-lg border border-solid border-[#bdff25] bg-[linear-gradient(180deg,rgba(143,216,17,1)_0%,rgba(225,255,117,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(143,216,17,1)_0%,rgba(225,255,117,1)_100%)] font-[number:var(--14-bold-font-weight)] text-[#253602] text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] font-14-bold [font-style:var(--14-bold-font-style)]">
          Verify
        </Button>
      </div>
    </section>
  );
};
