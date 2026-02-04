import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const digitBoxes = [
  {
    type: "digit",
    value: "0",
    className: "bg-[#303b46] border-[#525c68] shadow-[0_4px_0_#33383d]",
    textClassName: "text-white",
  },
  {
    type: "digit",
    value: "0",
    className:
      "border-[#ff8961] shadow-[0_4px_0_#c2502a] bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)]",
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
    digitClassName: "bg-slate-700",
    digitTextClassName: "text-white",
    prize: "Free ticket",
    prizeImage: "/figmaAssets/image-188-1.png",
  },
  {
    digitMatch: "3",
    digitClassName: "bg-orange-600",
    digitTextClassName: "text-[#fff0c3]",
    prize: "$300",
    prizeImage: "/figmaAssets/image-188-5.png",
  },
  {
    digitMatch: "4",
    digitClassName: "bg-red-600",
    digitTextClassName: "text-white",
    prize: "$3 000",
    prizeImage: "/figmaAssets/image-188-5.png",
  },
  {
    digitMatch: "5",
    digitClassName: "bg-lime-500",
    digitTextClassName: "text-black",
    prize: "$50 000",
    prizeImage: "/figmaAssets/image-188-5.png",
  },
  {
    digitMatch: "6",
    digitClassName: "bg-purple-600",
    digitTextClassName: "text-white",
    prize: "Jackpot",
    prizeImage: "/figmaAssets/image-188-5.png",
  },
];

export const LatestBitcoinBlockSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full gap-8 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 object-contain"
            alt="Bitcoin block"
            src="/figmaAssets/image-180.png"
          />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-white">See how the game works</h2>
            <p className="text-sm text-white/60 leading-relaxed">
              No wallet. No risk. Just a demo.<br className="hidden sm:block" />
              Example draw using real Bitcoin block logic.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-1.5">
            {digitBoxes.map((box, index) =>
              box.type === "digit" ? (
                <div
                  key={index}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg border ${box.className}`}
                >
                  <span className={`text-xl font-black ${box.textClassName}`}>{box.value}</span>
                </div>
              ) : (
                <img
                  key={index}
                  className="w-8 h-8 object-contain"
                  alt="Divider"
                  src={box.src}
                />
              )
            )}
          </div>
          <Button className="w-full sm:w-auto px-6 h-11 rounded-xl bg-orange-600 hover:bg-orange-500 font-bold shadow-lg shadow-orange-900/20">
            Randomize
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-[#a1b4c6] font-bold text-sm uppercase tracking-widest px-2">
          Prizes if your digit match
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {prizeCards.map((card, index) => (
            <Card
              key={index}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-white/10 bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)] hover:border-orange-500/50 transition-all"
            >
              <CardContent className="p-0 flex flex-col items-center gap-4 w-full">
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl font-black shadow-lg ${card.digitClassName} ${card.digitTextClassName}`}>
                  {card.digitMatch}
                </div>

                <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] text-white/40 uppercase font-black">MATCH</span>
                  <span className="text-xs text-white/80 font-bold">Digit match</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/40 w-full justify-center">
                  <img src={card.prizeImage} className="w-6 h-6 object-contain" alt="Prize" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[8px] text-white/40 font-bold uppercase">PRIZE</span>
                    <span className="text-sm font-black text-white">{card.prize}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
