import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const winsData = [
  {
    user: "0xA9f",
    ticketPrice: "569 USD",
    profit: "+ 569 USD",
    avatar: "/figmaAssets/frame-340-9.png"
  },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
  { user: "0xA9f", ticketPrice: "569 USD", profit: "+ 569 USD", avatar: "/figmaAssets/frame-340-9.png" },
];

export const PreviousWinsListSection = (): JSX.Element => {
  return (
    <section className="w-full py-12">
      {/* Header Section - Reduced Boldness */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-4 px-2">
        <div className="flex items-center gap-4 md:gap-6 justify-center w-full">
          <div className="relative shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#BDFF25]/10 blur-xl rounded-full scale-110" />
            <img
              className="w-10 h-10 md:w-12 md:h-12 relative z-10 drop-shadow-[0_0_8px_rgba(189,255,37,0.4)]"
              alt="Champion"
              src="/figmaAssets/champion.svg"
            />
          </div>
          <h2 className="text-[28px] md:text-[40px] font-bold md:font-[900] text-white tracking-tight font-['Montserrat'] leading-none flex items-center uppercase">
            Previous wins
          </h2>
        </div>
      </div>

      <Tabs defaultValue="best-drops" className="w-full">
        <div className="border-b border-white/5 mb-6 overflow-x-auto scrollbar-hide">
          <TabsList className="bg-transparent h-12 md:h-16 p-0 justify-start gap-4 md:gap-8 rounded-none w-full md:w-auto">
            <TabsTrigger
              value="best-drops"
              className="relative flex items-center justify-center min-w-[117px] h-[36px] md:min-w-[160px] md:h-[50px] px-8 py-2.5 gap-3 data-[state=active]:bg-transparent data-[state=active]:bg-[linear-gradient(180deg,rgba(175,231,56,0)_0%,rgba(149,209,23,0.4)_100%)] data-[state=active]:text-white text-[#525D68] font-['Outfit'] font-semibold md:font-bold text-base md:text-xl transition-all border-none overflow-visible rounded-none"
            >
              <span>Best drops</span>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#BDFF25] opacity-0 data-[state=active]:opacity-100 transition-opacity z-10" />
            </TabsTrigger>

            <TabsTrigger
              value="highest-wins"
              className="relative flex items-center justify-center min-w-[117px] h-[36px] md:min-w-[160px] md:h-[50px] px-8 py-2.5 gap-3 data-[state=active]:bg-transparent data-[state=active]:bg-[linear-gradient(180deg,rgba(175,231,56,0)_0%,rgba(149,209,23,0.4)_100%)] data-[state=active]:text-white text-[#525D68] font-['Outfit'] font-semibold md:font-bold text-base md:text-xl transition-all border-none rounded-none"
            >
              Highest wins
            </TabsTrigger>

            <TabsTrigger
              value="my-bets"
              className="relative flex items-center justify-center min-w-[117px] h-[36px] md:min-w-[160px] md:h-[50px] px-8 py-2.5 gap-3 data-[state=active]:bg-transparent data-[state=active]:bg-[linear-gradient(180deg,rgba(175,231,56,0)_0%,rgba(149,209,23,0.4)_100%)] data-[state=active]:text-white text-[#525D68] font-['Outfit'] font-semibold md:font-bold text-base md:text-xl transition-all border-none rounded-none"
            >
              My bets
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="w-full relative">
          <Card className="bg-[#0D1115] border-none rounded-[32px] overflow-hidden relative">
            <CardContent className="p-0">
              <div className="grid grid-cols-3 gap-2 px-3 py-5 md:px-10 md:py-6 mx-2 md:mx-6">
                <div className="text-[10px] md:text-sm font-semibold md:font-bold text-[#525D68] font-['Outfit'] flex justify-start uppercase tracking-widest opacity-60">User</div>
                <div className="text-[10px] md:text-sm font-semibold md:font-bold text-[#525D68] font-['Outfit'] flex justify-center uppercase tracking-widest opacity-60">Ticket price</div>
                <div className="text-[10px] md:text-sm font-semibold md:font-bold text-[#525D68] font-['Outfit'] flex justify-end uppercase tracking-widest opacity-60">Profit</div>
              </div>

              <div className="flex flex-col gap-2 pb-4 pt-1">
                {winsData.map((win, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 gap-2 items-center px-3 py-3 md:px-10 md:py-4 rounded-[16px] md:rounded-[20px] mb-1 mx-2 md:mx-6 ${index === 0
                      ? "bg-[#11161B]"
                      : index % 2 !== 0
                        ? "bg-transparent"
                        : "bg-[#11161B]/50"
                      }`}
                  >
                    <div className="flex items-center gap-2 md:gap-4 justify-start overflow-hidden">
                      <Avatar className="w-7 h-7 md:w-12 md:h-12 rounded-full shrink-0">
                        <AvatarImage src={win.avatar} alt="User" />
                        <AvatarFallback className="bg-transparent text-[#BDFF25]">U</AvatarFallback>
                      </Avatar>
                      <span className="text-sm md:text-xl font-semibold md:font-bold text-[#a1b4c6] font-['Outfit'] truncate leading-none">
                        {win.user}
                      </span>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 md:gap-2">
                      <div className="relative w-[10px] h-[10px] md:w-[14px] md:h-[14px] shrink-0">
                        <div
                          className="absolute rounded-full bg-[#FF8962]"
                          style={{ width: '4.5px', height: '4.5px', top: '3.5px', left: '0.4px', opacity: 0.4 }}
                        />
                        <div
                          className="absolute rounded-full bg-[#FF8962]"
                          style={{ width: '6.5px', height: '6.5px', top: '0.4px', left: '1.8px', opacity: 1 }}
                        />
                      </div>
                      <span className="text-sm md:text-xl font-semibold md:font-bold text-[#a1b4c6] font-['Outfit'] whitespace-nowrap leading-none">
                        {win.ticketPrice}
                      </span>
                    </div>

                    <div className="flex items-center justify-end gap-1.5 md:gap-2">
                      <div className="relative w-[10px] h-[10px] md:w-[14px] md:h-[14px] shrink-0">
                        <div
                          className="absolute rounded-full bg-[#BEFF25]"
                          style={{ width: '4.5px', height: '4.5px', top: '3.5px', left: '0.4px', opacity: 0.4 }}
                        />
                        <div
                          className="absolute rounded-full bg-[#BEFF25]"
                          style={{ width: '6.5px', height: '6.5px', top: '0.4px', left: '1.8px', opacity: 1 }}
                        />
                      </div>
                      <span className="text-sm md:text-xl font-semibold md:font-bold text-white font-['Outfit'] whitespace-nowrap leading-none">
                        {win.profit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Tabs>
    </section>
  );
};
