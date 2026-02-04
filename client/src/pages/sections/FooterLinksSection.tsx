import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { X, MoreHorizontal } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

const footerLinks = [
    {
        title: "About",
        links: ["Refund policy", "Terms & Conditions"],
    },
    {
        title: "Help",
        links: ["Troubleshooting", "Affiliate"],
    },
    {
        title: "Developers",
        links: ["Github", "Bug Bounty", "Audits"],
    },
];

export const FooterLinksSection = (): JSX.Element => {
    return (
        <footer className="w-full bg-[#12171D] pt-12 md:pt-16 pb-8 md:pb-12 border-t border-[#242d35]">
            <div className="w-full max-w-[1280px] mx-auto px-4 md:px-12">
                {/* Top Header: Logo & Socials */}
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 mb-12 md:mb-16">
                    {/* Logo */}
                    <h1 className="font-['Luckiest_Guy'] text-white text-4xl md:text-5xl tracking-wide uppercase text-center md:text-left w-full md:w-auto">
                        LOTTERY
                    </h1>

                    {/* Social Buttons Row */}
                    <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 w-full md:w-auto">
                        {/* X (Twitter) */}
                        <Button className="bg-[linear-gradient(180deg,#13191F_0%,#1F262E_100%)] hover:opacity-80 text-white rounded-[6px] w-[85px] h-[44px] border border-[#98AFC6]/20 shadow-inner p-0 flex items-center justify-center transition-colors">
                            <X className="w-7 h-7" strokeWidth={3} />
                        </Button>

                        {/* More (Dots) */}
                        <Button className="bg-[linear-gradient(180deg,#13191F_0%,#1F262E_100%)] hover:opacity-80 text-white rounded-[6px] w-[85px] h-[44px] border border-[#98AFC6]/20 shadow-inner p-0 flex items-center justify-center transition-colors">
                            <MoreHorizontal className="w-7 h-7" strokeWidth={3} />
                        </Button>

                        {/* Discord */}
                        <Button className="bg-[linear-gradient(180deg,#13191F_0%,#1F262E_100%)] hover:opacity-80 text-white rounded-[6px] w-[85px] h-[44px] border border-[#98AFC6]/20 shadow-inner p-0 flex items-center justify-center transition-colors">
                            <FaDiscord className="w-7 h-7" />
                        </Button>

                        {/* Support Button */}
                        <Button className="bg-[linear-gradient(180deg,#3F4E5E_0%,#28323D_100%)] hover:opacity-90 text-white font-bold rounded-[6px] h-[44px] px-6 border border-white/10 shadow-lg ml-1 text-sm tracking-wide flex items-center">
                            Support
                        </Button>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 mb-16 max-w-3xl mx-auto md:mx-0">
                    {footerLinks.map((section, idx) => (
                        <div key={idx} className="flex flex-col gap-6 text-center md:text-left">
                            <h3 className="text-white font-bold text-xl md:text-2xl">{section.title}</h3>
                            <ul className="flex flex-col gap-4">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href="#" className="text-[#94A3B8] hover:text-white transition-colors text-base md:text-lg font-medium">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <Separator className="bg-white/5 mb-10" />

                {/* Copyright */}
                <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left">
                    <p className="text-[#525c68] text-sm md:text-base font-bold tracking-tight">
                        © 2025 FIRSTBTCLOTTERY. All rights reserved. INFO CHOICE TRADE CONSULTING SERVICES Ltd.
                    </p>
                    {/* Removed Bug Bounty and Audits links as requested */}
                </div>
            </div>
        </footer>
    );
};
