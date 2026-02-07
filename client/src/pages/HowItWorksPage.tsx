import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const HowItWorksPage = (): JSX.Element => {
    const isMobile = useIsMobile();

    return (
        <div className="w-full flex flex-col items-center">
            <main className={cn(
                "w-full flex-1 flex flex-col gap-10 items-center justify-center overflow-visible",
                isMobile ? "max-w-[1280px] py-8" : "px-4 md:px-10"
            )}>
                {/* Header Title - Centered exactly like screenshot */}
                <div className="flex flex-col items-center gap-3 text-center mb-4 mt-8">
                    <div className="flex items-center gap-3">
                        <PlusCircle className="w-8 h-8 text-[#BDFF25]" />
                        <h1 className="text-white text-[28px] md:text-[36px] font-black font-['Montserrat'] uppercase tracking-tight">Create support ticket</h1>
                    </div>
                    <p className="text-[#525D68] text-[15px] md:text-[18px] font-medium font-['Montserrat']">
                        Describe your issue and we'll help you resolve it efficiently
                    </p>
                </div>

                {/* MAIN GRID: Form and Sidebar */}
                <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-8 lg:gap-[32px] mx-auto items-start justify-center">

                    {/* LEFT: Form Container */}
                    <div
                        className="flex flex-col gap-[32px] w-full lg:w-[629px] lg:min-h-[643px] bg-[#0D1115] rounded-[32px] p-6 md:p-10 border border-white/5 shadow-2xl overflow-visible"
                    >
                        {/* THE FORM */}
                        <div className="flex flex-col gap-[32px]">
                            {/* Subject */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Subject of injury</label>
                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    className="w-full h-[56px] bg-[#0D1115] border border-white/5 rounded-[12px] px-6 text-white font-medium font-['Montserrat'] text-[16px] placeholder:text-[#2A333C] focus:border-[#E36826]/50 transition-all outline-none"
                                />
                            </div>

                            {/* Category & Priority Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Category</label>
                                    <div className="relative group">
                                        <select className="w-full h-[56px] bg-[#0D1115] border border-white/5 rounded-[12px] px-6 text-white font-medium font-['Montserrat'] text-[16px] outline-none appearance-none cursor-pointer focus:border-[#E36826]/50 transition-all">
                                            <option>Wallet</option>
                                            <option>Lottery Draw</option>
                                            <option>Transaction</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#525D68] pointer-events-none group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Priority</label>
                                    <div className="relative group">
                                        <select className="w-full h-[56px] bg-[#0D1115] border border-white/5 rounded-[12px] px-6 text-white font-medium font-['Montserrat'] text-[16px] outline-none appearance-none cursor-pointer focus:border-[#E36826]/50 transition-all">
                                            <option>High</option>
                                            <option>Medium</option>
                                            <option>Low</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#525D68] pointer-events-none group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                            </div>

                            {/* Ticket ID */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Lottery ticket ID</label>
                                <input
                                    type="text"
                                    placeholder="eg. 94300454"
                                    className="w-full h-[56px] bg-[#0D1115] border border-white/5 rounded-[12px] px-6 text-white font-medium font-['Montserrat'] text-[16px] placeholder:text-[#2A333C] focus:border-[#E36826]/50 transition-all outline-none"
                                />
                                <span className="text-[#39424B] text-[12px] font-medium font-['Montserrat']">You can find this in your ticket history or transaction receipt</span>
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Contact Email</label>
                                <input
                                    type="email"
                                    placeholder="Contact Email"
                                    className="w-full h-[56px] bg-[#0D1115] border border-white/5 rounded-[12px] px-6 text-white font-medium font-['Montserrat'] text-[16px] placeholder:text-[#2A333C] focus:border-[#E36826]/50 transition-all outline-none"
                                />
                                <span className="text-[#39424B] text-[12px] font-medium font-['Montserrat']">We will send updates to this email address</span>
                            </div>

                            {/* Transaction Hash */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Transaction Hash</label>
                                <input
                                    type="text"
                                    placeholder="Transaction Hash"
                                    className="w-full h-[56px] bg-[#0D1115] border border-white/5 rounded-[12px] px-6 text-white font-medium font-['Montserrat'] text-[16px] placeholder:text-[#2A333C] focus:border-[#E36826]/50 transition-all outline-none"
                                />
                                <span className="text-[#39424B] text-[12px] font-medium font-['Montserrat']">Provide transaction hash</span>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase tracking-wider">Your problem description</label>
                                <textarea
                                    placeholder="Please provide as much detail as possible about your issue:&#10;- What were you trying to do?&#10;- What happened instead?&#10;- What error messages did you see?"
                                    className="w-full h-[200px] bg-[#0D1115] border border-white/5 rounded-[12px] p-6 text-white font-medium font-['Montserrat'] text-[16px] placeholder:text-[#2A333C] focus:border-[#E36826]/50 transition-all outline-none resize-none leading-relaxed"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center mt-4">
                            <Button
                                className="w-full md:w-[220px] h-[58px] text-white font-black font-['Montserrat'] text-[16px] rounded-[16px] shadow-[0_12px_32px_rgba(255,94,30,0.35)] transition-all active:scale-95 uppercase tracking-wide border-none"
                                style={{ background: 'linear-gradient(180deg, #FF4B0F 0%, #FF6F3F 100%)' }}
                            >
                                Create ticket
                            </Button>
                        </div>
                    </div>

                    {/* RIGHT: Screenshot Sidebar */}
                    <div className="flex flex-col gap-4 sticky top-[100px] w-full lg:w-[303px]">
                        <Card
                            className="rounded-[32px] p-10 flex flex-col items-center justify-between relative overflow-hidden group shadow-2xl"
                            style={{
                                width: '303px',
                                height: '391px',
                                background: 'linear-gradient(180deg, #2B1D14 0%, #000000 100%)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                            }}
                        >
                            {/* Inner Atmosphere */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(227,104,38,0.1)_0%,transparent_60%)] pointer-events-none" />

                            {/* img31.png - Absolutely Positioned */}
                            <img
                                src="/figmaAssets/img31.png"
                                alt="Decoration"
                                style={{
                                    position: 'absolute',
                                    width: '70px',
                                    height: '70px',
                                    top: '50px',
                                    left: '117px',
                                    opacity: 1,
                                    transform: 'rotate(0deg)',
                                }}
                            />

                            {/* Text Content - Centered */}
                            <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center flex-1">
                                <h3 className="text-white text-[22px] font-black font-['Montserrat'] uppercase tracking-tight">Attach screenshots</h3>
                                <span className="text-[#525D68] text-[14px] font-bold font-['Montserrat'] uppercase tracking-widest">Optional</span>
                            </div>

                            {/* Button - Bottom */}
                            <Button
                                className="w-full h-[56px] bg-[#1E262E] hover:bg-[#252f38] text-[#A1B4C6] hover:text-white font-black font-['Montserrat'] text-[15px] rounded-[18px] border border-white/5 uppercase transition-all shadow-lg flex items-center justify-center relative z-10"
                            >
                                Attach
                            </Button>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};
