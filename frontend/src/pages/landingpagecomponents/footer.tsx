import React from "react";

function Footer() {
  return (
    // <footer className="bg-white  border-t border-gray-100  py-12">
    //   <div className="max-w-300 mx-auto px-6 text-center">
    //     <div className="flex justify-center gap-4 text-primary mb-6">
    //       <span className="material-symbols-outlined">eco</span>
    //       <span className="material-symbols-outlined">public</span>
    //       <span className="material-symbols-outlined">compost</span>
    //     </div>
    //     <p className="text-gray-500  text-sm font-medium">
    //       © 2025 Smart Waste Platform. All rights reserved. Built for a
    //       sustainable future.
    //     </p>
    //   </div>
    // </footer>

    <footer className="w-full bg-background-light border-t border-[#eaf1ed] py-8">
      <div className="layout-container px-4 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#4b5952]">
        <div className="flex items-center gap-2">
          <div className="size-5 text-primary">
            <span className="material-symbols-outlined text-xl">recycling</span>
          </div>
          <span className="font-bold text-[#101814]">Smart Waste Platform</span>
        </div>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Terms of Service
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Contact Support
          </a>
        </div>
        <div>© 2026 Smart Waste Platform. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
