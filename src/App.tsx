import ReactGA from "react-ga4";
import { useEffect } from "react";
import AnalyticsTracker from "@/components/AnalyticsTracker";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/models/theme-provider";
import ScrollToTop from "@/models/scrollup";
import Navbar from "@/models/navbar";
import Footer from "@/models/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import TeamStructure from "@/pages/teamstructure";
import Solutions from "@/pages/solutions";
import Contact from "@/pages/contact";
import FloatingSidebar from "@/components/FloatingSidebar";
import { AccessibilityProvider } from "@/lib/AccessibilityContext";
import AccessibilityMenu from "@/components/AccessibilityMenu";
import NetworkStatus from "@/components/NetworkStatus";
import { Toaster } from 'sonner';
import SolutionDetail from "@/pages/SolutionDetail";


{/** solutions*/ }
import Applications from "@/solutions/software_development";
import Networks from "@/solutions/networking";
import Infrustructure from "@/solutions/hardware_software_infrastracture";
import ERP from "@/solutions/enterprise_solutions";
import Cybersecurity from "@/solutions/cyber_security";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-F43FTRHZ1Y");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname
    });
  }, []);

  return (
    <ThemeProvider defaultTheme="system">
      <AccessibilityProvider>
        <Router>
          <AnalyticsTracker />
          <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
            <Navbar />
            <ScrollToTop />
            <AccessibilityMenu />
            <NetworkStatus />
            <Toaster position="top-center" expand={false} richColors />
            {/** Scroll to top button */}
            <main className="flex-grow">

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/teamstructure" element={<TeamStructure />} />
                <Route path="/solutions" element={<Solutions />} />
                {/**path for contact */}
                <Route path="/contact" element={<Contact />} />


                {/**path for solutions */}
                <Route path="/Applications" element={<Applications />} />
                <Route path="/Cybersecurity" element={<Cybersecurity />} />
                <Route path="/Infrastructure" element={<Infrustructure />} />
                <Route path="/Enterprisesolutions" element={<ERP />} />
                <Route path="/Networking" element={<Networks />} />

                {/** Dynamic Solutions Routes */}
                <Route path="/solutions/:solutionId" element={<SolutionDetail />} />

              </Routes>
            </main>
            <Footer />
            <FloatingSidebar />
          </div>
        </Router>
      </AccessibilityProvider>
    </ThemeProvider>
  );
}

export default App;