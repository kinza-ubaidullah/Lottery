import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import { cn } from "@/lib/utils";
import { Search, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { BackButton } from "@/components/ui/BackButton";

export const BrowseFAQPage = (): JSX.Element => {
    const isMobile = useIsMobile();
    const [expandedId, setExpandedId] = useState<number | null>(4);
    const [activeSubTab, setActiveSubTab] = useState("All answers");
    const [, setLocation] = useLocation();

    const faqCategories = [
        { title: "General", count: 12 },
        { title: "Account", count: 8 },
        { title: "Lottery", count: 15 },
        { title: "Payments", count: 10 },
        { title: "Security", count: 5 },
        { title: "Bonuses", count: 7 },
    ];

    const content = (
        <div className="w-full flex flex-col items-center bg-[#0D1216] min-h-screen">
            {isMobile && <AppHeaderSection />}

            <main className={cn(
                "w-full flex-1 flex flex-col gap-8 pb-20",
                isMobile ? "px-4 py-8" : "px-4 md:px-10"
            )}>

                {/* Back Button with Standard Component */}
                <div className="w-full flex justify-start mt-4">
                    <BackButton label="Back to Support" href="/faq" />
                </div>

                {/* FAQ Banner Replica */}
                <div className="relative w-full rounded-[24px] overflow-hidden mt-4 shadow-2xl border border-white/5">
                    {/* Background Gradient & Pattern */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            background: "linear-gradient(90deg, #12181F 0%, #173A17 35%, #9E4A1E 85%, #E36826 100%)"
                        }}
                    >
                        {/* Geometric Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                                backgroundSize: '40px 40px'
                            }}
                        />
                        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-black/20 via-transparent to-transparent" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 md:py-0 md:h-[260px]">
                        {/* Text Side */}
                        <div className="flex flex-col gap-2 md:gap-5 max-w-[600px] text-center md:text-left mb-6 md:mb-0">
                            <h1 className="text-white text-[28px] sm:text-[36px] md:text-[52px] font-[900] font-['Montserrat'] leading-[1] uppercase tracking-tighter drop-shadow-lg">
                                Frequently <br />
                                Asked <br />
                                Questions
                            </h1>
                            <p className="text-white/70 text-[12px] md:text-[18px] font-medium font-['Montserrat'] tracking-wide">
                                Check answers for the most common questions
                            </p>
                        </div>

                        {/* Character Image - book.png */}
                        <div className="relative h-[180px] sm:h-[220px] md:h-[300px] w-auto flex items-end overflow-visible">
                            <img
                                src="/figmaAssets/book.png"
                                className="h-full w-auto object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] scale-125 md:scale-135 origin-bottom translate-y-2"
                                alt="FAQ Character"
                            />
                        </div>
                    </div>
                </div>

                {/* Search Bar section */}
                <div className="w-full max-w-[800px] mx-auto -mt-4 md:-mt-6 relative z-20 px-2 md:px-0">
                    <div className="bg-[#1A1F26] border border-white/10 rounded-[12px] md:rounded-[16px] p-1.5 md:p-2 flex items-center gap-2 md:gap-3 shadow-2xl backdrop-blur-md">
                        <div className="pl-2 md:pl-4">
                            <Search className="w-4 h-4 md:w-5 md:h-5 text-[#525D68]" />
                        </div>
                        <input
                            type="text"
                            placeholder="I have a question about..."
                            className="flex-1 bg-transparent border-none outline-none text-white font-medium font-['Montserrat'] py-2.5 md:py-3 text-[13px] md:text-base placeholder:text-[#525D68] min-w-0"
                        />
                        <button className="bg-[#FF5E1E] hover:bg-[#ff723b] text-white font-black font-['Montserrat'] px-4 md:px-6 py-2.5 md:py-3 rounded-[8px] md:rounded-[12px] uppercase text-[11px] md:text-[13px] shadow-lg transition-all active:scale-95 whitespace-nowrap">
                            Search
                        </button>
                    </div>
                </div>

                {/* Sub Section: How It Works (Image Replica) */}
                <div className="flex flex-col items-center gap-8 mt-2 w-full">
                    {/* Section Header */}
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 flex items-center justify-center text-[#BDFF25] drop-shadow-[0_0_8px_rgba(189,255,37,0.5)]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                            </svg>
                        </div>
                        <h2 className="text-white font-black font-['Montserrat'] text-[20px] md:text-[22px] uppercase tracking-wide">How it works</h2>
                    </div>

                    {/* Sub Navigation Tabs */}
                    <div className="bg-[#141A20]/80 backdrop-blur-md p-1 rounded-xl flex items-center gap-1 border border-white/5 shadow-2xl overflow-x-auto no-scrollbar max-w-full">
                        {["All answers", "Wallet questions", "Lottery functions"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveSubTab(tab)}
                                className={cn(
                                    "px-5 md:px-8 py-2.5 rounded-lg text-[12px] md:text-[13px] font-bold font-['Montserrat'] transition-all duration-500 whitespace-nowrap",
                                    activeSubTab === tab
                                        ? "bg-[linear-gradient(180deg,#141A20_0%,rgba(189,255,37,0.15)_100%)] text-white shadow-[inset_0_-2.5px_0_#BDFF25]"
                                        : "text-[#525D68] hover:text-white"
                                )}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* CONDITIONAL CONTENT RENDERING */}
                    {activeSubTab === "Lottery functions" ? (
                        <div className="w-full flex flex-col gap-8 text-[#A1B4C6] font-['Montserrat'] max-w-[1000px] animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <p className="text-[14px] font-medium leading-relaxed opacity-80 italic">
                                Operator: INFO CHOICE TRADE CONSULTING SERVICES Ltd (referred to herein as "we", "us", or "our")
                            </p>

                            <section className="flex flex-col gap-4">
                                <h1 className="text-white text-[28px] md:text-[32px] font-black leading-tight">1. Introduction</h1>
                                <p className="text-[15px] md:text-[16px] font-medium leading-relaxed">
                                    Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use firstbtclottery.com (the "Website"). By accessing or using our services, you consent to the practices described in this policy.
                                </p>
                            </section>

                            <section className="flex flex-col gap-5">
                                <h2 className="text-white text-[24px] md:text-[28px] font-black leading-tight">2. Information We Collect</h2>
                                <p className="text-[15px] md:text-[16px] font-medium leading-relaxed">
                                    We may collect the following types of information:
                                </p>

                                <div className="flex flex-col gap-6 pl-2">
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-[18px] font-bold">a) Personal Information</h3>
                                        <ul className="list-none flex flex-col gap-1.5 pl-4">
                                            {["Email address", "Wallet address", "Contact details (when voluntarily submitted)", "Identity verification data (for KYC/AML purposes if applicable)"].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <span className="text-white mt-1.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-[18px] font-bold">b) Non-Personal Information</h3>
                                        <ul className="list-none flex flex-col gap-1.5 pl-4">
                                            {["IP address", "Browser type and version", "Device information", "Operating system", "Usage data (pages visited, time on site, etc.)"].map((item, i) => (
                                                <li key={i} className="flex gap-3 items-start">
                                                    <span className="text-white mt-1.5">•</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-white text-[18px] font-bold">c) Cookies and Tracking Technologies</h3>
                                        <p className="text-[15px] md:text-[16px] leading-relaxed">
                                            We use cookies and similar technologies to enhance your user experience and for analytics purposes.
                                        </p>
                                    </div>
                                </div>
                            </section>

                            <section className="flex flex-col gap-5">
                                <h2 className="text-white text-[24px] md:text-[28px] font-black leading-tight">3. How We Use Your Information</h2>
                                <p className="text-[15px] md:text-[16px] font-medium leading-relaxed mb-1">
                                    We may use the information we collect for the following purposes:
                                </p>
                                <ul className="list-none flex flex-col gap-2 pl-4">
                                    {[
                                        "To provide and maintain the lottery platform",
                                        "To communicate with users",
                                        "To process transactions",
                                        "To ensure platform integrity and security",
                                        "To comply with legal obligations (including anti-money laundering regulations)",
                                        "For customer support and dispute resolution",
                                        "For analytics and performance optimization"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3 items-start">
                                            <span className="text-white mt-1.5">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    ) : (
                        /* FAQ Items Grid */
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 w-full">
                            {[
                                { id: 1, q: "How are the lottery winners selected?", a: "Winners are selected using a decentralized random number generator (VRF) to ensure maximum transparency and fairness." },
                                { id: 2, q: "How can I contact Firstbtclottery.com customer support?", a: "You can contact Firstbtclottery.com customer support through our website, or live chat. Our support team is available 24hours." },
                                { id: 3, q: "Is it safe to provide my personal information on Firstbtclottery.com?", a: "Yes, we use military-grade encryption and strictly follow data protection protocols to keep your information secure." },
                                { id: 4, q: "How do I purchase a lottery ticket?", a: "You can contact Firstbtclottery.com customer support through our website, or live chat. Our support team is available 24hours." },
                                { id: 5, q: "How can I recover my password if I forget it?", a: "Simply click the 'Forgot Password' link on the login page and follow the email instructions to reset it safely." },
                                { id: 6, q: "How do I create an account on Firstbtclottery.com?", a: "Click the 'Sign Up' button, enter your details, and verify your email. It takes less than a minute to start playing." },
                            ].map((faq) => {
                                const isExpanded = expandedId === faq.id;
                                return (
                                    <div
                                        key={faq.id}
                                        className={cn(
                                            "bg-[#141A20] border rounded-[16px] overflow-hidden transition-all duration-500 cursor-pointer group",
                                            isExpanded ? "border-[#BDFF25]/20 shadow-[0_12px_40px_rgba(0,0,0,0.4)]" : "border-white/5 hover:border-white/10"
                                        )}
                                        onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                                    >
                                        <div className="w-full flex items-center justify-between p-5 md:p-6 text-left">
                                            <span className="text-white font-bold font-['Montserrat'] text-[15px] md:text-[16px] pr-6 leading-tight select-none">
                                                {faq.q}
                                            </span>
                                            <div className={cn(
                                                "w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-500 shrink-0 shadow-lg",
                                                isExpanded
                                                    ? "bg-[linear-gradient(180deg,#FF6B26_0%,#E34900_100%)] rotate-180"
                                                    : "bg-[#1F262E] group-hover:bg-[#2A343F]"
                                            )}>
                                                <ChevronRight className={cn(
                                                    "w-5 h-5 transition-all duration-500",
                                                    isExpanded ? "text-white" : "text-[#525D68] group-hover:text-[#A1B4C6] rotate-90"
                                                )} />
                                            </div>
                                        </div>

                                        <div className={cn(
                                            "overflow-hidden transition-all duration-500 ease-in-out",
                                            isExpanded ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                        )}>
                                            <p className="px-6 pb-6 text-[#A1B4C6] text-[14px] md:text-[15px] font-medium font-['Montserrat'] leading-relaxed">
                                                {faq.a}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>

            </main>

            <FooterLinksSection />
        </div>
    );

    if (isMobile) {
        return content;
    }

    return (
        <DesktopLayout>
            {content}
        </DesktopLayout>
    );
};
