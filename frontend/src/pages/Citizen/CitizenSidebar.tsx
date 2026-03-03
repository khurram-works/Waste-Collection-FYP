import React from "react";

const CitizenSidebar = ({ currentView, setCurrentView }) => {
  const navItems = [
    { id: "Dashboard", icon: "grid_view", label: "Dashboard" },
    { id: "Request", icon: "add_circle", label: "Submit New Request" },
    { id: "RequestStatus", icon: "format_list_bulleted", label: "My Requests & Status" },
    { id: "Earnings", icon: "account_balance_wallet", label: "Earnings Wallet" },
    { id: "Guidelines", icon: "menu_book", label: "Recycling Guidelines" },
    { id: "Profile", icon: "person", label: "My Profile" },
  ];

  return (
    <aside className="w-72 bg-white border-r border-[#dde3e0] flex flex-col justify-between p-4 overflow-y-auto">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col px-3">
          <h1 className="text-[#121614] text-base font-bold">Citizen Portal</h1>
          <p className="text-[#6a8174] text-xs font-medium uppercase tracking-wider">
            Main Menu
          </p>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                currentView === item.id
                  ? "bg-primary text-white"
                  : "bg-white text-[#121614] hover:bg-background-light"
              }`}
              onClick={() => setCurrentView(item.id)}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <p className="text-sm font-medium">{item.label}</p>
            </a>
          ))}
          <div className="my-4 border-t border-[#dde3e0]"></div>
          <a
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Log Out</p>
          </a>
        </nav>
      </div>

      {/* Impact Goal Box */}
      <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
        <p className="text-[10px] uppercase font-bold text-primary mb-1">
          Impact Goal
        </p>
        <p className="text-xs text-[#121614]">
          You've saved <span className="font-bold">12kg</span> of CO2 this month!
        </p>
      </div>
    </aside>
  );
};

export default CitizenSidebar;