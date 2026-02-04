import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const decorativeCoins = [
  {
    className: "absolute top-[10%] right-[10%] w-[30%] max-w-[170px] aspect-square",
    src: "/figmaAssets/image-189.png",
    alt: "Large coin decoration",
  },
  {
    className: "absolute top-[40%] right-[20%] w-[8%] max-w-[31px] aspect-square animate-bounce",
    src: "/figmaAssets/image-193-1.png",
    alt: "Small coin decoration",
  },
];

const timerDigits = [
  { value: "09", label: "HOURS" },
  { value: "23", label: "MINS" },
];

export const LotteryPlaySection = (): JSX.Element => {
  return (
    <Card className="relative w-full min-h-[220px] rounded-2xl overflow-hidden border-none bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)] shadow-2xl group">
      <CardContent className="relative w-full h-full p-6 flex flex-col justify-between">
        {/* Glow Background */}
        <div className="absolute -right-20 -bottom-20 w-[300px] h-[300px] rounded-full blur-[100px] bg-orange-600/30 pointer-events-none" />

        {/* Decorative Coins */}
        {decorativeCoins.map((coin, index) => (
          <img
            key={`coin-${index}`}
            className={`${coin.className} object-contain transition-transform group-hover:scale-110 duration-500`}
            alt={coin.alt}
            src={coin.src}
          />
        ))}

        <div className="flex flex-col gap-4 relative z-10">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <Badge className="w-fit flex items-center gap-2 pl-1 pr-3 py-1 rounded-lg bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] border-none shadow-lg">
                <img
                  className="w-5 h-5 object-contain"
                  alt="Bitcoin"
                  src="/figmaAssets/bitcoin-3-1.png"
                />
                <span className="font-bold text-white text-sm md:text-base">
                  BITCOIN
                </span>
              </Badge>
              <h2 className="text-3xl md:text-4xl font-900 bg-[linear-gradient(90deg,rgba(255,190,168,1)_0%,rgba(255,255,255,1)_100%)] bg-clip-text text-transparent italic">
                LOTTERY
              </h2>
            </div>

            <div className="hidden sm:flex flex-col items-end">
              <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/10">
                <span className="text-xs text-white/60">Tickets</span>
                <span className="text-orange-400 font-bold">$5</span>
                <span className="text-[10px] text-white/40">only</span>
              </div>
            </div>
          </div>

          <p className="text-[#a1b4c6] text-sm md:text-base font-medium">
            Guess 6 Numbers. Match & Win
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 mt-4 relative z-10">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold text-[#a1b4c6] uppercase tracking-wider">
              Next draw in
            </span>
            <div className="flex gap-2">
              {timerDigits.map((digit, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <div className="w-12 h-10 bg-[#12171d] rounded-lg border border-[#525c68] flex items-center justify-center shadow-[0_4px_0_#000] group-hover:shadow-[0_2px_0_#000] group-hover:translate-y-[2px] transition-all">
                    <span className="text-white font-bold text-lg">{digit.value}</span>
                  </div>
                  <span className="text-[10px] text-white/40 font-bold uppercase">{digit.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 flex-1 sm:flex-initial">
            <Button className="flex-1 sm:flex-none h-11 px-6 rounded-xl bg-[linear-gradient(180deg,rgba(255,75,15,1)_0%,rgba(255,111,63,1)_100%)] hover:scale-105 active:scale-95 transition-all text-white font-bold shadow-lg shadow-orange-900/20">
              Play now
            </Button>
            <Button variant="outline" className="flex-1 sm:flex-none h-11 px-6 rounded-xl border-white/10 bg-white/5 hover:bg-white/10 transition-all text-[#fff0c3] font-bold">
              Verify
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
