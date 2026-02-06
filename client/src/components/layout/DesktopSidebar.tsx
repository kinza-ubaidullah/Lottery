import { LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "wouter";

interface SidebarItemProps {
    iconSrc: string;
    label: string;
    isActive?: boolean;
    onClick?: () => void;
    variant?: "orange" | "purple" | "green";
    largeIcon?: boolean;
}

const SidebarItem = ({ iconSrc, label, isActive, onClick, variant = "purple", largeIcon = false }: SidebarItemProps) => {
    const cardGradients = {
        orange: "linear-gradient(180deg, #1F1813 0%, #E36826 100%)",
        activeHome: "linear-gradient(180deg, #5C230A 0%, #E36826 100%)",
        activeOrange: "linear-gradient(180deg, #5C230A 0%, #E36826 100%)",
        purple: "linear-gradient(180deg, #13191F 0%, #1F262E 100%)",
        green: "linear-gradient(180deg, #50B200 0%, #729100 100%)",
    };

    if (variant === "green") {
        return (
            <div
                onClick={onClick}
                className="group flex flex-col items-center justify-center gap-0.5 w-12 h-14 cursor-pointer transition-all duration-300 rounded-xl relative overflow-hidden shadow-lg hover:brightness-110 active:scale-95 border-t-[0.5px] border-white/20"
                style={{ background: cardGradients.green }}
            >
                <div className="flex flex-col items-center leading-none z-10">
                    <span className="text-[7px] font-black text-white uppercase tracking-tighter">LUCKY</span>
                    <span className="text-[7px] font-black text-white uppercase tracking-tighter">HOUR</span>
                </div>
                <div className="flex-1 flex items-center justify-center z-10">
                    <img src={iconSrc} className="w-8 h-8 object-contain" alt="Lucky Hour" />
                </div>
            </div>
        );
    }

    return (
        <div
            onClick={onClick}
            className={cn(
                "group flex flex-col items-center justify-between py-2 w-12 h-14 cursor-pointer transition-all duration-300 rounded-xl relative overflow-hidden border border-white/5",
                isActive && "shadow-[0_0_15px_rgba(227,104,38,0.3)] border-[#E36826]/30"
            )}
            style={{
                background: isActive
                    ? (variant === "orange" ? cardGradients.activeOrange : "linear-gradient(180deg, #1a2128 0%, #2a343e 100%)")
                    : cardGradients[variant === "orange" ? "orange" : "purple"]
            }}
        >
            <span className={cn(
                "text-[7px] font-black uppercase tracking-[0.05em] z-10 transition-opacity",
                isActive ? "text-white opacity-100" : "text-[#525D68] group-hover:text-white"
            )}>{label}</span>

            <div className="flex-1 flex items-center justify-center z-10 relative">
                <img
                    src={iconSrc}
                    className={cn(
                        "object-contain transition-transform group-hover:scale-110",
                        largeIcon ? "w-10 h-10" : "w-7 h-7",
                        isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                    )}
                    alt={label}
                />
            </div>
        </div>
    );
};

export const DesktopSidebar = () => {
    const [location, setLocation] = useLocation();

    const isActive = (path: string) => location === path;

    return (
        <aside
            className="fixed left-0 top-[72px] h-[calc(100vh-72px)] w-16 bg-[#0d1218] border-r border-white/5 flex flex-col items-center pt-8 pb-4 z-50 overflow-y-auto custom-scrollbar"
        >
            {/* Logo */}
            <Link href="/">
                <h1 className="font-['Montserrat'] font-[900] text-white text-[10px] tracking-tight leading-none uppercase mb-8 cursor-pointer hover:opacity-80 transition-opacity">
                    LOTTERY
                </h1>
            </Link>

            <nav className="flex flex-col gap-2 mb-6 items-center w-full">
                <SidebarItem variant="green" iconSrc="/figmaAssets/gift.png" label="Lucky Hour" />
                <SidebarItem variant="orange" iconSrc="/figmaAssets/img3.png" label="Home" isActive={isActive('/how-it-works')} onClick={() => setLocation('/how-it-works')} />
                <SidebarItem variant="purple" iconSrc="/figmaAssets/ball8.png" label="Lottery" isActive={isActive('/play-lottery')} onClick={() => setLocation('/play-lottery')} />
                <SidebarItem variant="purple" iconSrc="/figmaAssets/img4.png" label="Results" isActive={isActive('/lottery-results')} onClick={() => setLocation('/lottery-results')} />
                <SidebarItem variant="orange" iconSrc="/figmaAssets/champion.png" label="Leaders" largeIcon={true} isActive={isActive('/leaders')} onClick={() => setLocation('/leaders')} />
                <SidebarItem variant="purple" iconSrc="/figmaAssets/img5.png" label="Affiliate" />
                <SidebarItem variant="purple" iconSrc="/figmaAssets/image-180.png" label="FAQ" isActive={isActive('/faq')} onClick={() => setLocation('/faq')} />
            </nav>

            <div className="mt-auto mb-4 border-t border-white/5 pt-4 w-full flex flex-col items-center">
                <div className="group flex flex-col items-center gap-1 cursor-pointer text-[#525D68] hover:text-white transition-all">
                    <div className="w-8 h-8 rounded-lg bg-[#1A1F26] flex items-center justify-center border border-white/5 transition-all group-hover:bg-[#2a343e] mb-1">
                        <LogOut className="w-4 h-4" />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-[0.1em]">Log out</span>
                </div>
            </div>
        </aside>
    );
};
