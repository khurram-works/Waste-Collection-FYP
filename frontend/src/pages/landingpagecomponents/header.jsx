import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleregister = () => {
    // login logic here
    navigate("/register");
  };

  const handleLogin = () => {
    // login logic here
    navigate("/login");
  };

  return (
    //   <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-solid border-[#f1f4f2] dark:border-[#2a362e] px-4 md:px-10 lg:px-40 py-3">
    //   <div className="flex items-center justify-between whitespace-nowrap max-w-300 mx-auto">
    //     <div className="flex items-center gap-2 text-primary">
    //       <div className="">
    //         <div className='items-center justify-center h-full w-full'>
    //         <span className='material-symbols-outlined pt-1 text-3xl'>recycling</span>
    //         </div>
    //       </div>
    //       <h2 className="text-[#121614]  text-lg font-bold leading-tight tracking-[-0.015em]">
    //         Smart Waste Platform
    //       </h2>
    //     </div>
    //     <div className="flex flex-1 justify-end gap-8 items-center">
    //       <nav className="hidden md:flex items-center gap-9">
    //         <a className="text-[#121614]  text-sm font-medium leading-normal hover:text-primary transition-colors" href="#how-it-works">
    //           How It Works
    //         </a>
    //         <a className="text-[#121614]  text-sm font-medium leading-normal hover:text-primary transition-colors" href="#municipalities">
    //           For Municipalities
    //         </a>
    //       </nav>
    //       <div className="flex gap-2">
    //         <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-transparent border border-[#d1d5db] dark:border-gray-600 text-[#121614]  text-sm font-bold hover:text-white hover:bg-primary transition-all" onClick={handleLogin}>
    //           Login
    //         </button>
    //         <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-all shadow-sm" onClick={handleregister}>
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header className="sticky top-0 z-50 w-full bg-background-light border-b border-[#eaf1ed]">
      <div className="layout-container flex justify-center px-4 md:px-10 py-3">
        <div className="flex items-center justify-between w-full max-w-300">
          <div className="flex items-center gap-2 text-[#101814]">
            <div className="pt-1 text-primary">
              <span className="material-symbols-outlined text-3xl">
                recycling
              </span>
            </div>
            <h2 className="text-[#101814] text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">
              Smart Waste Platform
            </h2>
          </div>
          <div className="flex flex-1 justify-end items-center gap-4 md:gap-8">
            <nav className="hidden md:flex items-center gap-6 lg:gap-9">
              <a
                className="text-[#101814] text-sm font-medium leading-normal hover:text-primary transition-colors"
              
              >
                Home
              </a>
              <a
                className="text-[#101814] text-sm font-medium leading-normal hover:text-primary transition-colors"
              
              >
                How It Works
              </a>
              <a
                className="text-[#101814] text-sm font-medium leading-normal hover:text-primary transition-colors"
                
              >
                For Municipalities
              </a>
            </nav>
            <div className="flex gap-3">
              <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent border border-[#d4e2da] text-[#101814] hover:bg-[#eaf1ed] transition-colors text-sm font-bold leading-normal tracking-[0.015em]" onClick={handleLogin}>
                <span className="truncate">Login</span>
              </button>
              <button className="flex min-w-21 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-primary-dark transition-colors text-[#f9fbfa] text-sm font-bold leading-normal tracking-[0.015em]" onClick={handleregister}>
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
