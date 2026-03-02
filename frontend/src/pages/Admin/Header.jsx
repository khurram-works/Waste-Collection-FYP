import React from "react";

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-solid border-[#dde3e0] bg-white px-6 py-3">
    <div className="flex items-center justify-between mx-auto max-w-360">
      {/* Logo Section */}
      <div className="flex items-center gap-2 text-[#121614]">
        <div className=" text-primary">
          <div className='items-center justify-center h-full w-full'>
          <span className='material-symbols-outlined pt-1 text-3xl'>recycling</span>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-lg font-bold leading-tight tracking-tight">
            Smart Waste Platform
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary w-fit">
            Admin Portal
          </span>
        </div>
      </div>

      {/* User Profile Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-[#121614] hidden sm:block">
            Officer Sarah Mitchell
          </span>
          <button className="flex items-center justify-center rounded-full h-10 w-10 bg-[#f1f4f2] text-[#121614] border border-[#dde3e0] overflow-hidden">
            <span className="material-symbols-outlined">person</span>
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9W8uQ2CcLNAIJUklFjz2mTLcxdbl7naAozO7wqDwMOktVxCexaQbca4F-rXsP-5zvfc_G5gwVue_67ThV497TduUKc5LHXLCwz43t_WiN8VtD-B6sIBh2chY_1da0i3DP4o5AYdi9WLbciNLUq_ZtCQEjfmqY91UHNYCEq9EFYMhVcgJTXK0mKw5hoy4aWzNpoVPxy7tGNhMw3_eXmkzdm0HHD9tYnjekEXSSa2jB5qWbqn65h9GmD-Q6xeIhLPeEULJHisGE")',
          }}
        ></div>
      </div>
    </div>
  </header>
);

export default Header;
