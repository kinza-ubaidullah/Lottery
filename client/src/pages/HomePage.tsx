import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { GameInstructionsSection } from "./sections/GameInstructionsSection";
import { LatestBitcoinBlockSection } from "./sections/LatestBitcoinBlockSection";
import { LotteryPlaySection } from "./sections/LotteryPlaySection";
import { LotteryVerificationSection } from "./sections/LotteryVerificationSection";
import { PreviousWinsListSection } from "./sections/PreviousWinsListSection";

export const HomePage = (): JSX.Element => {
  return (
    <div className="bg-[#12171d] overflow-x-hidden w-full min-h-screen relative flex flex-col items-center">
      <div className="w-full flex flex-col items-center">
        <AppHeaderSection />
        <main className="w-full max-w-[1280px] flex flex-col items-center gap-8 px-4 py-8 md:px-8 md:py-12">
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="w-full flex flex-col gap-8">
              <LotteryPlaySection />
              <LotteryVerificationSection />
              <GameInstructionsSection />
            </div>
            <div className="w-full flex flex-col gap-8">
              <LatestBitcoinBlockSection />
            </div>
          </div>
          <PreviousWinsListSection />
        </main>
        <FooterLinksSection />
      </div>
    </div>
  );
};
