import { DesktopSidebar } from "./DesktopSidebar";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopChatSidebar } from "./DesktopChatSidebar";
import { FooterLinksSection } from "@/pages/sections/FooterLinksSection";

interface DesktopLayoutProps {
    children: React.ReactNode;
}

export const DesktopLayout = ({ children }: DesktopLayoutProps) => {
    return (
        <div className="flex bg-[#0c0d12] h-screen text-gray-200 overflow-hidden font-['Inter']">
            {/* COLUMN 1: LEFT SIDEBAR */}
            <div className="w-[96px] h-full flex-shrink-0 border-r border-white/5">
                <DesktopSidebar />
            </div>

            {/* CENTER & RIGHT WRAPPER */}
            <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative">
                {/* HEADER */}
                <DesktopHeader />

                <div className="flex-1 flex min-w-0 h-full overflow-hidden">
                    {/* MAIN CONTENT AREA */}
                    <div className="flex-1 overflow-y-auto scrollbar-hide flex flex-col">
                        {/* Top Spacer for Fixed Header */}
                        <div className="h-[74px] shrink-0" />
                        <main className="relative flex-1 flex flex-col">
                            {/* Visual Depth Gradients */}
                            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-50">
                                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#E36826]/10 blur-[100px] rounded-full" />
                                <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-[#8FD811]/5 blur-[100px] rounded-full" />
                            </div>
                            <div className="max-w-[1474px] mx-auto w-full px-4 md:px-10 lg:px-12 flex-1 flex flex-col">
                                <div className="flex-1">
                                    {children}
                                </div>
                                <FooterLinksSection />
                            </div>
                        </main>
                    </div>

                    {/* COLUMN 3: RIGHT SIDEBAR (SCROLLABLE) */}
                    <div className="w-[333px] h-full flex-shrink-0 flex flex-col overflow-y-auto scrollbar-hide">
                        <DesktopChatSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};
