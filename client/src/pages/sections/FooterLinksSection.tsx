import { Button } from "@/components/ui/button";
import { X, MessageSquare, Github, MessageCircle } from "lucide-react";

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
        <footer className="mt-20 pt-16 pb-12 border-t border-white/5 w-full bg-transparent overflow-hidden">
            <div className="w-full max-w-[1474px] mx-auto px-6 md:px-10 lg:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 items-start w-full">

                    {/* Column 1: Brand Section */}
                    <div className="flex flex-col">
                        <div className="text-3xl font-black text-white tracking-tighter mb-8 italic select-none">LOTTERY</div>
                        <div className="space-y-1">
                            <p className="text-[#525D68] text-[9.5px] font-bold uppercase tracking-tight">
                                © 2025 FIRSTBTCLOTTERY.
                            </p>
                            <p className="text-[#525D68] text-[9.5px] font-bold uppercase tracking-tight">
                                ALL RIGHTS RESERVED.
                            </p>
                            <p className="text-[#525D68] text-[9.5px] font-bold uppercase tracking-tight">
                                INFO CHOICE TRADE
                            </p>
                            <p className="text-[#525D68] text-[9.5px] font-bold uppercase tracking-tight">
                                CONSULTING SERVICES LTD.
                            </p>
                        </div>
                    </div>

                    {/* Columns 2, 3, 4: Link Categories (Equal Gaps) */}
                    {footerLinks.map((section, idx) => (
                        <div key={idx} className="flex flex-col min-w-0">
                            <h4 className="text-white font-[900] text-[12px] mb-6 uppercase tracking-[0.12em] whitespace-nowrap">
                                {section.title}
                            </h4>
                            <ul className="space-y-4 text-[10px] text-[#525D68] font-black uppercase tracking-wider">
                                {section.links.map((link, lIdx) => (
                                    <li key={lIdx} className="hover:text-white cursor-pointer transition-colors truncate">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Column 5: Action Section */}
                    <div className="flex flex-col items-start lg:items-end gap-6 w-full">
                        <div className="flex items-center bg-[#1A1C21] p-1.5 rounded-xl border border-white/5 gap-2 w-fit">
                            {[
                                { icon: <X size={15} /> },
                                { icon: <MessageCircle size={15} /> },
                                { icon: <MessageSquare size={15} /> }
                            ].map((social, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 bg-[#24272E] flex items-center justify-center rounded-lg hover:bg-[#2D333D] cursor-pointer transition-colors border border-white/5 group"
                                >
                                    <div className="text-gray-400 group-hover:text-white">
                                        {social.icon}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Button className="w-full lg:w-44 h-12 bg-[#2D333D] hover:bg-[#3D444F] text-white font-black text-[13px] px-6 rounded-2xl uppercase transition-all tracking-widest border border-white/5 shadow-none">
                            Support
                        </Button>
                    </div>

                </div>
            </div>
        </footer>
    );
};
