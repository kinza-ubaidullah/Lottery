import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { HomePage } from "@/pages/HomePage";
import { PlayLotteryPage } from "./pages/PlayLotteryPage";
import { LotteryResultsPage } from "./pages/LotteryResultsPage";
import { UserDashboardPage } from "./pages/UserDashboardPage";
import { FAQPage } from "./pages/FAQPage";

import { CreateTicketPage } from "./pages/CreateTicketPage";
import { HowItWorksPage } from "./pages/HowItWorksPage";

function Router() {
  return (
    <Switch>
      {/* Add pages below */}
      <Route path="/" component={HomePage} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/play-lottery" component={PlayLotteryPage} />
      <Route path="/lottery-results" component={LotteryResultsPage} />
      <Route path="/dashboard" component={UserDashboardPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/create-ticket" component={CreateTicketPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
