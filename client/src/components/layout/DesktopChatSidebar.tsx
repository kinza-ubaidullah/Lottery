import React, { useState, useEffect, useRef } from 'react';
import { Send, Users, Smile, Paperclip } from "lucide-react";
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
    { id: '1', user: "jackie", time: "12:03", content: "dealer just pulled 21 again", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" },
    { id: '2', user: "amaeBDGEW", time: "12:05", content: "dealer just pulled 21 twice in a row, i swear every time i join this table it starts like this", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" },
    { id: '3', user: "cryptoWolf", time: "12:08", content: "live bj still paying a bit", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Wolf" },
    { id: '4', user: "amaeBDGEW", time: "12:05", content: "happens to everyone", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack" },
    { id: '5', user: "BONUSss", time: "12:03", content: "anyone tried that new cyber slot, looks cool but i feel like it's just eating balance fast", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bonus" },
];

export const DesktopChatSidebar = () => {
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [input, setInput] = useState('');
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage: Message = {
            id: Date.now().toString(),
            user: "Me",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Me",
            content: input,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
        };
        setMessages([...messages, newMessage]);
        setInput('');
    };

    return (
        <aside className="fixed right-0 top-[72px] h-[calc(100vh-72px)] w-80 bg-[#0d1218] border-l border-white/5 flex flex-col z-50 overflow-hidden shadow-2xl">
            {/* Header Section */}
            <div className="p-4 flex-shrink-0">
                <div className="relative w-full h-[150px] rounded-[24px] overflow-hidden group border border-white/5 bg-[#1F262E]">
                    <div className="absolute inset-0">
                        <img src="/figmaAssets/hall.png" className="w-full h-full object-cover opacity-20 grayscale" alt="Bg" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1F262E] via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-[#FF6B26]/10 rounded-xl border border-[#FF6B26]/20">
                                    <Users className="w-5 h-5 text-[#FF6B26]" />
                                </div>
                                <h3 className="text-white font-black text-lg uppercase tracking-tight font-['Montserrat'] leading-tight">ONLINE<br />CHAT</h3>
                            </div>
                            <div className="bg-black/40 backdrop-blur-md px-3 py-1 rounded-lg w-fit border border-white/5 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-white font-bold text-[10px] font-['Montserrat'] uppercase">544</span>
                            </div>
                        </div>
                    </div>

                    {/* Fox Mascot */}
                    <img src="/figmaAssets/mob.png" className="absolute bottom-0 right-0 h-[90%] w-auto object-contain object-right-bottom drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" alt="Fox" />
                </div>
            </div>

            {/* Chat Content */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-4 custom-scrollbar">
                {messages.map((msg, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5 p-3 rounded-2xl transition-all hover:bg-white/[0.02]">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <Avatar className="w-8 h-8 rounded-lg overflow-hidden border border-white/5">
                                    <AvatarImage src={msg.avatar} />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                                <span className={cn(
                                    "text-xs font-black uppercase tracking-wide font-['Montserrat']",
                                    msg.user === "Me" ? "text-[#FF6B26]" : "text-[#525D68] group-hover:text-[#8a96a3]"
                                )}>{msg.user}</span>
                            </div>
                            <span className="text-[9px] text-[#525D68] font-bold">{msg.time}</span>
                        </div>
                        <p className="text-[#a1b4c6] text-[12px] leading-relaxed font-['Outfit'] pl-[42px] font-medium -mt-1">
                            {msg.content}
                        </p>
                    </div>
                ))}
            </div>

            {/* Input Footer */}
            <div className="p-4 bg-[#0d1218] border-t border-white/5">
                <div className="relative group">
                    <Input
                        placeholder="Placeholder"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        className="bg-[#11161B] border-white/5 h-12 text-sm text-white placeholder:text-[#525D68] rounded-xl pr-12 focus-visible:ring-0 focus-visible:border-white/10"
                    />
                    <Button
                        onClick={handleSend}
                        className="absolute right-1 top-1 w-10 h-10 bg-[#E36826] hover:bg-[#FF6B26] p-0 rounded-lg shadow-lg"
                    >
                        <Send className="w-4 h-4 text-white" />
                    </Button>
                </div>
            </div>
        </aside>
    );
};
