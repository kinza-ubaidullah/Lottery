import React from "react";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Ticket, Wallet, Clock, Trophy, Users, Gift, Gem } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { useLocation } from "wouter";

const stats = [
    {
        icon: "/figmaAssets/ticket-green.png", // Placeholder, will use Lucide or image
        value: "12 900 483",
        label: "Tickets Purchased",
        bg: "bg-[#11161B]", // Frames-05
        iconBg: "bg-[#BFFF1C26]",
        accent: "text-[#BDFF25]"
    },
    {
        icon: "/figmaAssets/coins-stack.png",
        value: "1 900",
        label: "Total winnings",
        bg: "bg-[#11161B]", // Frames-05
        iconBg: "bg-[#FF6A0026]",
        accent: "text-[#FF6A00]"
    },
    {
        icon: "/figmaAssets/wallet-purple.png",
        value: "24 569",
        label: "Non-winning tickets",
        bg: "bg-[#11161B]", // Frames-05
        iconBg: "bg-[#F822FF26]",
        accent: "text-[#F822FF]"
    },
    {
        icon: "/figmaAssets/timer-yellow.png",
        value: "1 899",
        label: "Draw pending",
        bg: "bg-[#11161B]", // Frames-05
        iconBg: "bg-[#FFC80026]",
        accent: "text-[#FFC800]"
    }
];

const historyData = Array(12).fill({
    date: "2 min ago",
    amount: "2 tickets",
    amountIcon: "/figmaAssets/ticket-icon.png",
    price: "569 USD",
    numbers: ["5", "3", "8", "9", "K", "J"],
    winningNumbers: ["5", "3", "8", "9", "K", "J"],
    profit: "+ 569 USD"
});

const faqData = [
    {
        question: "How do I purchase a lottery ticket?",
        answer: "Purchase tickets directly from the 'Play Now' section using your connected wallet. Simply select your numbers or use the 'Quick Pick' option and confirm the transaction."
    },
    {
        question: "What payment methods are supported?",
        answer: "We currently support major cryptocurrencies including USDT (Tether), USDC, and Bitcoin. More options are being added regularly."
    },
    {
        question: "How are the winning numbers generated?",
        answer: "Winning numbers are generated using a provably fair system powered by blockchain technology, ensuring total transparency and zero manipulation."
    },
    {
        question: "When do the lottery draws take place?",
        answer: "Draws happen daily at 00:00 UTC. You can see the countdown to the next draw on the home page and in your dashboard."
    },
    {
        question: "How do I claim my winnings?",
        answer: "Winnings are automatically credited to your in-app wallet immediately after the draw is verified. You can withdraw them to your external wallet at any time."
    }
];

