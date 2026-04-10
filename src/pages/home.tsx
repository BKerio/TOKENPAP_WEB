// Home.tsx
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import GetStartedSection from "@/components/GetStartedSection";
import CompanyMetricsSection from "@/components/CompanyMetricsSection";
import ProductHighlightSection from "@/components/ProductHighlightSection";
import PartnersSection from "@/components/PartnersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ServicesSection from "@/components/ServicesSection";


const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <GetStartedSection />
      <CompanyMetricsSection />
      <ProductHighlightSection />
      <PartnersSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <TestimonialsSection />
    </main>
  );
};

export default Home;
