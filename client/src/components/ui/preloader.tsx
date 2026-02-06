
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

interface PreloaderProps {
    className?: string;
    minDisplayTime?: number; // Minimum time to show the preloader in ms
}

export const Preloader = ({ className, minDisplayTime = 2000 }: PreloaderProps) => {
    const [show, setShow] = useState(true);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        // Ensure the preloader stays for at least minDisplayTime
        const timer = setTimeout(() => {
            setIsFading(true);
            // Remove from DOM after transition
            setTimeout(() => setShow(false), 500);
        }, minDisplayTime);

        return () => clearTimeout(timer);
    }, [minDisplayTime]);

    if (!show) return null;

    return (
        <div
            className={cn(
                "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F1419]",
                "transition-opacity duration-500 ease-in-out",
                isFading ? "opacity-0 pointer-events-none" : "opacity-100",
                className
            )}
        >
            <div className="relative flex flex-col items-center justify-center">
                {/* Outer Glow Ring */}
                <div className="absolute w-32 h-32 rounded-full border-4 border-primary/20 animate-spin-slow blur-sm"></div>
                <div className="absolute w-24 h-24 rounded-full border-2 border-primary/40 animate-spin-reverse blur-[1px]"></div>

                {/* Core Loading Element */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                    <div className="w-full h-full border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
                    <div className="absolute w-3/4 h-3/4 bg-primary/10 rounded-full animate-pulse"></div>
                </div>

                {/* Loading Text */}
                <div className="mt-8 flex flex-col items-center gap-2">
                    <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary animate-shine bg-[length:200%_auto]">
                        LOADING...
                    </h2>
                    <div className="flex gap-1 h-1">
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                        <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
