import { AppHeaderSection } from "./sections/AppHeaderSection";
import { FooterLinksSection } from "./sections/FooterLinksSection";
import { GameInstructionsSection } from "./sections/GameInstructionsSection";
import { LatestBitcoinBlockSection } from "./sections/LatestBitcoinBlockSection";
import { LotteryPlaySection } from "./sections/LotteryPlaySection";
import { LotteryVerificationSection } from "./sections/LotteryVerificationSection";
import { PreviousWinsListSection } from "./sections/PreviousWinsListSection";

export const HomePageMobile = (): JSX.Element => {
  return (
    <div className="bg-[#12171d] overflow-hidden w-full min-w-[375px] min-h-screen relative flex flex-col">
      <AppHeaderSection />
      <LotteryPlaySection />
      <LotteryVerificationSection />
      <GameInstructionsSection />
      <LatestBitcoinBlockSection />
      <PreviousWinsListSection />
      <FooterLinksSection />
    </div>
  );
};
