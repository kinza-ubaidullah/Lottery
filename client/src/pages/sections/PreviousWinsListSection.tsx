import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const winsData = [
  {
    user: "0xA9f",
    ticketPrice: "569 USD",
    profit: "+ 569 USD",
    bgClass: "bg-[#10161a]",
  },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", bgClass: "" },
  {
    user: "0xA9f",
    ticketPrice: "569 USD",
    profit: "+ 569 USD",
    bgClass: "bg-[#10161a]",
  },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", bgClass: "" },
  {
    user: "0xA9f",
    ticketPrice: "569 USD",
    profit: "+ 569 USD",
    bgClass: "bg-[#10161a]",
  },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", bgClass: "" },
  {
    user: "0xA9f",
    ticketPrice: "569 USD",
    profit: "+ 569 USD",
    bgClass: "bg-[#10161a]",
  },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", bgClass: "" },
  {
    user: "0xA9f",
    ticketPrice: "569 USD",
    profit: "+ 569 USD",
    bgClass: "bg-[#10161a]",
  },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", bgClass: "" },
];

export const PreviousWinsListSection = (): JSX.Element => {
  return (
    <section className="w-full py-8">
      <div className="flex items-center gap-3 mb-8 px-2 justify-center lg:justify-start">
        <div className="p-2 rounded-xl bg-orange-500/10 border border-orange-500/20">
          <img
            className="w-8 h-8 md:w-10 md:h-10"
            alt="Champion"
            src="/figmaAssets/champion.svg"
          />
        </div>
        <h2 className="text-xl md:text-2xl font-black text-white tracking-tight uppercase">
          Previous wins
        </h2>
      </div>

      <Tabs defaultValue="best-drops" className="w-full">
        <TabsList className="w-full bg-white/5 p-1 rounded-2xl mb-8 border border-white/10 h-14">
          <TabsTrigger
            value="best-drops"
            className="flex-1 rounded-xl data-[state=active]:bg-orange-600 data-[state=active]:text-white text-[#a1b4c6] font-bold transition-all h-full"
          >
            Best drops
          </TabsTrigger>
          <TabsTrigger
            value="highest-wins"
            className="flex-1 rounded-xl data-[state=active]:bg-orange-600 data-[state=active]:text-white text-[#a1b4c6] font-bold transition-all h-full"
          >
            Highest wins
          </TabsTrigger>
          <TabsTrigger
            value="my-bets"
            className="flex-1 rounded-xl data-[state=active]:bg-orange-600 data-[state=active]:text-white text-[#a1b4c6] font-bold transition-all h-full"
          >
            My bets
          </TabsTrigger>
        </TabsList>

        <TabsContent value="best-drops" className="mt-0">
          <Card className="bg-[#0d1115] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                <div className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest">User</div>
                <div className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest text-center">Ticket price</div>
                <div className="text-[10px] md:text-xs font-black text-white/40 uppercase tracking-widest text-right">Profit</div>
              </div>

              <div className="flex flex-col">
                {winsData.map((win, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-4 items-center px-6 py-4 transition-colors hover:bg-white/[0.03] ${index % 2 === 0 ? "bg-white/[0.01]" : ""}`}
                  >
                    <div className="flex items-center gap-3">
                      <Avatar className="w-8 h-8 rounded-xl border border-white/10">
                        <AvatarFallback className="rounded-xl bg-slate-800 text-[10px] font-bold text-white/60">
                          {win.user.slice(2, 4)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-bold text-[#a1b4c6] font-mono">
                        {win.user}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                      <img className="w-4 h-4" alt="Coins" src="/figmaAssets/coins-02.svg" />
                      <span className="text-sm font-bold text-[#a1b4c6]">
                        {win.ticketPrice}
                      </span>
                    </div>

                    <div className="flex items-center justify-end gap-2">
                      <img className="w-4 h-4" alt="Coins" src="/figmaAssets/coins-02.svg" />
                      <span className="text-sm font-black text-green-400">
                        {win.profit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {/* Same content for other tabs for demo */}
        <TabsContent value="highest-wins" className="mt-0">
          <Card className="bg-[#0d1115] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="p-20 text-center text-white/40 font-bold uppercase tracking-widest">Highest wins ranking</div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="my-bets" className="mt-0">
          <Card className="bg-[#0d1115] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="p-20 text-center text-white/40 font-bold uppercase tracking-widest">Your betting history</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};
