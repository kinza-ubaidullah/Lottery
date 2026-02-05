import React from 'react';
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const winsData = [
  {
    user: "0xA9f",
    date: "2 min ago",
    ticketAmount: "2 tickets",
    ticketPrice: "569 USD",
    numbers: ["5", "3", "8", "9", "K", "J"],
    winningNumbers: ["5", "3", "8", "9", "K", "J"],
    profit: "+ 569 USD",
    avatar: "/figmaAssets/img6.png"
  },
];

export const PreviousWinsListSection: React.FC = () => {
  const tabs = ["Best drops", "Highest wins", "My bets"];
  const [activeTab, setActiveTab] = React.useState("Best drops");

  // Grid layout for maximum separation
  const gridLayout = "grid grid-cols-[1.2fr_1fr_1.2fr_1.2fr_2fr_2fr_1fr]";

  return (
    <section className="w-full py-12 flex flex-col items-center">
      {/* Centered Header with Neon Glow Icon */}
      <div className="flex items-center gap-3 mb-10 group cursor-default">
        <div className="relative">
          <div className="absolute inset-0 bg-[#BDFF25] blur-[15px] opacity-40 rounded-full group-hover:opacity-60 transition-opacity" />
          <img
            src="/figmaAssets/champion.png"
            className="w-8 h-8 md:w-9 md:h-9 object-contain relative z-10"
            alt="Trophy"
          />
        </div>
        <h2 className="text-2xl md:text-[32px] font-black text-white font-['Montserrat'] tracking-tight">
          Previous wins
        </h2>
      </div>

      {/* Centered Tabs with Mobile Styling */}
      <div className="flex items-center justify-center w-full mb-12">
        <div className="flex bg-[#0D1115]/80 backdrop-blur-md rounded-[20px] p-1 border border-white/5 relative">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "relative px-8 md:px-12 py-3.5 rounded-[18px] text-[13px] font-black transition-all duration-500 uppercase tracking-widest font-['Montserrat'] overflow-hidden",
                  isActive
                    ? "text-[#BDFF25] z-10"
                    : "text-[#525D68] hover:text-white"
                )}
              >
                {isActive && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#BDFF25]/20 to-transparent pointer-events-none" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-[#BDFF25] shadow-[0_0_15px_#BDFF25] pointer-events-none" />
                  </>
                )}
                {tab === "Highest wins" ? "HIshest wins" : tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* Table Feed */}
      <div className="w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[1440px] w-full">
          {/* Table Header */}
          <div className={cn(gridLayout, "px-6 py-4 mb-2")}>
            <span className="text-[10px] font-black text-[#525D68] uppercase tracking-widest font-['Montserrat']">User</span>
            <span className="text-[10px] font-black text-[#525D68] uppercase tracking-widest font-['Montserrat']">Date</span>
            <span className="text-[10px] font-black text-[#525D68] uppercase tracking-widest font-['Montserrat']">Ticket amount</span>
            <span className="text-[10px] font-black text-[#525D68] uppercase tracking-widest font-['Montserrat']">Ticket price</span>
            <span className="text-[10px] font-black text-[#525D68] uppercase tracking-widest font-['Montserrat']">Numbers</span>
            <span className="text-[10px] font-black text-[#525D68] uppercase tracking-widest font-['Montserrat']">Winning numbers</span>
            <span className="text-[10px] font-black text-[#525D68] uppercase tracking-widest font-['Montserrat'] text-right">Profit</span>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  gridLayout,
                  "items-center px-6 py-5 transition-colors",
                  idx % 2 === 0 ? "bg-[#12171D]/40" : "bg-transparent"
                )}
              >
                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/5 bg-[#1F262E]">
                    <img src="/figmaAssets/img6.png" className="w-full h-full object-cover" alt="User" />
                  </div>
                  <span className="text-white font-black text-[14px] font-['Montserrat']">0xA9f</span>
                </div>

                {/* Date */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#525D68]/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#525D68]" />
                  </div>
                  <span className="text-[#525D68] text-[13px] font-bold font-['Outfit']">2 min ago</span>
                </div>

                {/* Ticket Amount */}
                <div className="flex items-center gap-2">
                  <img src="/figmaAssets/image-194-1.png" className="w-5 h-4 object-contain" alt="Ticket" />
                  <span className="text-white font-black text-[13px] font-['Montserrat']">2 tickets</span>
                </div>

                {/* Ticket Price */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#E36826]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#E36826]" />
                  </div>
                  <span className="text-white font-black text-[13px] font-['Montserrat']">569 USD</span>
                </div>

                {/* Numbers */}
                <div className="flex justify-start gap-1.5 pr-20">
                  {["5", "3", "8", "9", "K", "J"].map((n, i) => (
                    <div key={i} className="w-[28px] h-9 bg-[#E36826] rounded-md flex items-center justify-center shadow-[0_2px_0_#A83200]">
                      <span className="text-[#12171D] font-black text-[12px] font-['Montserrat']">{n}</span>
                    </div>
                  ))}
                </div>

                {/* Winning Numbers */}
                <div className="flex justify-start gap-1.5">
                  {["5", "3", "8", "9", "K", "J"].map((n, i) => (
                    <div key={i} className="w-[28px] h-9 bg-[#E36826] rounded-md flex items-center justify-center shadow-[0_2px_0_#A83200]">
                      <span className="text-[#12171D] font-black text-[12px] font-['Montserrat']">{n}</span>
                    </div>
                  ))}
                </div>

                {/* Profit */}
                <div className="flex items-center justify-end gap-2">
                  <div className="w-4 h-4 rounded-full bg-[#BDFF25]/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#BDFF25]" />
                  </div>
                  <span className="text-[#BDFF25] font-black text-[15px] font-['Montserrat'] italic leading-none">+ 569 USD</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Show more button */}
      <button className="self-center mt-10 px-10 h-14 rounded-2xl border border-white/5 text-[#525D68] font-black text-sm uppercase tracking-widest font-['Montserrat'] hover:bg-white/5 transition-all">
        Show more results
      </button>
    </section>
  );
};