export const UserDashboardPage = (): JSX.Element => {
    const [activeTab, setActiveTab] = React.useState("Dashboard");
    const [, setLocation] = useLocation();

    // Referral Stats Data
    const referralStats = [
        {
            icon: Users,
            value: "12 900 483",
            label: "Friends Invited",
            bg: "bg-[#11161B]",
            iconBg: "bg-[#0095FF26]",
            accent: "text-[#0095FF]"
        },
        {
            icon: Ticket,
            value: "1 900",
            label: "Free Tickets Earned",
            bg: "bg-[#11161B]",
            iconBg: "bg-[#FF6B2626]",
            accent: "text-[#FF6B26]"
        },
        {
            icon: Wallet, // Using Wallet as placeholder for Tether/USDT
            value: "24 569",
            label: "USDT Earned",
            bg: "bg-[#11161B]",
            iconBg: "bg-[#00D95F26]",
            accent: "text-[#00D95F]"
        },
        {
            icon: Trophy,
            value: "1 899",
            label: "Referral Rank",
            bg: "bg-[#11161B]",
            iconBg: "bg-[#FFC80026]",
            accent: "text-[#FFC800]"
        }
    ];

    const isMobile = useIsMobile();

    const content = (
        <div className="w-full flex flex-col gap-6 md:gap-8 px-4 py-6 md:px-8 md:py-12 max-w-[1400px] mx-auto min-h-screen">
            {/* Top Header Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#BDFF25] flex items-center justify-center shadow-[0_0_15px_rgba(189,255,37,0.4)]">
                        <User className="text-black w-6 h-6" />
                    </div>
                    <h1 className="text-white text-[24px] md:text-[32px] font-black font-['Montserrat'] tracking-tight">Your profile</h1>
                </div>

                {/* Badges Card */}
                <div className="w-full md:w-auto bg-[#141A20] border border-white/5 rounded-[16px] p-3 md:p-2 md:pr-6 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 ml-1">
                        <div className="w-8 h-8 rounded-lg bg-[#242D35] flex items-center justify-center shrink-0">
                            <Trophy className="w-4 h-4 text-[#FFC800]" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold font-['Montserrat'] text-[13px] md:text-[14px] leading-tight">Your badges</span>
                            <span className="text-[#BDFF25] text-[11px] font-bold font-['Outfit'] cursor-pointer hover:underline">View all</span>
                        </div>
                    </div>
                    <div className="flex items-center -space-x-3 shrink-0 pr-1">
                        <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center z-30 transition-transform hover:translate-y-[-2px]">
                            <img src="/figmaAssets/img8.png" className="w-full h-full object-contain" alt="Badge 1" />
                        </div>
                        <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center z-20 transition-transform hover:translate-y-[-2px]">
                            <img src="/figmaAssets/img9.png" className="w-full h-full object-contain" alt="Badge 2" />
                        </div>
                        <div className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center z-10 transition-transform hover:translate-y-[-2px]">
                            <img src="/figmaAssets/img10.png" className="w-full h-full object-contain" alt="Badge 3" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center w-full border-b border-white/5 overflow-x-auto no-scrollbar">
                {["Dashboard", "Refer a friend", "Support tickets", "Log out"].map((tab) => (
                    <div
                        key={tab}
                        className={`px-4 py-3 md:px-6 md:py-4 cursor-pointer relative shrink-0 ${activeTab === tab ? "active" : ""}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        <span className={`text-[14px] md:text-[16px] font-bold font-['Montserrat'] ${activeTab === tab ? "text-[#BDFF25]" : "text-[#525D68] hover:text-white"} transition-colors whitespace-nowrap`}>
                            {tab}
                        </span>
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#BDFF25] to-transparent shadow-[0_0_10px_rgba(189,255,37,0.5)]" />
                        )}
                    </div>
                ))}
            </div>

            {/* DASHBOARD CONTENT */}
            {activeTab === "Dashboard" && (
                <>
                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                        {stats.map((stat, idx) => (
                            <Card key={idx} className={`border-none rounded-[20px] p-5 flex flex-col justify-between h-[120px] relative overflow-hidden group hover:scale-[1.02] transition-transform ${stat.bg}`}>
                                <div className="flex items-start justify-between z-10 w-full mb-3">
                                    <div className={`w-[54px] h-[54px] rounded-[12px] flex items-center justify-center border border-white/10 shrink-0 ${stat.iconBg}`}>
                                        {/* Icon placeholder - using Lucide if image fails */}
                                        <Ticket className={`w-6 h-6 ${stat.accent}`} />
                                    </div>
                                    <span className="text-white text-[22px] md:text-[26px] font-black font-['Montserrat'] tracking-tight leading-none pt-2">{stat.value}</span>
                                </div>
                                <span className="text-[#A1B4C6] text-[13px] md:text-[14px] font-medium font-['Outfit'] z-10 leading-tight">{stat.label}</span>

                                {/* Background Glow */}
                                <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-20 blur-xl ${stat.iconBg}`} />
                            </Card>
                        ))}
                    </div>

                    {/* Purchase History */}
                    <div className="flex flex-col gap-6 w-full pt-4">
                        <h2 className="text-white text-[18px] md:text-[20px] font-['Montserrat'] font-bold">Purchase History</h2>


                        {/* Scrollable Container Wrapper */}
                        <div className="relative">
                            <div className="w-full overflow-x-auto custom-scrollbar pb-4">
                                <div className="min-w-[1200px]">
                                    {/* Table Header */}
                                    <div className="grid grid-cols-[1fr_1.2fr_1.2fr_2fr_2fr_1fr] gap-4 px-6 text-[#525D68] text-[13px] font-bold font-['Montserrat'] uppercase mb-2">
                                        <span>Date</span>
                                        <span>Ticket amount</span>
                                        <span>Ticket price</span>
                                        <span className="pl-8">Numbers</span>
                                        <span>Winning numbers</span>
                                        <span className="text-right">Profit</span>
                                    </div>

                                    {/* Table Body */}
                                    <div className="flex flex-col gap-0 pb-20">
                                        {historyData.slice(0, 9).map((row, idx) => {
                                            // 1-based index calculation for styling logic
                                            const isTransparent = (idx % 2 === 0);
                                            const isBlurred = (idx === 8); // 9th row

                                            return (
                                                <div
                                                    key={idx}
                                                    className={`grid grid-cols-[1fr_1.2fr_1.2fr_2fr_2fr_1fr] gap-4 items-center px-6 py-4 rounded-[16px] transition-colors group
                                                ${isTransparent ? 'bg-transparent border-none' : 'bg-[#141A20]/50 hover:bg-[#141A20] border border-white/5'}
                                                ${isBlurred ? 'blur-sm opacity-30 select-none pointer-events-none' : ''}
                                            `}
                                                >
                                                    {/* Date */}
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-[#525D68]" />
                                                        <span className="text-[#A1B4C6] font-medium font-['Outfit']">{row.date}</span>
                                                    </div>

                                                    {/* Ticket Amount */}
                                                    <div className="flex items-center gap-2">
                                                        <Ticket className="w-4 h-4 text-[#BDFF25]" />
                                                        <span className="text-white font-bold font-['Outfit']">{row.amount}</span>
                                                    </div>

                                                    {/* Ticket Price */}
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 rounded-full bg-[#FF8142]" />
                                                        <span className="text-white font-bold font-['Outfit']">{row.price}</span>
                                                    </div>

                                                    {/* Numbers */}
                                                    <div className="flex items-center gap-1 pl-8">
                                                        {row.numbers.map((num: string, i: number) => (
                                                            <div key={i} className="w-6 h-6 rounded-[4px] bg-[#242D35] flex items-center justify-center text-[#A1B4C6] text-[12px] font-bold font-['Montserrat'] border border-white/5">
                                                                {num}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Winning Numbers */}
                                                    <div className="flex items-center gap-1">
                                                        {row.winningNumbers.map((num: string, i: number) => (
                                                            <div key={i} className="w-6 h-6 rounded-[4px] bg-[#3D2514] flex items-center justify-center text-[#FF8142] text-[12px] font-bold font-['Montserrat'] border border-[#FF8142]/20">
                                                                {num}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Profit */}
                                                    <div className="flex items-center gap-2 justify-end">
                                                        <div className="w-2 h-2 rounded-full bg-[#BDFF25]" />
                                                        <span className="text-white font-bold font-['Outfit']">{row.profit}</span>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>

                            {/* View More Button - Overlay fixed absolute to the Wrapper relative parent */}
                            <div className="absolute bottom-[16px] left-0 right-0 h-[120px] bg-gradient-to-t from-[#0d1218] via-[#0d1218]/80 to-transparent flex items-end justify-center pb-8 z-20 pointer-events-none">
                                <Button className="h-[48px] px-8 bg-[#242D35] hover:bg-[#2e3943] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-2px] active:scale-95 pointer-events-auto">
                                    <span className="text-white font-bold font-['Montserrat'] text-[14px]">View more</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Profile Settings Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full pb-12">

                        {/* Update Profile Card */}
                        <Card className="bg-[#141A20] border border-white/5 rounded-[24px] p-5 md:p-8 flex flex-col gap-6">
                            <div className="flex flex-row flex-wrap items-center justify-between gap-4">
                                <h2 className="text-white text-[20px] font-['Montserrat'] font-bold">Update profile</h2>
                                <Button className="h-[40px] px-6 bg-[#242D35] hover:bg-[#2e3943] text-white font-bold font-['Montserrat'] text-[12px] rounded-[10px] border border-white/10 shadow-lg shrink-0">
                                    Save changes
                                </Button>
                            </div>

                            <div className="flex flex-col gap-5">
                                {/* Row 1 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">E-mail</label>
                                        <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                            <input
                                                type="email"
                                                placeholder="Email"
                                                className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">Phone mobile</label>
                                        <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                            <input
                                                type="tel"
                                                placeholder="+0000000000"
                                                className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 2 */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">First name</label>
                                        <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">Last name</label>
                                        <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Row 3 - Address */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">Adress</label>
                                    <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                        <input
                                            type="text"
                                            placeholder="Enter adress"
                                            className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Password Card */}
                        <Card className="bg-[#141A20] border border-white/5 rounded-[24px] p-5 md:p-8 flex flex-col gap-6">
                            <div className="flex flex-row flex-wrap items-center justify-between gap-4">
                                <h2 className="text-white text-[20px] font-['Montserrat'] font-bold">Password</h2>
                                <Button className="h-[40px] px-6 bg-[#242D35] hover:bg-[#2e3943] text-white font-bold font-['Montserrat'] text-[12px] rounded-[10px] border border-white/10 shadow-lg shrink-0">
                                    Save changes
                                </Button>
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">Current password</label>
                                    <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                        <input
                                            type="password"
                                            placeholder="Enter password"
                                            className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">New password</label>
                                    <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                        <input
                                            type="password"
                                            placeholder="Enter password"
                                            className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-[#A1B4C6] text-[13px] font-bold font-['Montserrat']">Repeat password</label>
                                    <div className="h-[50px] rounded-[12px] bg-[#0D1115] border border-white/5 flex items-center px-4">
                                        <input
                                            type="password"
                                            placeholder="Enter password"
                                            className="bg-transparent w-full text-white text-[14px] font-medium font-['Outfit'] placeholder:text-[#525D68] outline-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </>
            )}

            {/* REFER A FRIEND CONTENT */}
            {activeTab === "Refer a friend" && (
                <div className="flex flex-col gap-6 md:gap-8 w-full animate-in fade-in duration-300">
                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
                        {referralStats.map((stat, idx) => (
                            <Card key={idx} className={`border-none rounded-[20px] p-5 flex flex-col justify-between h-[120px] relative overflow-hidden group hover:scale-[1.02] transition-transform ${stat.bg}`}>
                                <div className="flex items-start justify-between z-10 w-full mb-3">
                                    <div className={`w-[54px] h-[54px] rounded-[12px] flex items-center justify-center border border-white/10 shrink-0 ${stat.iconBg}`}>
                                        <stat.icon className={`w-6 h-6 ${stat.accent}`} />
                                    </div>
                                    <span className="text-white text-[22px] md:text-[26px] font-black font-['Montserrat'] tracking-tight leading-none pt-2">{stat.value}</span>
                                </div>
                                <span className="text-[#A1B4C6] text-[13px] md:text-[14px] font-medium font-['Outfit'] z-10 leading-tight">{stat.label}</span>
                                <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-20 blur-xl ${stat.iconBg}`} />
                            </Card>
                        ))}
                    </div>

                    {/* Invite Hero Card */}
                    <Card
                        className="relative w-full rounded-[24px] overflow-hidden border-none shadow-2xl min-h-[400px] flex items-center p-6 md:p-12"
                        style={{ background: 'linear-gradient(90deg, #000000 0%, #382415 100%)' }}
                    >
                        {/* Background Elements */}
                        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#BDFF25 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                        {/* Left Side Black Gradient Overlay for Text Readability */}
                        <div className="absolute top-0 left-0 w-[60%] h-full bg-gradient-to-r from-black via-black/50 to-transparent z-10" />

                        {/* Content Left */}
                        <div className="flex flex-col gap-6 relative z-20 max-w-full md:max-w-[500px]">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-white text-[28px] sm:text-[32px] md:text-[40px] font-[900] font-['Montserrat'] leading-[1.1] tracking-tight">
                                    Invite Friends. Earn <br />
                                    Free Tickets & USDT
                                </h2>
                                <p className="text-[#A1B4C6] text-[15px] font-['Outfit'] leading-relaxed">
                                    Share your link.<br />
                                    When your friends play, you earn rewards instantly.
                                </p>
                            </div>

                            {/* Invite Link Section */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#0095FF]/20 flex items-center justify-center">
                                        <div className="text-[#0095FF] scale-125">🔗</div>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold font-['Montserrat']">Your Invite Link</span>
                                        <span className="text-[#525D68] text-[12px] font-['Outfit']">Earn rewards when your friends buy their first $5 ticket.</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 w-full bg-[#0D1115] border border-white/5 rounded-[12px] p-2 pr-2">
                                    <input
                                        type="text"
                                        readOnly
                                        value="link.com./32292320f"
                                        className="bg-transparent flex-1 text-white px-3 font-medium font-['Outfit'] outline-none text-[14px]"
                                    />
                                    <Button className="bg-[#FF6B26] hover:bg-[#e35d1f] text-white font-bold px-6 h-[40px] rounded-[8px]">
                                        Copy
                                    </Button>
                                </div>
                            </div>

                            {/* Social Buttons */}
                            <div className="flex items-center gap-3 pt-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-12 h-12 rounded-[12px] bg-[#1F262E] hover:bg-[#28303a] border border-white/5 flex items-center justify-center cursor-pointer transition-colors text-white/60 hover:text-white">
                                        {i === 1 && "📸"}
                                        {i === 2 && "𝕏"}
                                        {i === 3 && "✈️"}
                                        {i === 4 && "💬"}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Images Composition */}
                        <div className="absolute right-0 top-0 h-full w-[50%] hidden lg:block overflow-visible pointer-events-none">
                            {/* img12 as Background - Faded */}
                            <img
                                src="/figmaAssets/img12.png"
                                className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-[130%] w-auto object-cover opacity-80 z-10"
                                style={{ maskImage: 'linear-gradient(to left, black 20%, transparent 100%)' }}
                                alt="Background Decoration"
                            />

                            {/* img11 as Main Character Group */}
                            <img
                                src="/figmaAssets/img11.png"
                                className="absolute right-[-20px] bottom-0 h-[105%] w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
                                alt="Characters"
                            />

                            {/* Floating Money Images */}


                            <img
                                src="/figmaAssets/money1.png"
                                className="absolute bottom-[5%] right-[-5%] w-28 object-contain -rotate-12 blur-[2px] z-30"
                                alt="Money Blur"
                            />
                        </div>
                    </Card>

                    {/* Rewards Section */}
                    <div className="flex flex-col gap-6 w-full pb-12">
                        {/* Header */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-[12px] bg-[#3D2514] flex items-center justify-center border border-white/5">
                                <Gift className="text-[#FF6B26] w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-[20px] font-bold font-['Montserrat'] leading-none">Rewards You Can Earn</h2>
                                <span className="text-[#525D68] text-[14px] font-['Outfit']">Unlock free tickets & USDT by inviting friends</span>
                            </div>
                        </div>

                        {/* Main Grid: Milestones and Progress */}
                        <div className="flex flex-col lg:flex-row gap-6 w-full">
                            {/* Milestones Grid - Vertical Pill Design */}
                            {/* Milestones Grid - 2x2 Layout */}
                            <div className="grid grid-cols-2 gap-4 w-full">
                                {[
                                    { friends: "1", reward: "1 Free Ticket", theme: "blue", active: false },
                                    { friends: "3", reward: "2 Free Ticket", theme: "orange", active: true },
                                    { friends: "5", reward: "3 Free Ticket", theme: "purple", active: false },
                                    { friends: "10", reward: "$10 USDT", theme: "purple", active: false, isUsdt: true }
                                ].map((item, idx) => {
                                    const isBlue = item.theme === "blue";
                                    const isOrange = item.theme === "orange";
                                    const isPurple = item.theme === "purple";

                                    // Base styles
                                    // Border color #192025 is the requested base
                                    // 2nd Card (Orange) BG: #192025
                                    // 3rd Card (Purple) BG: #0D1216
                                    const baseBg = isOrange ? 'bg-[#192025]' : (isPurple ? 'bg-[#0D1216]' : 'bg-transparent');
                                    const borderColor = isOrange ? 'border-[#FF6B26]' : 'border-[#192025]';
                                    const activeClass = isOrange ? 'shadow-[0_0_15px_rgba(255,107,38,0.1)] z-10' : 'hover:border-white/20';

                                    return (
                                        <div
                                            key={idx}
                                            className={`
                                                relative flex flex-col items-center justify-center gap-[10px] p-[10px] rounded-[8px]
                                                border ${borderColor} ${baseBg} ${activeClass}
                                                transition-all duration-300 h-[102px]
                                            `}
                                        >
                                            {/* Top Section: Icon + text */}
                                            <div className="flex items-center gap-2 w-full justify-center">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0
                                                    ${isBlue ? 'bg-[#0095FF]/10 text-[#0095FF]' : ''}
                                                    ${isOrange ? 'bg-[#FF6B26] text-white' : ''}
                                                    ${isPurple ? 'bg-[#A855F7]/10 text-[#A855F7]' : ''}
                                                `}>
                                                    <Users className="w-4 h-4" />
                                                </div>

                                                <div className="flex flex-col leading-none">
                                                    <span className="text-white font-[800] font-['Montserrat'] text-[16px]">{item.friends}</span>
                                                    <span className="text-[#525D68] text-[10px] font-['Outfit'] whitespace-nowrap">friend invited</span>
                                                </div>
                                            </div>

                                            {/* Bottom Section: Reward */}
                                            <div className={`w-full h-[32px] rounded-[6px] flex items-center justify-center gap-2
                                                ${isBlue ? 'bg-[#BEFF251A] text-[#BDFF25]' : ''}
                                                ${isOrange ? 'bg-[linear-gradient(180deg,#1F1813_0%,#E36826_100%)] text-white shadow-sm' : ''}
                                                ${isPurple ? 'bg-[#192025] text-[#A1B4C6]' : ''}
                                            `}>
                                                {item.isUsdt ? (
                                                    <img src="/figmaAssets/img13.png" className="w-3.5 h-3.5 object-contain" alt="USDT" />
                                                ) : (
                                                    <img src="/figmaAssets/image-191.png" className="w-4 h-4 object-contain" alt="Ticket" />
                                                )}
                                                <span className="text-[10px] font-bold font-['Montserrat'] whitespace-nowrap overflow-hidden text-ellipsis px-1">{item.reward}</span>
                                            </div>

                                            {/* Active Border Glow Overlay */}
                                            {isOrange && <div className="absolute inset-0 rounded-[8px] border-[1px] border-[#FF6B26] pointer-events-none" />}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Active Progress Card (Sticky/Prominent) */}
                            <Card className="w-full lg:w-[400px] shrink-0 bg-[#0D1115] border border-white/5 rounded-[24px] overflow-hidden relative p-5 flex flex-col items-center text-center gap-3 h-auto justify-center lg:self-stretch">
                                {/* Top Glow - Oval Shape */}
                                <div
                                    className="absolute top-[-25px] left-1/2 -translate-x-1/2 w-[70%] h-[60px] rounded-[100%] bg-[#FF8018] opacity-30 pointer-events-none"
                                    style={{ filter: 'blur(40px)' }}
                                />

                                {/* Icon - Double Ticket */}
                                <div className="w-20 h-12 relative z-10 animate-bounce flex justify-center items-center mt-2" style={{ animationDuration: '3s' }}>
                                    {/* Back Ticket */}
                                    <img
                                        src="/figmaAssets/image-191.png"
                                        className="absolute w-12 h-[44px] object-contain rotate-[-15deg] left-2 top-1 opacity-80"
                                        alt="Back Ticket"
                                    />
                                    {/* Front Ticket */}
                                    <img
                                        src="/figmaAssets/image-191.png"
                                        className="absolute w-14 h-[52px] object-contain rotate-[10deg] right-2 z-10 drop-shadow-[0_4px_10px_rgba(255,107,38,0.4)]"
                                        alt="Front Ticket"
                                    />
                                </div>

                                <div className="flex flex-col gap-1 z-10">
                                    <h3 className="text-white text-[18px] font-[900] font-['Montserrat'] leading-tight">
                                        Invite 3 friends &<br />Get 2 Free Tickets
                                    </h3>
                                </div>

                                {/* Progress Bar wrapper */}
                                <div className="w-full flex flex-col gap-2 pt-1 z-10">
                                    <div className="w-full h-[8px] bg-[#242D35] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#FF6B26] w-[66%] rounded-full shadow-[0_0_10px_rgba(255,107,38,0.5)] relative">
                                            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white/50" />
                                        </div>
                                    </div>
                                    <span className="text-[#A1B4C6] text-[12px] font-medium font-['Outfit']">2 / 3 friends invited</span>
                                </div>
                            </Card>
                        </div>


                        {/* Friends & Rewards Lists Section */}
                        <div className="relative w-full pt-4 pb-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

                                {/* Your Invited Friends */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-white text-[18px] md:text-[20px] font-bold font-['Montserrat']">Your Invited Friends</h3>

                                    <div className="flex flex-col gap-2 w-full">
                                        {/* Header */}
                                        <div className="grid grid-cols-2 px-4 py-2">
                                            <span className="text-[#A1B4C6] text-sm font-['Outfit']">User</span>
                                            <span className="text-[#A1B4C6] text-sm font-['Outfit']">Date</span>
                                        </div>

                                        {/* List */}
                                        <div className="flex flex-col gap-2">
                                            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                                <div key={i} className={`grid grid-cols-2 px-4 py-3 bg-[#0D1115] border border-white/5 rounded-[12px] items-center ${i === 5 ? 'blur-[2.5px] opacity-30 select-none pointer-events-none' : ''}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-lg bg-[#FF6B26]/10 flex items-center justify-center overflow-hidden">
                                                            <img src="/figmaAssets/img11.png" className="w-full h-full object-cover" alt="User" />
                                                        </div>
                                                        <span className="text-white font-bold font-['Montserrat'] text-sm">Jackie</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-4 h-4 rounded-full bg-[#242D35] flex items-center justify-center">
                                                            <div className="w-2 h-2 rounded-full bg-[#A1B4C6]" />
                                                        </div>
                                                        <span className="text-[#A1B4C6] text-sm font-['Outfit']">2 min ago</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Referral Rewards */}
                                <div className="flex flex-col gap-4">
                                    <h3 className="text-white text-[18px] md:text-[20px] font-bold font-['Montserrat'] lg:opacity-0 lg:pointer-events-none lg:select-none">Referral Rewards</h3>

                                    <div className="flex flex-col gap-2 w-full overflow-x-auto no-scrollbar">
                                        <div className="min-w-[450px] lg:min-w-0 w-full flex flex-col gap-2">
                                            {/* Header */}
                                            <div className="grid grid-cols-3 px-4 py-2">
                                                <span className="text-[#A1B4C6] text-sm font-['Outfit']">Your reward</span>
                                                <span className="text-[#A1B4C6] text-sm font-['Outfit']">Ticket amount</span>
                                                <span className="text-[#A1B4C6] text-sm font-['Outfit']">Reward value</span>
                                            </div>

                                            {/* List */}
                                            <div className="flex flex-col gap-2">
                                                {[1, 2, 3, 4, 5, 6].map((_, i) => (
                                                    <div key={i} className={`grid grid-cols-3 px-4 py-3 bg-[#0D1115] border border-white/5 rounded-[12px] items-center ${i === 5 ? 'blur-[2.5px] opacity-30 select-none pointer-events-none' : ''}`}>
                                                        {/* Your Reward */}
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-[#BDFF25] shrink-0" />
                                                            <span className="text-white font-bold font-['Montserrat'] text-[12px] md:text-sm whitespace-nowrap">+ 569 USD</span>
                                                        </div>
                                                        {/* Ticket Amount */}
                                                        <div className="flex items-center gap-2">
                                                            <img src="/figmaAssets/image-191.png" className="w-3.5 h-3.5 object-contain" alt="Ticket" />
                                                            <span className="text-[#A1B4C6] text-[12px] md:text-sm font-['Outfit'] whitespace-nowrap">2 tickets</span>
                                                        </div>
                                                        {/* Reward Value */}
                                                        <div className="flex items-center gap-2">
                                                            <div className="w-2.5 h-2.5 rounded-full bg-[#BDFF25] shrink-0" />
                                                            <span className="text-white font-bold font-['Montserrat'] text-[12px] md:text-sm whitespace-nowrap">+ 569 USD</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Single View More Overlay for whole section */}
                            <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-gradient-to-t from-[#12171d] via-[#12171d]/90 to-transparent flex items-end justify-center pb-2 z-20 pointer-events-none">
                                <Button className="h-[48px] px-8 bg-[#242D35] hover:bg-[#2e3943] border border-white/10 rounded-[12px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all hover:translate-y-[-2px] active:scale-95 pointer-events-auto">
                                    <span className="text-white font-bold font-['Montserrat'] text-[14px]">View more</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* SUPPORT TICKETS CONTENT */}
            {activeTab === "Support tickets" && (
                <div className="flex flex-col gap-6 md:gap-8 w-full animate-in fade-in duration-300">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-[12px] bg-[#3D2514] flex items-center justify-center border border-white/5">
                                <Ticket className="text-[#FF6B26] w-6 h-6" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-white text-[20px] font-bold font-['Montserrat'] leading-none">Your tickets</h2>
                                <span className="text-[#525D68] text-[14px] font-['Outfit']">Manage your support requests and track their progress.</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                            <Button
                                onClick={() => setLocation("/create-ticket")}
                                className="w-full sm:w-auto h-[44px] px-6 text-white font-bold font-['Montserrat'] text-[14px] rounded-[10px] bg-[linear-gradient(180deg,#FF4B0F_0%,#FF6F3F_100%)] border border-[#FF8962] whitespace-nowrap"
                            >
                                Create ticket
                            </Button>
                            <Button
                                onClick={() => setLocation("/faq")}
                                className="w-full sm:w-auto h-[44px] px-6 text-white font-bold font-['Montserrat'] text-[14px] rounded-[10px] bg-[linear-gradient(180deg,#1F1813_0%,#E36826_100%)] border border-transparent shadow-lg whitespace-nowrap"
                                style={{
                                    backgroundImage: 'linear-gradient(#1F1813, #E36826), linear-gradient(180deg, rgba(255, 131, 63, 0.2) 0%, rgba(255, 179, 138, 0.2) 100%)',
                                    backgroundOrigin: 'border-box',
                                    backgroundClip: 'padding-box, border-box'
                                }}
                            >
                                Browse FAQ
                            </Button>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                        {[
                            { label: "All", count: 90, active: true },
                            { label: "Open", count: 89, active: false },
                            { label: "Pending", count: 33, active: false },
                            { label: "Resolved", count: 9, active: false },
                            { label: "Closed", count: 9, active: false }
                        ].map((filter, idx) => (
                            <button
                                key={idx}
                                className={`h-[40px] px-6 rounded-[10px] font-bold font-['Montserrat'] text-[13px] whitespace-nowrap transition-all
                                    ${filter.active
                                        ? "bg-[linear-gradient(180deg,#FF6B26_0%,#BD4E18_100%)] text-white shadow-[0_5px_15px_rgba(255,107,38,0.3)]"
                                        : "bg-[#141A20] text-[#525D68] hover:text-white border border-white/5"
                                    }
                                `}
                            >
                                {filter.label} ({filter.count})
                            </button>
                        ))}
                    </div>

                    {/* Tickets List */}
                    <div className="flex flex-col gap-5 w-full">
                        {[1, 2, 3, 4].map((item, idx) => {
                            const isExpired = idx >= 2;
                            return (
                                <Card key={idx} className="bg-[#141A20] border border-white/5 rounded-[20px] p-5 md:p-6 flex flex-col gap-6 group hover:border-white/10 transition-colors">
                                    <div className="flex flex-col lg:flex-row justify-between gap-6">
                                        {/* Left Content */}
                                        <div className="flex flex-col gap-3 flex-1">
                                            <h3 className="text-white text-[18px] md:text-[20px] font-bold font-['Montserrat'] leading-tight group-hover:text-[#BDFF25] transition-colors">
                                                Lottery prize not credited after draw
                                            </h3>
                                            <p className="text-[#525D68] text-[15px] font-['Outfit'] line-clamp-1 max-w-[600px]">
                                                Hello, I participated in the lottery draw that took place earlier today and...
                                            </p>
                                            <div className="flex items-center gap-2 md:gap-3 pt-1 overflow-visible">
                                                <div className="px-3 md:px-4 py-1.5 rounded-[8px] bg-[#0D1115] border border-white/5 whitespace-nowrap">
                                                    <span className="text-[#525D68] text-[11px] md:text-[12px] font-bold font-['Montserrat'] uppercase tracking-wider">ID: <span className="text-[#A1B4C6]">443905</span></span>
                                                </div>
                                                <div className="px-3 md:px-4 py-1.5 rounded-[8px] bg-[#0D1115] border border-white/5 flex items-center gap-2 whitespace-nowrap">
                                                    <span className="text-[#525D68] text-[11px] md:text-[12px] font-bold font-['Montserrat'] uppercase tracking-wider">Priority: <span className="text-white">High</span></span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Content */}
                                        <div className="flex flex-col justify-between items-start lg:items-end gap-6 min-w-0 lg:min-w-[280px]">
                                            <div className="flex items-center gap-3 flex-wrap justify-start lg:justify-end w-full">
                                                <div
                                                    className="h-[30px] md:h-[36px] px-3 md:px-5 rounded-[12px] border border-transparent flex items-center gap-2 md:gap-2.5 shadow-[0_4px_10px_rgba(227,104,38,0.2)] shrink-0"
                                                    style={{
                                                        backgroundImage: 'linear-gradient(#1F1813, #E36826), linear-gradient(180deg, rgba(255, 131, 63, 0.4) 0%, rgba(255, 179, 138, 0.2) 100%)',
                                                        backgroundOrigin: 'border-box',
                                                        backgroundClip: 'padding-box, border-box'
                                                    }}
                                                >
                                                    <Ticket className="w-3.5 h-3.5 md:w-4 h-4 text-white" />
                                                    <span className="text-white text-[11px] md:text-[13px] font-bold font-['Montserrat'] whitespace-nowrap">Ticket <span className="text-[#BDFF25]">66454244</span></span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#525D68] px-1 md:px-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-[13px] font-medium font-['Outfit']">2 min ago</span>
                                                </div>
                                                <div
                                                    className={`px-4 py-1.5 rounded-[8px] text-[12px] font-bold font-['Montserrat'] uppercase border border-transparent
                                                        ${isExpired ? 'text-white' : 'text-black'}
                                                    `}
                                                    style={isExpired ? {
                                                        backgroundImage: 'linear-gradient(#2B3540, #4A5968), linear-gradient(180deg, rgba(70, 84, 99, 0.2) 0%, rgba(152, 175, 198, 0.2) 100%)',
                                                        backgroundOrigin: 'border-box',
                                                        backgroundClip: 'padding-box, border-box'
                                                    } : {
                                                        backgroundImage: 'linear-gradient(#8FD811, #E1FF75), linear-gradient(180deg, rgba(213, 255, 63, 0.2) 0%, rgba(237, 255, 138, 0.2) 100%)',
                                                        backgroundOrigin: 'border-box',
                                                        backgroundClip: 'padding-box, border-box'
                                                    }}
                                                >
                                                    {isExpired ? 'Expired' : 'Active'}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                                                {!isExpired && (
                                                    <Button
                                                        onClick={() => setLocation("/faq")}
                                                        className="w-full sm:w-auto h-[44px] px-6 md:px-8 text-white text-[13px] md:text-[14px] font-bold font-['Montserrat'] rounded-[12px] border border-transparent transition-all hover:opacity-90 active:scale-95 whitespace-nowrap"
                                                        style={{
                                                            backgroundImage: 'linear-gradient(#2B3540, #4A5968), linear-gradient(180deg, rgba(70, 84, 99, 0.2) 0%, rgba(152, 175, 198, 0.2) 100%)',
                                                            backgroundOrigin: 'border-box',
                                                            backgroundClip: 'padding-box, border-box'
                                                        }}
                                                    >
                                                        Close as solved
                                                    </Button>
                                                )}
                                                <Button
                                                    onClick={() => setLocation("/faq")}
                                                    className={`w-full sm:w-auto h-[44px] px-6 md:px-8 text-white text-[13px] md:text-[14px] font-bold font-['Montserrat'] rounded-[12px] shadow-xl transition-all border active:scale-95 whitespace-nowrap
                                                        ${isExpired ? 'bg-[#242D35] border-white/5 hover:bg-[#2e3943]' : 'bg-[linear-gradient(180deg,#FF4B0F_0%,#FF6F3F_100%)] border-[#FF8962] hover:opacity-90'}
                                                    `}
                                                >
                                                    View details
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            )}

        </div>
    );

    if (isMobile) {
        return (
            <div className="bg-[#12171d] overflow-x-hidden w-full min-h-screen relative flex flex-col items-center">
                <AppHeaderSection />
                {content}
                <FooterLinksSection />
            </div>
        );
    }

    return (
        <DesktopLayout>
            <div className="flex flex-col w-full">
                {content}
                <FooterLinksSection />
            </div>
        </DesktopLayout>
    );
};
