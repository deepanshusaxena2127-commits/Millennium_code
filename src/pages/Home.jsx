import React from 'react';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import SecurityCompliance from '@/components/sections/SecurityCompliance';
import Services from '@/components/sections/Services';
import Industries from '@/components/sections/Industries';
import CompanyInfo from '@/components/sections/CompanyInfo';
import TechStack from '@/components/sections/TechStack';
import WorkShowcase from '@/components/sections/WorkShowcase';
import Insights from '@/components/sections/Insights';

const Home = () => {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <SecurityCompliance />
      <Services />
      <TechStack />
      <Industries />
      <CompanyInfo />
      <WorkShowcase />
      <Insights />
    </>
  );
};

export default Home;
