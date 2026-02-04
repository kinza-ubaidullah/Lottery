import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const digitBoxes = [
  {
    type: "digit",
    value: "0",
    className: "bg-[#303b46] border-[#525c68] shadow-[0px_3px_0px_#33383d]",
    textClassName: "text-white",
  },
  {
    type: "digit",
    value: "0",
    className:
      "border-[#ff8961] shadow-[0px_3px_0px_#c2502a] bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)]",
    textClassName: "text-white",
  },
  {
    type: "image",
    src: "/figmaAssets/frame-377.svg",
  },
  {
    type: "image",
    src: "/figmaAssets/frame-379.svg",
  },
  {
    type: "image",
    src: "/figmaAssets/frame-380.svg",
  },
  {
    type: "image",
    src: "/figmaAssets/frame-381.svg",
  },
];

const prizeCards = [
  {
    digitMatch: "2",
    digitClassName:
      "bg-[linear-gradient(180deg,rgba(43,53,64,1)_0%,rgba(74,89,104,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(70,84,99,0.2)_0%,rgba(152,175,198,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none",
    digitTextClassName: "text-white",
    prize: "Free ticket",
    prizeImage: "/figmaAssets/image-188-1.png",
    glowClassName: "",
  },
  {
    digitMatch: "3",
    digitClassName:
      "bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(255,131,63,0.2)_0%,rgba(255,179,138,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none",
    digitTextClassName: "text-[#fff0c3]",
    prize: "$300",
    prizeImage: "/figmaAssets/image-188-5.png",
    glowClassName:
      "absolute top-[-74px] left-[13px] w-[223px] h-[86px] bg-[#b35300] rounded-[111.5px/43px] blur-[36.1px] opacity-35",
  },
  {
    digitMatch: "4",
    digitClassName:
      "border border-solid border-[#ff8961] bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)]",
    digitTextClassName: "text-white",
    prize: "$3 000",
    prizeImage: "/figmaAssets/image-188-5.png",
    glowClassName:
      "left-[13px] bg-[#ff5000] absolute top-[-74px] w-[223px] h-[86px] rounded-[111.5px/43px] blur-[36.1px] opacity-80",
  },
  {
    digitMatch: "5",
    digitClassName:
      "border border-solid border-[#bdff25] bg-[linear-gradient(180deg,rgba(143,216,17,1)_0%,rgba(225,255,117,1)_100%)]",
    digitTextClassName: "text-[#253602]",
    prize: "$50 000",
    prizeImage: "/figmaAssets/image-188-5.png",
    glowClassName:
      "left-3 bg-[#7bff00] absolute top-[-74px] w-[223px] h-[86px] rounded-[111.5px/43px] blur-[36.1px] opacity-80",
  },
  {
    digitMatch: "6",
    digitClassName:
      "bg-[linear-gradient(180deg,rgba(26,19,31,1)_0%,rgba(151,38,227,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-md before:[background:linear-gradient(180deg,rgba(175,63,255,0.2)_0%,rgba(189,138,255,0.2)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none",
    digitTextClassName: "text-white",
    prize: "Jackpot",
    prizeImage: "/figmaAssets/image-188-5.png",
    glowClassName:
      "left-[13px] bg-[#9000ff] absolute top-[-74px] w-[223px] h-[86px] rounded-[111.5px/43px] blur-[36.1px] opacity-80",
  },
];

