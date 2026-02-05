import { useIsMobile } from "@/hooks/use-mobile";
import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { GameInstructionsSection } from "./sections/GameInstructionsSection";
import { LatestBitcoinBlockSection } from "./sections/LatestBitcoinBlockSection";
import { LotteryPlaySection } from "./sections/LotteryPlaySection";
import { LotteryVerificationSection } from "./sections/LotteryVerificationSection";
import { PreviousWinsListSection } from "./sections/PreviousWinsListSection";
import { DesktopLayout } from "@/components/layout/DesktopLayout";
import {
  DesktopBannerSection,
} from "./sections/DesktopHomeSections";
import { GameDemoSection } from "./sections/GameDemoSection";
import { PrizeTiersSection } from "./sections/PrizeTiersSection";
import { useState, useEffect } from "react";
import { SelectGameModal } from "@/components/modals/SelectGameModal";

export const HomePage = (): JSX.Element => {
  const isMobile = useIsMobile();
  const [isSelectGameOpen, setIsSelectGameOpen] = useState(false);

  useEffect(() => {
    // Show the game selection popup on home screen load
    const timer = setTimeout(() => {
      setIsSelectGameOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isMobile) {
    return (
      <div className="bg-[#12171d] overflow-x-hidden w-full min-h-screen relative flex flex-col items-center">
        <div className="w-full flex flex-col items-center">
          <AppHeaderSection />
          <main className="w-full max-w-[1280px] flex flex-col items-center gap-12 px-4 py-8 md:px-8 md:py-16">
            <div className="w-full flex flex-col gap-8 md:gap-12">
              <LotteryPlaySection />
              <LotteryVerificationSection />
              <GameInstructionsSection />
              <LatestBitcoinBlockSection />
              <PreviousWinsListSection />
            </div>
          </main>
          <FooterLinksSection />
        </div>
        <SelectGameModal isOpen={isSelectGameOpen} onClose={() => setIsSelectGameOpen(false)} />
      </div>
    );
  }

  return (
    <DesktopLayout>
      <div className="w-full flex flex-col gap-12">
        <DesktopBannerSection />
        <GameDemoSection />
        <PrizeTiersSection />
        <PreviousWinsListSection />
        <FooterLinksSection />
      </div>
      <SelectGameModal isOpen={isSelectGameOpen} onClose={() => setIsSelectGameOpen(false)} />
    </DesktopLayout>
  );
};
