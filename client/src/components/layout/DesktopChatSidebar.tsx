import React, { useState, useEffect, useRef } from 'react';
import { Send, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
    id: string;
    user: string;
    avatar: string;
    content: string;
    time: string;
}

const INITIAL_MESSAGES: Message[] = [
    { id: '1', user: "jackie", time: "12:03", content: "dealer just pulled 21 again", avatar: "/figmaAssets/frame1.png" },
    { id: '2', user: "amaeBDGEW", time: "12:03", content: "dealer just pulled 21 twice in a row, i swear every time i join this table it starts like this", avatar: "/figmaAssets/frame2.png" },
    { id: '3', user: "cryptoWolf", time: "12:03", content: "live bj still paying a bit", avatar: "/figmaAssets/frame3.png" },
    { id: '4', user: "pepe_master", time: "12:03", content: "happens to everyone, just keep spinning", avatar: "/figmaAssets/frame4.png" },
    { id: '5', user: "B0NUSss", time: "12:03", content: "anyone tried that new cyber slot, looks cool but i feel like it's just eating balance fast", avatar: "/figmaAssets/frame1.png" },
    { id: '6', user: "0xA9f", time: "12:03", content: "already down 40 and telling myself 'one more spin' like an idiot", avatar: "/figmaAssets/frame2.png" },
    { id: '7', user: "anna_k", time: "12:03", content: "finally a normal hand, felt illegal after that start", avatar: "/figmaAssets/frame3.png" },
    { id: '8', user: "fox_king", time: "12:03", content: "dealer just pulled 21 again", avatar: "/figmaAssets/frame1.png" },
];

export const DesktopChatSidebar = () => {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage: Message = {
            id: Date.now().toString(),
            user: "Me",
            avatar: "/figmaAssets/frame1.png",
            content: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        };
        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <div className="w-full flex flex-col gap-6 p-4">
            {/* Top Spacer for Fixed Header */}
            <div className="h-[74px] shrink-0" />

            {/* Header Section - HIGH FIDELITY REPLICA */}
            <div className="shrink-0">
                <div
                    className="relative w-full h-[161px] rounded-[32px] overflow-hidden shadow-2xl group cursor-pointer hover:brightness-105 transition-all duration-300 bg-[#0c0d12]"
                >
                    {/* Background City Image - Full Cover */}
                    <img
                        src="/figmaAssets/hall1.png"
                        className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-screen"
                        alt=""
                    />

                    {/* Blue/Purple Gradient - Top Left */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(circle at 0% 0%, #7700FF 0%, transparent 70%)'
                        }}
                    />

                    {/* Brown/Orange Gradient - Right side (near mascot) */}
                    <div
                        className="absolute inset-0 pointer-events-none opacity-80"
                        style={{
                            background: 'radial-gradient(circle at 100% 50%, #FF8142 0%, transparent 70%)'
                        }}
                    />

                    {/* Left: Chat Icon & Title */}
                    <div className="relative z-10 p-7 flex flex-col justify-between h-full">
                        <div className="flex items-start gap-4">
                            <img
                                src="/figmaAssets/image-183.png"
                                className="w-14 h-14 object-contain drop-shadow-2xl"
                                alt="Chat Icon"
                            />
                            <div className="flex flex-col mt-1">
                                <h3 className="text-white font-['Montserrat'] font-[900] text-[22px] uppercase tracking-[-0.01em] leading-[19px] select-none">
                                    ONLINE<br />CHAT
                                </h3>
                            </div>
                        </div>

                        {/* Online Count Badge */}
                        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-[18px] w-fit px-4 py-1.5 flex items-center gap-2">
                            <div className="flex items-center gap-1.5">
                                <Users className="w-4 h-4 text-[#A6D947]" />
                                <span className="text-white font-black text-[16px] tracking-tight">544</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Fox Mascot (mob.png) */}
                    <img
                        src="/figmaAssets/mob.png"
                        className="absolute object-contain z-20 pointer-events-none transition-transform duration-500 group-hover:scale-105 origin-bottom-right"
                        style={{
                            width: '265px',
                            height: '161px',
                            top: '10px',
                            left: '96px'
                        }}
                        alt="Mascot"
                    />
                </div>
            </div>

            {/* Messages List - Now part of main scroll */}
            <div className="flex flex-col gap-6 pr-1">
                {messages.map((msg, idx) => (
                    <div key={idx} className="flex gap-3 group">
                        {/* Round Avatar */}
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 shadow-lg shrink-0">
                            <img src={msg.avatar} className="w-full h-full object-cover" alt={msg.user} />
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col gap-1.5">
                            <div className="flex items-center justify-between px-1">
                                <span className="text-[13px] font-black uppercase tracking-wide font-['Montserrat'] text-[#E36826]">
                                    {msg.user}
                                </span>
                                <span className="text-[11px] text-[#525D68] font-bold font-['Montserrat'] opacity-60">
                                    {msg.time}
                                </span>
                            </div>
                            {/* Message Content Box */}
                            <div className="bg-[#1A2128] rounded-[18px] rounded-tl-none p-3.5 border border-white/[0.03] shadow-sm">
                                <p className="text-[#a1b4c6] text-[13px] leading-relaxed font-['Outfit'] font-medium">
                                    {msg.content}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={scrollRef} />
            </div>

            {/* Input row - Now at the end of the content */}
            <div className="p-1 pt-2 pb-32 flex gap-2 shrink-0 border-t border-white/5 mt-2">
                <Input
                    placeholder="Type a message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="bg-[#11161B] border-white/10 h-12 text-[14px] text-white placeholder:text-[#525D68] rounded-2xl focus-visible:ring-1 focus-visible:ring-[#E36826]/30 focus-visible:border-[#E36826]/30 transition-all font-medium px-5"
                />
                <Button
                    onClick={handleSend}
                    className="h-12 w-12 bg-[#FF6B26] hover:bg-[#FF7A30] text-white rounded-2xl shadow-lg active:scale-95 transition-all flex items-center justify-center p-0"
                >
                    <Send className="w-5 h-5" />
                </Button>
            </div>

            {/* Bottom Extra Spacer */}
            <div className="h-[250px] shrink-0" />
        </div>
    );
};
