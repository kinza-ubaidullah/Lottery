import { DesktopSidebar } from "./DesktopSidebar";
import { DesktopHeader } from "./DesktopHeader";
import { DesktopChatSidebar } from "./DesktopChatSidebar";

interface DesktopLayoutProps {
    children: React.ReactNode;
}

export const DesktopLayout = ({ children }: DesktopLayoutProps) => {
    return (
        <div className="min-h-screen bg-[#0d1218] text-white flex overflow-x-hidden">
            {/* Left Sidebar - Fixed positioning (w-16 is 64px) */}
            <div className="fixed left-0 top-0 h-screen w-16 z-50">
                <DesktopSidebar />
            </div>

            {/* Main Content Area - Fluid with margins to clear sidebars */}
            <div className="flex-1 flex flex-col min-w-0 ml-16 xl:mr-80">
                {/* Visual Depth Gradients with blur-[100px] */}
                <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                    <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-[#E36826]/10 blur-[100px] rounded-full" />
                    <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-[#8FD811]/5 blur-[100px] rounded-full" />
                </div>

                <DesktopHeader />
                <main className="flex-1 pt-[72px] relative flex justify-center">
                    <div className="w-full max-w-[1440px] p-4 md:p-8">
                        {children}
                    </div>
                </main>
            </div>

            {/* Right Chat Sidebar - Fixed positioning (w-80 is 320px) */}
            <div className="fixed right-0 top-0 h-screen w-80 z-50 hidden xl:block">
                <DesktopChatSidebar />
            </div>
        </div>
    );
};
