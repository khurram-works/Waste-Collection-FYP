import React from "react";
import { NavLink } from 'react-router-dom';

const Sidebar = ({ currentView, onViewChange }) => {
  const navItems = [
    { key: "admin", label: "Dashboard", icon: "dashboard" },
    { key: "manage", label: "Request Management", icon: "task_alt" },
    { key: "worker", label: "Worker Management", icon: "engineering" },
    { key: "report", label: "Reports", icon: "analytics" },
    { key: "audit", label: "Audit Log", icon: "history_edu" },
    
    
  ];

  return (
    <aside className="w-64 fixed h-[calc(100vh-64px)] overflow-y-auto border-r border-[#dde3e0] bg-white hidden lg:flex flex-col justify-between p-4">
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onViewChange(item.key)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-bold w-full text-left ${
              currentView === item.key
                ? "bg-[#f1f4f2] text-primary"
                : "text-[#121614] hover:bg-[#f1f4f2] transition-colors"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <p className="text-sm">{item.label}</p>
          </button>
        ))}
        <div className="my-4 border-t border-[#dde3e0]" />
        <button
          onClick={() => console.log("Logout")}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full text-left font-bold"
        >
          <span className="material-symbols-outlined">logout</span>
          <p className="text-sm">Log Out</p>
        </button>
      </nav>
      {/* System status indicator */}
      <div className="p-3 bg-primary/5 rounded-xl border border-primary/20">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-primary uppercase">
            Status
          </span>
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
        </div>
        
      </div>
    </aside>
  );
};

export default Sidebar;
