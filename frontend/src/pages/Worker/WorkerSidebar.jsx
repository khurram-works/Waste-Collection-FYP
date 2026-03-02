import React from "react";

const WorkerSidebar = ({ dashboardView, setDashboardView, worker }) => {
  return (
    <aside className="w-64 bg-white border-r border-[#dde3e0] flex flex-col justify-between p-4 shrink-0">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <h1 className="text-[#121614] text-base font-semibold">
            Worker Dashboard
          </h1>
          <p className="text-[#6a8174] text-xs font-normal">
            Municipal Waste Management
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1">
          <div
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
              dashboardView === "workertask"
                ? "bg-primary/10 text-primary"
                : "text-[#121614] hover:bg-gray-50"
            }`}
            onClick={() => setDashboardView("workertask")}
          >
            <span className="material-symbols-outlined">task_alt</span>
            <p className="text-sm font-semibold">My Tasks</p>
          </div>
          <div
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
              dashboardView === "taskhistory"
                ? "bg-primary/10 text-primary"
                : "text-[#121614] hover:bg-gray-50"
            }`}
            onClick={() => setDashboardView("taskhistory")}
          >
            <span className="material-symbols-outlined">history</span>
            <p className="text-sm font-medium">Task History</p>
          </div>
          <div className="my-3 border-t border-[#dde3e0]"></div>
          <div
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
              dashboardView === "profile"
                ? "bg-primary/10 text-primary"
                : "text-[#121614] hover:bg-gray-50"
            }`}
            onClick={() => setDashboardView("profile")}
          >
            <span className="material-symbols-outlined">person</span>
            <p className="text-sm font-medium">My Profile</p>
          </div>
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 cursor-pointer">
            <span className="material-symbols-outlined">logout</span>
            <p className="text-sm font-medium">Log Out</p>
          </div>
        </nav>
      </div>

      {/* Shift Status Box */}
      <div className="bg-background-light p-3 rounded-lg">
        <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">
          Shift Status
        </p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <span className="text-xs font-medium">Active Shift</span>
        </div>
      </div>
    </aside>
  );
};

export default WorkerSidebar;