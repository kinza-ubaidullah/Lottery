import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const winningDigits = [
  { value: "5" },
  { value: "3" },
  { value: "8" },
  { value: "9" },
  { value: "K" },
  { value: "J" },
];

const decorativeImages = [
  {
    className: "absolute top-0 left-[267px] w-[25px] h-[18px]",
    src: "/figmaAssets/image-193-1.png",
  },
  {
    className: "absolute top-3 left-[304px] w-[33px] h-8",
    src: "/figmaAssets/image-193-1.png",
  },
  {
    className: "absolute top-[46px] left-72 w-[55px] h-[22px]",
    src: "/figmaAssets/image-194-1.png",
  },
];

export const GameInstructionsSection = (): JSX.Element => {
  return (
    <Card className="relative w-full rounded-xl overflow-hidden border-none bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)]">
      <div className="absolute top-7 left-[330px] w-20 h-20 bg-[#bdff25] rounded-[40.08px] blur-[24.94px]" />

      <CardContent className="p-2 space-y-2">
        <div className="flex items-center gap-2.5">
          <span className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#a1b4c6] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
            LATEST BITCOIN BLOCK #
          </span>

          <span className="[font-family:'Montserrat',Helvetica] font-extrabold text-white text-base tracking-[-0.16px] leading-[normal]">
            4390J3
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-[3px]">
            {winningDigits.map((digit, index) => (
              <Badge
                key={`digit-${index}`}
                variant="outline"
                className="flex flex-col w-6 h-auto items-center justify-center gap-2 px-[3px] py-2 rounded-md overflow-hidden border-none bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
              >
                <span className="text-[#fff0c3] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] font-12-bold font-[number:var(--12-bold-font-weight)] [font-style:var(--12-bold-font-style)]">
                  {digit.value}
                </span>
              </Badge>
            ))}
          </div>

          <span className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#a1b4c6] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
            Winning digits
          </span>
        </div>
      </CardContent>

      {decorativeImages.map((image, index) => (
        <img
          key={`decorative-${index}`}
          className={`${image.className} object-cover`}
          alt="Decorative coin"
          src={image.src}
        />
      ))}
    </Card>
  );
};
