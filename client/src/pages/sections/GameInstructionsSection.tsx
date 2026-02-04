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

export const GameInstructionsSection = (): JSX.Element => {
  return (
    <Card className="relative w-full rounded-2xl overflow-hidden border-none bg-[linear-gradient(180deg,rgba(19,25,31,1)_0%,rgba(31,38,46,1)_100%)] shadow-xl p-6">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#bdff25]/10 rounded-full blur-[40px] pointer-events-none" />

      <CardContent className="p-0 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-black text-[#a1b4c6] uppercase tracking-widest">
              LATEST BITCOIN BLOCK
            </span>
            <Badge variant="outline" className="bg-white/5 border-white/10 text-white font-mono text-xs md:text-sm px-2 py-0.5 rounded-md">
              #4390J3
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              {winningDigits.map((digit, index) => (
                <div
                  key={index}
                  className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-lg bg-[linear-gradient(180deg,rgba(31,24,19,1)_0%,rgba(227,104,38,1)_100%)] border border-orange-500/30 shadow-lg shadow-orange-950/20"
                >
                  <span className="text-[#fff0c3] text-sm md:text-base font-black">
                    {digit.value}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[10px] font-black text-orange-400 uppercase tracking-widest">RESULT</span>
              <span className="text-xs md:text-sm font-bold text-[#a1b4c6] whitespace-nowrap">Winning digits</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl border border-white/5">
          <img src="/figmaAssets/image-193-1.png" className="w-8 h-8 object-contain" alt="Info" />
          <p className="text-xs text-white/60 leading-relaxed max-w-[200px]">
            Winning numbers are derived from the last 6 characters of the latest Bitcoin block hash.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
