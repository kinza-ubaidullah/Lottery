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
    <section className="w-full px-3 py-8">
      <div className="flex items-center justify-center gap-2 mb-6">
        <img
          className="w-10 h-10"
          alt="Champion"
          src="/figmaAssets/champion.svg"
        />
        <h2 className="[font-family:'Montserrat',Helvetica] font-extrabold text-white text-base tracking-[-0.16px] leading-normal">
          Previous wins
        </h2>
      </div>

      <Tabs defaultValue="best-drops" className="w-full">
        <TabsList className="w-full h-auto p-0 bg-transparent grid grid-cols-3 mb-4">
          <TabsTrigger
            value="best-drops"
            className="relative overflow-hidden bg-[linear-gradient(180deg,rgba(175,231,56,0)_0%,rgba(149,209,23,0.19)_100%)] data-[state=active]:bg-[linear-gradient(180deg,rgba(175,231,56,0)_0%,rgba(149,209,23,0.19)_100%)] data-[state=inactive]:bg-transparent px-8 py-2.5 rounded-none border-0 font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)] data-[state=active]:text-white data-[state=inactive]:text-[#a1b4c6]"
          >
            <span className="absolute top-[calc(50%+17px)] left-[calc(50%-64px)] w-[127px] h-8 bg-[#bdff25] rounded-[63.5px/16px] blur-[11.4px] opacity-0 data-[state=active]:opacity-100" />
            <span className="relative z-10">Best drops</span>
          </TabsTrigger>
          <TabsTrigger
            value="highest-wins"
            className="px-8 py-2.5 rounded-none border-0 font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)] data-[state=active]:text-white data-[state=inactive]:text-[#a1b4c6] bg-transparent data-[state=active]:bg-transparent"
          >
            Hishest wins
          </TabsTrigger>
          <TabsTrigger
            value="my-bets"
            className="px-8 py-2.5 rounded-none border-0 font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)] data-[state=active]:text-white data-[state=inactive]:text-[#a1b4c6] bg-transparent data-[state=active]:bg-transparent"
          >
            My bets
          </TabsTrigger>
        </TabsList>

        <TabsContent value="best-drops" className="mt-0">
          <Card className="bg-[#0d1115] border-0 rounded-[10px]">
            <CardContent className="p-2 pt-3 pb-2">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-2 px-2 h-3">
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  User
                </div>
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  Ticket price
                </div>
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  Profit
                </div>
              </div>

              <div className="flex flex-col">
                {winsData.map((win, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center h-[42px] px-2 rounded-[10px] ${win.bgClass}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Avatar className="w-6 h-6 rounded-lg">
                        <AvatarImage src="/figmaAssets/frame-340-9.png" />
                        <AvatarFallback className="rounded-lg bg-gray-700">
                          {win.user.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#a1b4c6] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
                        {win.user}
                      </span>
                    </div>

                    <div className="flex items-center gap-[7px]">
                      <img
                        className="w-3 h-3"
                        alt="Coins"
                        src="/figmaAssets/coins-02.svg"
                      />
                      <span className="font-13-body font-[number:var(--13-body-font-weight)] text-[#a1b4c6] text-[length:var(--13-body-font-size)] tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                        {win.ticketPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-[7px]">
                      <img
                        className="w-3 h-3"
                        alt="Coins"
                        src="/figmaAssets/coins-02.svg"
                      />
                      <span className="font-13-body font-[number:var(--13-body-font-weight)] text-white text-[length:var(--13-body-font-size)] tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                        {win.profit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="highest-wins" className="mt-0">
          <Card className="bg-[#0d1115] border-0 rounded-[10px]">
            <CardContent className="p-2 pt-3 pb-2">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-2 px-2 h-3">
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  User
                </div>
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  Ticket price
                </div>
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  Profit
                </div>
              </div>

              <div className="flex flex-col">
                {winsData.map((win, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center h-[42px] px-2 rounded-[10px] ${win.bgClass}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Avatar className="w-6 h-6 rounded-lg">
                        <AvatarImage src="/figmaAssets/frame-340-9.png" />
                        <AvatarFallback className="rounded-lg bg-gray-700">
                          {win.user.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#a1b4c6] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
                        {win.user}
                      </span>
                    </div>

                    <div className="flex items-center gap-[7px]">
                      <img
                        className="w-3 h-3"
                        alt="Coins"
                        src="/figmaAssets/coins-02.svg"
                      />
                      <span className="font-13-body font-[number:var(--13-body-font-weight)] text-[#a1b4c6] text-[length:var(--13-body-font-size)] tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                        {win.ticketPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-[7px]">
                      <img
                        className="w-3 h-3"
                        alt="Coins"
                        src="/figmaAssets/coins-02.svg"
                      />
                      <span className="font-13-body font-[number:var(--13-body-font-weight)] text-white text-[length:var(--13-body-font-size)] tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                        {win.profit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="my-bets" className="mt-0">
          <Card className="bg-[#0d1115] border-0 rounded-[10px]">
            <CardContent className="p-2 pt-3 pb-2">
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-2 px-2 h-3">
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  User
                </div>
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  Ticket price
                </div>
                <div className="font-12-bold font-[number:var(--12-bold-font-weight)] text-[#8388aa] text-[length:var(--12-bold-font-size)] tracking-[var(--12-bold-letter-spacing)] leading-[var(--12-bold-line-height)] [font-style:var(--12-bold-font-style)]">
                  Profit
                </div>
              </div>

              <div className="flex flex-col">
                {winsData.map((win, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-[1fr_auto_auto] gap-4 items-center h-[42px] px-2 rounded-[10px] ${win.bgClass}`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Avatar className="w-6 h-6 rounded-lg">
                        <AvatarImage src="/figmaAssets/frame-340-9.png" />
                        <AvatarFallback className="rounded-lg bg-gray-700">
                          {win.user.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-14-semibold font-[number:var(--14-semibold-font-weight)] text-[#a1b4c6] text-[length:var(--14-semibold-font-size)] tracking-[var(--14-semibold-letter-spacing)] leading-[var(--14-semibold-line-height)] [font-style:var(--14-semibold-font-style)]">
                        {win.user}
                      </span>
                    </div>

                    <div className="flex items-center gap-[7px]">
                      <img
                        className="w-3 h-3"
                        alt="Coins"
                        src="/figmaAssets/coins-02.svg"
                      />
                      <span className="font-13-body font-[number:var(--13-body-font-weight)] text-[#a1b4c6] text-[length:var(--13-body-font-size)] tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                        {win.ticketPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-[7px]">
                      <img
                        className="w-3 h-3"
                        alt="Coins"
                        src="/figmaAssets/coins-02.svg"
                      />
                      <span className="font-13-body font-[number:var(--13-body-font-weight)] text-white text-[length:var(--13-body-font-size)] tracking-[var(--13-body-letter-spacing)] leading-[var(--13-body-line-height)] [font-style:var(--13-body-font-style)]">
                        {win.profit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};