export const LatestBitcoinBlockSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[351px] items-start gap-5 relative">
      <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full">
        <div className="flex items-start gap-4 relative self-stretch w-full">
          <img
            className="relative w-[57px] h-[65px] object-cover"
            alt="Bitcoin block demo"
            src="/figmaAssets/image-180.png"
          />

          <div className="flex flex-col items-start gap-2 relative flex-1">
            <h2 className="relative flex items-center justify-center self-stretch font-14-bold font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
              See how the game works
            </h2>

            <p className="relative flex items-center justify-center w-[214px] opacity-70 font-12-semibold font-[number:var(--12-semibold-font-weight)] text-white text-[length:var(--12-semibold-font-size)] tracking-[var(--12-semibold-letter-spacing)] leading-[var(--12-semibold-line-height)] [font-style:var(--12-semibold-font-style)]">
              No wallet. No risk. Just a demo.
              <br />
              This is an example draw using real Bitcoin block logic
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between relative self-stretch w-full">
          <div className="inline-flex items-center gap-1 relative">
            {digitBoxes.map((box, index) =>
              box.type === "digit" ? (
                <div
                  key={`digit-${index}`}
                  className={`flex flex-col w-8 h-8 items-center justify-center gap-2 px-[19px] py-[18px] relative rounded-lg overflow-hidden border border-solid ${box.className}`}
                >
                  <div
                    className={`relative flex items-center justify-center w-fit mt-[-13.00px] mb-[-11.00px] ml-[-8.50px] mr-[-8.50px] [font-family:'Montserrat',Helvetica] font-extrabold text-base tracking-[-0.16px] leading-[normal] ${box.textClassName}`}
                  >
                    {box.value}
                  </div>
                </div>
              ) : (
                <img
                  key={`frame-${index}`}
                  className="relative w-8 h-[35px] mb-[-3.00px]"
                  alt="Frame"
                  src={box.src}
                />
              ),
            )}
          </div>

          <Button className="inline-flex items-center justify-center gap-2 px-3 py-2.5 relative h-auto rounded-lg overflow-hidden border border-solid border-[#ff8961] bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] hover:opacity-90">
            <span className="font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] whitespace-nowrap font-14-bold [font-style:var(--14-bold-font-style)]">
              Randomize
            </span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[9px] relative self-stretch w-full">
        <h3 className="relative flex items-center justify-center self-stretch font-12-semibold font-[number:var(--12-semibold-font-weight)] text-[#a1b4c6] text-[length:var(--12-semibold-font-size)] tracking-[var(--12-semibold-letter-spacing)] leading-[var(--12-semibold-line-height)] [font-style:var(--12-semibold-font-style)]">
          Prizes if your digit match
        </h3>

        <div className="flex flex-col items-start justify-center gap-2 relative self-stretch w-full">
          <div className="flex items-center gap-2 relative self-stretch w-full">
            {prizeCards.slice(0, 2).map((card, index) => (
              <Card
                key={`prize-card-${index}`}
                className="flex flex-col items-center justify-center gap-2 px-[30px] py-3 relative flex-1 rounded-xl overflow-hidden border border-solid border-[#252f37] bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)]"
              >
                <CardContent className="p-0 flex flex-col items-center gap-2 w-full">
                  {card.glowClassName && <div className={card.glowClassName} />}

                  <div
                    className={`flex w-7 h-7 px-2.5 py-2 relative rounded-md border-[none] items-center justify-center gap-2 overflow-hidden ${card.digitClassName}`}
                  >
                    <div
                      className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-12-bold font-[number:var(--12-bold-font-weight)] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap [font-style:var(--12-bold-font-style)] ${card.digitTextClassName}`}
                    >
                      {card.digitMatch}
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center self-stretch font-13-body font-[number:var(--13-body-font-weight)] text-white text-[length:var(--13-body-font-size)] text-center tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                    Digit match
                  </div>

                  <div className="inline-flex items-center justify-center gap-[9px] relative">
                    <img
                      className={`relative ${index === 0 ? "ml-[-4.25px] w-[29px]" : "w-7"} h-[30px] object-cover`}
                      alt="Prize icon"
                      src={card.prizeImage}
                    />

                    <div
                      className={`inline-flex flex-col items-start gap-0.5 relative ${index === 0 ? "w-[82px] mr-[-4.25px]" : ""}`}
                    >
                      <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-10-bold font-[number:var(--10-bold-font-weight)] text-[#525c68] text-[length:var(--10-bold-font-size)] tracking-[var(--10-bold-letter-spacing)] leading-[var(--10-bold-line-height)] [font-style:var(--10-bold-font-style)]">
                        Prize
                      </div>

                      <div className="relative flex items-center justify-center self-stretch font-14-bold font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                        {card.prize}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex items-center gap-2 relative self-stretch w-full">
            {prizeCards.slice(2, 4).map((card, index) => (
              <Card
                key={`prize-card-${index + 2}`}
                className="flex flex-col items-center justify-center gap-2 px-[30px] py-3 relative flex-1 rounded-xl overflow-hidden border border-solid border-[#252f37] bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)]"
              >
                <CardContent className="p-0 flex flex-col items-center gap-2 w-full">
                  {card.glowClassName && <div className={card.glowClassName} />}

                  <div
                    className={`flex w-7 h-7 px-2.5 py-2 relative rounded-md items-center justify-center gap-2 overflow-hidden ${card.digitClassName}`}
                  >
                    <div
                      className={`${index === 0 ? "mt-[-1.00px] ml-[-0.50px] mr-[-0.50px]" : "mt-[-1.00px]"} font-[number:var(--12-bold-font-weight)] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap relative flex items-center justify-center w-fit font-12-bold [font-style:var(--12-bold-font-style)] ${card.digitTextClassName}`}
                    >
                      {card.digitMatch}
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center self-stretch font-13-body font-[number:var(--13-body-font-weight)] text-white text-[length:var(--13-body-font-size)] text-center tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                    Digit match
                  </div>

                  <div className="inline-flex items-center justify-center gap-[9px] relative">
                    <img
                      className={`relative object-cover ${index === 1 ? "w-[29px]" : "w-7"} h-[30px]`}
                      alt="Prize icon"
                      src={card.prizeImage}
                    />

                    <div className="inline-flex flex-col items-start gap-0.5 relative">
                      <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-10-bold font-[number:var(--10-bold-font-weight)] text-[#525c68] text-[length:var(--10-bold-font-size)] tracking-[var(--10-bold-letter-spacing)] leading-[var(--10-bold-line-height)] [font-style:var(--10-bold-font-style)]">
                        Prize
                      </div>

                      <div className="relative flex items-center justify-center self-stretch font-14-bold font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                        {card.prize}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="flex flex-col items-center justify-center gap-2 px-[30px] py-3 relative self-stretch w-full rounded-xl overflow-hidden border border-solid border-[#252f37] bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)]">
            <CardContent className="p-0 flex flex-col items-center gap-2 w-full">
              <div className={prizeCards[4].glowClassName} />

              <div
                className={`flex w-7 h-7 px-2.5 py-2 relative rounded-md border-[none] items-center justify-center gap-2 overflow-hidden ${prizeCards[4].digitClassName}`}
              >
                <div
                  className={`relative flex items-center justify-center w-fit mt-[-1.00px] font-12-bold font-[number:var(--12-bold-font-weight)] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] whitespace-nowrap [font-style:var(--12-bold-font-style)] ${prizeCards[4].digitTextClassName}`}
                >
                  {prizeCards[4].digitMatch}
                </div>
              </div>

              <div className="relative flex items-center justify-center self-stretch font-13-body font-[number:var(--13-body-font-weight)] text-white text-[length:var(--13-body-font-size)] text-center tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                Digit match
              </div>

              <div className="inline-flex items-center justify-center gap-[9px] relative">
                <img
                  className="relative w-7 h-[30px] object-cover"
                  alt="Prize icon"
                  src={prizeCards[4].prizeImage}
                />

                <div className="inline-flex flex-col items-start gap-0.5 relative">
                  <div className="relative flex items-center justify-center self-stretch mt-[-1.00px] font-10-bold font-[number:var(--10-bold-font-weight)] text-[#525c68] text-[length:var(--10-bold-font-size)] tracking-[var(--10-bold-letter-spacing)] leading-[var(--10-bold-line-height)] [font-style:var(--10-bold-font-style)]">
                    Prize
                  </div>

                  <div className="relative flex items-center justify-center self-stretch font-14-bold font-[number:var(--14-bold-font-weight)] text-white text-[length:var(--14-bold-font-size)] tracking-[var(--14-bold-letter-spacing)] leading-[var(--14-bold-line-height)] [font-style:var(--14-bold-font-style)]">
                    {prizeCards[4].prize}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
