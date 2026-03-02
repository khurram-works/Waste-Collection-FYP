import React from 'react';
import Header from './landingpagecomponents/header.jsx';
import Hero from './landingpagecomponents/hero.jsx';
import ProcessSection from './landingpagecomponents/processsection.jsx';
import WasteTypesSection from './landingpagecomponents/wastetypessection.jsx';
import CallToAction from './landingpagecomponents/calltoaction.jsx';
import Footer from './landingpagecomponents/footer.jsx';


const SmartWastePlatform = () => {

 
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-[#121614] dark:text-white transition-colors duration-200 min-h-screen">
      <Header />
      <Hero />
      <WasteTypesSection />
      <ProcessSection />
      <CallToAction />
      <Footer />
    </div>
  );
};


export default SmartWastePlatform;