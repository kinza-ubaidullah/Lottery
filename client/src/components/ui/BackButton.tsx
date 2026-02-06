import { ChevronLeft } from "lucide-react";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";

interface BackButtonProps {
    className?: string;
    label?: string;
    href?: string;
}

export const BackButton = ({ className, label = "Back", href }: BackButtonProps) => {
    const [, setLocation] = useLocation();

    return (
        <button
            onClick={() => href ? setLocation(href) : window.history.back()}
            className={cn(
                "group flex items-center gap-2 text-[#525D68] hover:text-[#BDFF25] transition-all duration-300 bg-[#141A20]/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/5 hover:border-[#BDFF25]/30 hover:translate-x-[-4px]",
                className
            )}
        >
            <div className="w-7 h-7 rounded-full bg-[#1A1F26] flex items-center justify-center group-hover:bg-[#BDFF25] transition-all duration-300">
                <ChevronLeft className="w-4 h-4 group-hover:text-black transition-colors" />
            </div>
            <span className="font-bold font-['Montserrat'] text-[12px] md:text-[13px] uppercase tracking-wider">{label}</span>
        </button>
    );
};
