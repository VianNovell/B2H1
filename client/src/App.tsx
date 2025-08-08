import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import ServiceDetail from "@/pages/service-detail";
import Programs from "@/pages/programs";
import CorporateWellness from "@/pages/corporate-wellness";
import Doctors from "@/pages/doctors";
import Contact from "@/pages/contact";
import NonProfitCollaboration from "@/pages/non-profit";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/service-detail/:slug" component={ServiceDetail} />
      <Route path="/programs" component={Programs} />
      <Route path="/corporate-wellness" component={CorporateWellness} />
      <Route path="/doctors" component={Doctors} />
      <Route path="/contact" component={Contact} />
      <Route path="/non-profit" component={NonProfitCollaboration} />
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
