import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Preloader } from "@/components/ui/preloader";

import { HomePage } from "@/pages/HomePage";
import { PlayLotteryPage } from "./pages/PlayLotteryPage";
import { LotteryResultsPage } from "./pages/LotteryResultsPage";
import { UserDashboardPage } from "./pages/UserDashboardPage";
import { FAQPage } from "./pages/FAQPage";

import { CreateTicketPage } from "./pages/CreateTicketPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { LeadersPage } from "./pages/LeadersPage";
import { LotteryAwardsPage } from "./pages/LotteryAwardsPage";
import { BrowseFAQPage } from "./pages/BrowseFAQPage";
import { VerifyResultsPage } from "./pages/VerifyResultsPage";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={HomePage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/play-lottery" component={PlayLotteryPage} />
      <Route path="/lottery-results" component={LotteryResultsPage} />
      <Route path="/dashboard" component={UserDashboardPage} />
      <Route path="/verify-results" component={VerifyResultsPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/browse-faq" component={BrowseFAQPage} />
      <Route path="/create-ticket" component={CreateTicketPage} />
      <Route path="/leaders" component={LeadersPage} />
      <Route path="/lottery-awards" component={LotteryAwardsPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Preloader />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
