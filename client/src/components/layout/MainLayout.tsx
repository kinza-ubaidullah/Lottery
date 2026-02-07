import { useIsMobile } from "@/hooks/use-mobile";
import { DesktopLayout } from "./DesktopLayout";
import { AppHeaderSection } from "@/pages/sections/AppHeaderSection";
import { FooterLinksSection } from "@/pages/sections/FooterLinksSection";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <div className="bg-[#12171d] overflow-x-hidden w-full min-h-screen relative flex flex-col items-center">
                <div className="w-full flex flex-col items-center">
                    <AppHeaderSection />
                    <main className="w-full max-w-[1280px] flex flex-col items-center gap-12 px-4 py-8 md:px-8 md:py-16">
                        {children}
                    </main>
                    <FooterLinksSection />
                </div>
            </div>
        );
    }

    return (
        <DesktopLayout>
            {children}
        </DesktopLayout>
    );
};
