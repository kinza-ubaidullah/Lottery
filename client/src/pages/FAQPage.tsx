import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";
import { Ticket, Clock, Paperclip, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { BackButton } from "@/components/ui/BackButton";

export const FAQPage = (): JSX.Element => {
    const isMobile = useIsMobile();
    const [, setLocation] = useLocation();

    return (
        <div className="w-full flex flex-col items-center">
            {/* Back Button */}
            <div className="w-full px-4 md:px-10 pt-6 flex justify-start">
                <BackButton label="Back to Dashboard" href="/dashboard" />
            </div>

            <main className={isMobile ? "w-full flex flex-col items-center gap-12 py-8" : "w-full flex-1 flex flex-col gap-12 px-4 md:px-10 overflow-visible"}>

                {/* Top Ticket Header (Replica of provided design) */}
                <div className="flex flex-col gap-6 w-full mt-4">
                    <div className="flex flex-col gap-5 w-full">
                        <Card className="bg-[#0D1115] border border-white/5 rounded-[12px] p-4 md:p-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 transition-colors w-full overflow-visible">
                            <div className="flex flex-col gap-4 flex-1">
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#141A20] px-3 py-1 border border-white/5 rounded-[6px]">
                                        <span className="text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase tracking-wider">ID: <span className="text-white opacity-80">443905</span></span>
                                    </div>
                                    <div className="bg-[#141A20] px-3 py-1 border border-white/5 rounded-[6px]">
                                        <span className="text-[#525D68] text-[12px] font-bold font-['Montserrat'] uppercase tracking-wider">Priority: <span className="text-white opacity-80">High</span></span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1">
                                    <h3 className="text-[#BDFF25] text-[16px] sm:text-[18px] md:text-[20px] font-black font-['Montserrat'] leading-tight uppercase tracking-tight">
                                        Lottery prize not credited after draw
                                    </h3>
                                    <p className="text-[#4A5561] text-[13px] sm:text-[14px] font-medium font-['Montserrat'] line-clamp-1">
                                        Hello, I participated in the lottery draw that took place earlier today and...
                                    </p>
                                </div>

                                <div className="flex items-center flex-wrap gap-2 md:gap-4 mt-1">
                                    <div className="flex items-center gap-1.5 md:gap-2.5 h-[28px] md:h-[34px] px-2 md:px-3 rounded-[6px] md:rounded-[8px] bg-gradient-to-r from-[#E36826] to-[#7A3612] shadow-[0_4px_12px_rgba(227,104,38,0.2)] shrink-0">
                                        <div className="w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-[#E36826] flex items-center justify-center">
                                            <Ticket className="w-2 md:w-3 text-white" />
                                        </div>
                                        <span className="text-white text-[9px] md:text-[12px] font-bold font-['Montserrat'] whitespace-nowrap uppercase tracking-tight">Ticket <span className="text-white">66454244</span></span>
                                    </div>

                                    <div className="flex items-center gap-1.5 text-[#525D68]">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span className="text-[11px] md:text-[13px] font-bold font-['Montserrat'] whitespace-nowrap">2 min ago</span>
                                    </div>

                                    <div className="bg-[#BDFF25] px-2 md:px-3 py-0.5 md:py-1 rounded-[4px] md:rounded-[6px] shadow-[0_4px_10px_rgba(189,255,37,0.2)] shrink-0">
                                        <span className="text-black text-[11px] md:text-[13px] font-bold font-['Montserrat'] uppercase">Active</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full lg:w-auto shrink-0 justify-end overflow-visible">
                                <Button className="w-full sm:w-auto lg:flex-none h-[44px] px-8 bg-[#2B3540] hover:bg-[#36424f] text-white font-bold font-['Montserrat'] text-[13px] md:text-[14px] rounded-[10px] border-none uppercase whitespace-nowrap">
                                    Close ticket
                                </Button>
                                <Button className="w-full sm:w-auto lg:flex-none h-[44px] px-8 bg-[#FF5E1E] hover:bg-[#ff723b] text-white font-bold font-['Montserrat'] text-[13px] md:text-[14px] rounded-[10px] border-none shadow-[0_4px_12px_rgba(255,94,30,0.3)] uppercase whitespace-nowrap">
                                    Export
                                </Button>
                            </div>
                        </Card>
                    </div>

                    {/* TWO COLUMN CENTER PART */}
                    <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-8 w-full overflow-visible">
                        {/* LEFT COLUMN: Ticket Information Sidebar */}
                        <div className="flex flex-col gap-4">
                            <Card className="bg-[#0D1115] border border-white/5 rounded-[12px] p-6 flex flex-col gap-6">
                                <div className="flex flex-col gap-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Ticket ID</span>
                                        <span className="text-white text-[14px] font-bold font-['Montserrat']">4483902</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Status</span>
                                        <div className="bg-[#BDFF25] px-3 py-1 rounded-[6px]">
                                            <span className="text-black text-[11px] font-black font-['Montserrat'] uppercase">OPEN</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Priority</span>
                                        <div className="bg-[#E36826] px-3 py-1 rounded-[6px]">
                                            <span className="text-white text-[11px] font-black font-['Montserrat'] uppercase">HIGH</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Category</span>
                                        <span className="text-white text-[14px] font-black font-['Montserrat'] text-right">Wallet Connection</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Last Updated</span>
                                        <span className="text-[#A1B4C6] text-[13px] font-medium font-['Montserrat'] text-right">Dec 22, 2025 5:43:08 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Created</span>
                                        <span className="text-[#A1B4C6] text-[13px] font-medium font-['Montserrat'] text-right">Dec 22, 2025 5:43:08 PM</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Lottery Ticket Id</span>
                                        <span className="text-white text-[14px] font-black font-['Montserrat'] tracking-wide">66454244</span>
                                    </div>
                                </div>
                            </Card>

                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full overflow-visible">
                                <Button
                                    onClick={() => setLocation("/browse-faq")}
                                    className="w-full sm:flex-1 h-[52px] bg-[#242D35] hover:bg-[#2e3943] text-white font-black font-['Montserrat'] text-[12px] md:text-[13px] rounded-[10px] border border-white/5 uppercase tracking-normal whitespace-nowrap shrink-0"
                                >
                                    Browse FAQ
                                </Button>
                                <Button
                                    onClick={() => setLocation("/create-ticket")}
                                    className="w-full sm:flex-1 h-[52px] bg-[#FF5E1E] hover:bg-[#ff723b] text-white font-black font-['Montserrat'] text-[12px] md:text-[13px] rounded-[10px] shadow-[0_10px_20px_rgba(255,94,30,0.25)] uppercase tracking-normal whitespace-nowrap shrink-0"
                                >
                                    Create ticket
                                </Button>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Conversation Interface */}
                        <Card className="bg-[#0D1115] border border-white/5 rounded-[12px] flex flex-col min-h-[500px] lg:min-h-[600px] overflow-hidden">
                            {/* Header */}
                            <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between">
                                <div className="flex items-center gap-3 uppercase">
                                    <h2 className="text-white text-[18px] md:text-[24px] font-black font-['Montserrat'] tracking-tight">Conversation</h2>
                                    <div className="w-5 h-5 md:w-6 md:h-6 bg-[#FF5E1E] rounded-full flex items-center justify-center shrink-0">
                                        <span className="text-white text-[10px] md:text-[11px] font-black">4</span>
                                    </div>
                                </div>
                            </div>

                            {/* Chat messages history */}
                            <div className="flex-1 p-4 md:p-6 flex flex-col gap-8 md:gap-10 overflow-y-auto no-scrollbar">
                                {/* Moderator Response */}
                                <div className="flex gap-3 md:gap-4 max-w-[95%] md:max-w-[90%]">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] md:rounded-[10px] bg-[#8A2BE2] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(138,43,226,0.3)]">
                                        <span className="text-white font-black text-[16px] md:text-[18px]">S</span>
                                    </div>
                                    <div className="flex flex-col gap-1.5 md:gap-2 min-w-0 flex-1">
                                        <span className="text-white text-[11px] md:text-[14px] font-black font-['Montserrat'] uppercase">Support (Moderator Anna)</span>
                                        <div className="bg-[#141A20] border border-white/5 rounded-[12px] md:rounded-[16px] rounded-tl-none p-3 md:p-4 font-['Montserrat'] font-medium text-[13px] md:text-[15px] text-[#A1B4C6] leading-relaxed break-words overflow-hidden">
                                            Hi,<br />
                                            Thanks for reaching out.<br />
                                            We've received your request and are currently reviewing the lottery draw details.<br />
                                            Please note that payouts may take some time to process. We'll update you shortly.
                                        </div>
                                        <span className="text-[#525D68] text-[9px] md:text-[11px] font-black font-['Montserrat'] uppercase tracking-wider">Aug 18, 2025 — 14:32</span>
                                    </div>
                                </div>

                                {/* User Response */}
                                <div className="flex gap-3 md:gap-4 max-w-[95%] md:max-w-[90%] self-end flex-row-reverse">
                                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-[8px] md:rounded-[10px] bg-gradient-to-br from-[#FF9D00] to-[#FF4B0F] flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(255,157,0,0.3)]">
                                        <User className="text-white w-4 h-4 md:w-6 md:h-6" />
                                    </div>
                                    <div className="flex flex-col gap-1.5 md:gap-2 items-end min-w-0 flex-1">
                                        <div className="bg-[#141A20] border border-white/5 rounded-[12px] md:rounded-[16px] rounded-tr-none p-3 md:p-4 font-['Montserrat'] font-medium text-[13px] md:text-[15px] text-[#A1B4C6] leading-relaxed text-right break-words overflow-hidden w-full">
                                            Hello,<br />
                                            I participated in today's lottery draw, and my ticket shows as a winning one, but the prize hasn't been credited to my balance yet. Could you please check this?
                                        </div>
                                        <span className="text-[#525D68] text-[9px] md:text-[11px] font-black font-['Montserrat'] uppercase tracking-wider">Aug 18, 2025 — 14:32</span>
                                    </div>
                                </div>
                            </div>

                            {/* Message input area */}
                            <div className="p-3 md:p-4 bg-[#090D11]/50 border-t border-white/5">
                                <div className="bg-[#0D1115] border border-white/10 focus-within:border-white/20 rounded-[10px] md:rounded-[12px] p-1.5 md:p-2 flex items-center gap-2 transition-all">
                                    <input
                                        type="text"
                                        placeholder="Start typing..."
                                        className="flex-1 min-w-0 bg-transparent border-none outline-none text-white px-2 md:px-4 font-medium font-['Montserrat'] text-[14px] md:text-[15px] placeholder:text-[#525D68]"
                                    />
                                    <button className="p-1.5 md:p-2.5 hover:bg-white/5 rounded-full transition-colors shrink-0 group">
                                        <Paperclip className="w-4 h-4 md:w-5 md:h-5 text-[#525D68] group-hover:text-[#A1B4C6] transition-colors" />
                                    </button>
                                    <Button className="h-[38px] md:h-[44px] px-5 md:px-8 bg-[#FF5E1E] hover:bg-[#ff723b] text-white font-black font-['Montserrat'] text-[11px] md:text-[13px] rounded-[8px] md:rounded-[10px] uppercase tracking-wider shadow-[0_6px_12px_rgba(255,94,30,0.25)] transition-all active:scale-98">
                                        Send
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};
