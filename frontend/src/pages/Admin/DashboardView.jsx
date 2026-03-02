import React, { useState } from "react";
import AddWorkerDialog from "./AddWorkerDialog";

const DashboardView = ({ onViewChange }) => {
  const [isAddWorkerOpen, setIsAddWorkerOpen] = useState(false);

  return (
    <main className="flex-1 lg:ml-64 p-6 min-h-screen">
      {/* Quick actions */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#121614] mb-4">
          Operations Overview
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-white font-bold text-sm rounded-lg hover:bg-[#256e45] transition-shadow shadow-sm">
            <span className="material-symbols-outlined text-lg">
              add_circle
            </span>
            Manage New Requests
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#121614] border border-[#dde3e0] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">
              assignment_ind
            </span>
            Assign Pending Tasks
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#121614] border border-[#dde3e0] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-lg">
              description
            </span>
            Generate Report
          </button>
          <button
            onClick={() => setIsAddWorkerOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-[#121614] border border-[#dde3e0] font-bold text-sm rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-lg">
              person_add
            </span>
            Add New Worker
          </button>
        </div>
      </div>

      {/* Stats cards, charts, table – copy from original */}
      {/* ... */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
          <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
            Total Requests Today
          </p>
          <div className="flex items-end gap-2">
            <p className="text-[#121614] text-3xl font-bold leading-tight">
              47
            </p>
            <span className="mb-1 text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
              12 Pending
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
          <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
            Active Workers
          </p>
          <div className="flex items-end gap-2">
            <p className="text-[#121614] text-3xl font-bold leading-tight">
              14/18
            </p>
            <span className="mb-1 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
              On Duty
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
          <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
            Recycling Rate
          </p>
          <div className="flex items-end gap-2">
            <p className="text-[#121614] text-3xl font-bold leading-tight">
              68%
            </p>
            <span className="mb-1 text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              Of Total Waste
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
          <p className="text-[#6a8174] text-sm font-semibold uppercase tracking-wider">
            Incentives Paid
          </p>
          <div className="flex items-end gap-2">
            <p className="text-[#121614] text-3xl font-bold leading-tight">
              Rs 8,250
            </p>
            <span className="mb-1 text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              This Week
            </span>
          </div>
        </div>
      </div>

      {/* // Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="bg-white rounded-xl border border-[#dde3e0] p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-[#121614] text-lg font-bold">
                Pickup Requests This Week
              </h3>
              <p className="text-[#6a8174] text-sm font-medium">
                320 Total (Last 7 Days)
              </p>
            </div>
            <button className="text-primary text-sm font-bold">
              View Data
            </button>
          </div>
          <div className="grid grid-cols-7 gap-4 items-end h-48 px-2">
            {/* Note: In React, 'style' takes an object, not a string */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                style={{ height: "45%" }}
              ></div>
              <span className="text-[#6a8174] text-[11px] font-bold">MON</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                style={{ height: "60%" }}
              ></div>
              <span className="text-[#6a8174] text-[11px] font-bold">TUE</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-primary/20 rounded-t border-t-2 border-primary"
                style={{ height: "85%" }}
              ></div>
              <span className="text-[#6a8174] text-[11px] font-bold">WED</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-primary rounded-t"
                style={{ height: "100%" }}
              ></div>
              <span className="text-primary text-[11px] font-black">THU</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                style={{ height: "55%" }}
              ></div>
              <span className="text-[#6a8174] text-[11px] font-bold">FRI</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                style={{ height: "30%" }}
              ></div>
              <span className="text-[#6a8174] text-[11px] font-bold">SAT</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-full bg-[#f1f4f2] rounded-t border-t-2 border-primary"
                style={{ height: "40%" }}
              ></div>
              <span className="text-[#6a8174] text-[11px] font-bold">SUN</span>
            </div>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-white rounded-xl border border-[#dde3e0] p-6 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-[#121614] text-lg font-bold">
                Waste Type Distribution
              </h3>
              <p className="text-[#6a8174] text-sm font-medium">
                Volume by categorization
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 py-2">
            <div className="relative flex items-center justify-center w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  className="text-[#f1f4f2]"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="20"
                ></circle>
                <circle
                  className="text-primary"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeDasharray="440"
                  strokeDashoffset="110"
                  strokeWidth="20"
                ></circle>
                <circle
                  className="text-emerald-300"
                  cx="80"
                  cy="80"
                  fill="transparent"
                  r="70"
                  stroke="currentColor"
                  strokeDasharray="440"
                  strokeDashoffset="300"
                  strokeWidth="20"
                ></circle>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-2xl font-bold">68%</span>
                <span className="text-[10px] text-[#6a8174] font-bold uppercase">
                  Recyclable
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-primary"></span>
                  <span className="text-[#121614] font-medium">
                    PET (Plastic)
                  </span>
                </div>
                <span className="font-bold">42%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-emerald-300"></span>
                  <span className="text-[#121614] font-medium">Cardboard</span>
                </div>
                <span className="font-bold">26%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-[#f1f4f2]"></span>
                  <span className="text-[#121614] font-medium">Paper</span>
                </div>
                <span className="font-bold">15%</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-slate-300"></span>
                  <span className="text-[#121614] font-medium">Metal</span>
                </div>
                <span className="font-bold">12%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* // Recent Activity Table */}
      <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-[#dde3e0] flex justify-between items-center">
          <h3 className="text-[#121614] text-lg font-bold">Recent Activity</h3>
          <button onClick={() => onViewChange("audit")} className="text-primary text-sm font-bold flex items-center gap-1">
            View Audit Log{" "}
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f8fafc] text-[#6a8174] text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-3">Time</th>
                <th className="px-6 py-3">User/Action</th>
                <th className="px-6 py-3">Details</th>
                <th className="px-6 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dde3e0]">
              <tr className="hover:bg-[#f8fafc] transition-colors">
                <td className="px-6 py-4 text-sm text-[#6a8174] font-medium">
                  10:30 AM
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                      WA
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-[#121614]">Worker Ali</p>
                      <p className="text-[#6a8174] text-xs">
                        Field Verification
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#121614] font-medium">
                  Verified #REQ-1012 (PET, 5kg)
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#f8fafc] transition-colors">
                <td className="px-6 py-4 text-sm text-[#6a8174] font-medium">
                  09:15 AM
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                      CS
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-[#121614]">Citizen Sara</p>
                      <p className="text-[#6a8174] text-xs">New Request</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#121614] font-medium">
                  Submitted new pickup request #REQ-1025
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Pending
                  </span>
                </td>
              </tr>
              <tr className="hover:bg-[#f8fafc] transition-colors">
                <td className="px-6 py-4 text-sm text-[#6a8174] font-medium">
                  08:45 AM
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">
                      SYS
                    </div>
                    <div className="text-sm">
                      <p className="font-bold text-[#121614]">System</p>
                      <p className="text-[#6a8174] text-xs">Automation</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-[#121614] font-medium">
                  Daily operations report generated and archived
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    System
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddWorkerDialog
        isOpen={isAddWorkerOpen}
        onClose={() => setIsAddWorkerOpen(false)}
      />
    </main>
  );
};

export default DashboardView;
