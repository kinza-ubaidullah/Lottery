import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const decorativeCoins = [
  {
    className: "absolute top-[46px] left-[181px] w-[170px] h-[163px]",
    src: "/figmaAssets/image-189.png",
    alt: "Large coin decoration",
  },
  {
    className: "absolute top-[105px] left-[191px] w-[31px] h-8",
    src: "/figmaAssets/image-193-1.png",
    alt: "Small coin decoration",
  },
  {
    className: "absolute top-[126px] left-32 w-[52px] h-[54px] blur-[2.71px]",
    src: "/figmaAssets/image-191.png",
    alt: "Blurred coin decoration",
  },
  {
    className: "absolute top-4 left-[177px] w-[29px] h-[30px]",
    src: "/figmaAssets/image-191.png",
    alt: "Top coin decoration",
  },
  {
    className:
      "absolute top-[159px] left-[313px] w-[38px] h-[50px] blur-[2.71px]",
    src: "/figmaAssets/image-191.png",
    alt: "Bottom right coin decoration",
  },
  {
    className: "absolute top-[74px] left-[321px] w-[30px] h-[33px]",
    src: "/figmaAssets/image-194-1.png",
    alt: "Right coin decoration",
  },
  {
    className: "absolute top-[186px] left-[164px] w-[39px] h-[23px]",
    src: "/figmaAssets/image-194-1.png",
    alt: "Bottom center coin decoration",
  },
  {
    className: "absolute top-[7px] left-[337px] w-3.5 h-4",
    src: "/figmaAssets/image-193-1.png",
    alt: "Top right coin decoration",
  },
];

const timerDigits = [
  { value: "09", leftClass: "left-[11px]" },
  { value: "23", leftClass: "left-3" },
];

export const LotteryPlaySection = (): JSX.Element => {
  return (
    <Card className="relative w-full max-w-[351px] h-[209px] rounded-lg overflow-hidden border-[none] bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(65deg,rgba(255,129,66,1)_0%,rgba(153,77,39,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
      <CardContent className="relative w-full h-full p-0">
        <div className="absolute top-[82px] left-[115px] w-[434px] h-[434px] rounded-[217px] blur-[80.03px] bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)]" />

        {decorativeCoins.map((coin, index) => (
          <img
            key={`coin-${index}`}
            className={`${coin.className} object-cover`}
            alt={coin.alt}
            src={coin.src}
          />
        ))}

        <div className="inline-flex flex-col items-start justify-center gap-0.5 absolute top-4 left-4">
          <Badge className="inline-flex items-center gap-[3px] pl-1 pr-3 py-1 h-auto rounded-lg bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] border-none">
            <img
              className="relative w-6 h-6 object-cover"
              alt="Bitcoin"
              src="/figmaAssets/bitcoin-3-1.png"
            />
            <span className="font-18-black font-[number:var(--18-black-font-weight)] text-[#fffdf7] text-[length:var(--18-black-font-size)] tracking-[var(--18-black-letter-spacing)] leading-[var(--18-black-line-height)] [font-style:var(--18-black-font-style)]">
              BITCOIN
            </span>
          </Badge>

          <div className="relative w-fit bg-[linear-gradient(90deg,rgba(255,190,168,1)_0%,rgba(255,255,255,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-18-black font-[number:var(--18-black-font-weight)] text-transparent text-[length:var(--18-black-font-size)] tracking-[var(--18-black-letter-spacing)] leading-[var(--18-black-line-height)] flex items-center justify-center whitespace-nowrap [font-style:var(--18-black-font-style)]">
            LOTTERY
          </div>
        </div>

        <p className="absolute top-[74px] left-4 h-4 flex items-center justify-center font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#a1b4c6] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] whitespace-nowrap [font-style:var(--14-semibold-font-style)]">
          Guess 6 Numbers. Match &amp; Win
        </p>

        <div className="absolute top-4 left-[182px] w-[154px] h-8 flex rounded-lg overflow-hidden bg-[linear-gradient(90deg,rgba(255,111,38,0.24)_0%,rgba(153,66,23,0)_100%)]">
          <div className="inline-flex mt-1.5 w-[113px] h-5 ml-[30px] relative items-center gap-[7px]">
            <span className="relative flex items-center justify-center w-fit font-12-bold font-[number:var(--12-bold-font-weight)] text-white text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap [font-style:var(--12-bold-font-style)]">
              Tickets
            </span>

            <Badge className="flex w-[27px] h-5 px-3 py-2.5 rounded-md border-[none] bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] items-center justify-center gap-2 overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <span className="mt-[-9.00px] mb-[-7.00px] ml-[-7.50px] mr-[-7.50px] font-[number:var(--14-bold-font-weight)] text-[#fff0c3] text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] whitespace-nowrap relative flex items-center justify-center w-fit font-14-bold [font-style:var(--14-bold-font-style)]">
                5$
              </span>
            </Badge>

            <span className="relative flex items-center justify-center w-fit font-12-bold font-[number:var(--12-bold-font-weight)] text-white text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap [font-style:var(--12-bold-font-style)]">
              only
            </span>
          </div>
        </div>

        <div className="inline-flex flex-col items-start justify-center gap-1 absolute top-[100px] left-4">
          <span className="relative flex items-center justify-center w-fit mt-[-1.00px] font-12-bold font-[number:var(--12-bold-font-weight)] text-[#a1b4c6] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap [font-style:var(--12-bold-font-style)]">
            Next draw in
          </span>

          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            {timerDigits.map((digit, index) => (
              <div
                key={`timer-${index}`}
                className="relative w-[41px] h-[30px] bg-[#12171d] rounded-lg overflow-hidden border border-solid border-[#525c68] shadow-[0px_3px_0px_#33383d]"
              >
                <span
                  className={`absolute top-[7px] ${digit.leftClass} h-4 text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] flex items-center justify-center font-14-bold font-[number:var(--14-bold-font-weight)] whitespace-nowrap [font-style:var(--14-bold-font-style)]`}
                >
                  {digit.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="inline-flex items-center gap-2 absolute top-[157px] left-4">
          <Button className="h-auto inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg overflow-hidden border border-solid border-[#ff8961] bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(255,75,15,0.9)_0%,rgba(255,111,63,0.9)_100%)]">
            <span className="mt-[-1.00px] font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] whitespace-nowrap font-14-bold [font-style:var(--14-bold-font-style)]">
              Play now
            </span>
          </Button>

          <Button className="h-auto inline-flex px-3 py-2.5 rounded-lg border-[none] bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] hover:bg-[linear-gradient(180deg,rgba(31,24,19,0.9)_0%,rgba(227,104,38,0.9)_100%)] items-center justify-center gap-2 overflow-hidden before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
            <span className="mt-[-1.00px] font-[number:var(--14-bold-font-weight)] text-[#fff0c3] text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] whitespace-nowrap font-14-bold [font-style:var(--14-bold-font-style)]">
              Verify results
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
