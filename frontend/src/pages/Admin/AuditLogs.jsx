import React from "react";

export default function AuditLogs({}) {
  return (
    <>
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
          <div className="pl-64 space-y-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-black text-[#121614] tracking-tight">
                System Audit Log
              </h1>
              <p className="text-[#6a8174] text-base">
                Comprehensive forensic tracking of all user interactions,
                automated system triggers, and database modifications.
              </p>
            </div>

            <section className="bg-white rounded-xl border border-[#dde3e0] p-5 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Date Range - improved layout */}
                <div className="space-y-1.5 md:col-span-1 lg:col-span-1">
                  <label className="text-[12px] font-bold text-[#6a8174] uppercase tracking-wider px-0.5">
                    Date Range
                  </label>
                  <div className="flex flex-col sm:flex-row items-stretch gap-2">
                    <input
                      type="date"
                      defaultValue="2026-10-01"
                      className=" border-2 flex-1 min-w-0 text-sm border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary px-3 py-2"
                    />
                    <span className="text-[#6a8174] text-center self-center">
                      to
                    </span>
                    <input
                      type="date"
                      defaultValue="2026-10-24"
                      className="flex-1 min-w-0 text-sm border-[#dde3e0] border-2 rounded-lg focus:ring-primary focus:border-primary px-3 py-2"
                    />
                  </div>
                </div>

                {/* User Type */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-[#6a8174] uppercase tracking-wider px-0.5">
                    User Type
                  </label>
                  <select className="w-full border-2 text-sm border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary px-3 py-2">
                    <option>All Users</option>
                    <option>Citizen</option>
                    <option>Worker</option>
                    <option>Admin</option>
                    <option>System</option>
                  </select>
                </div>

                {/* Action Type */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-[#6a8174] uppercase tracking-wider px-0.5">
                    Action Type
                  </label>
                  <select className="w-full text-sm border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary px-3 py-2">
                    <option>All Actions</option>
                    <option>Submitted</option>
                    <option>Assigned</option>
                    <option>Verified</option>
                    <option>Payment Notification</option>
                    <option>System Trigger</option>
                  </select>
                </div>

                {/* Search */}
                <div className="space-y-1.5">
                  <label className="text-[12px] font-bold text-[#6a8174] uppercase tracking-wider px-0.5">
                    Search
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[#6a8174] text-lg">
                      search
                    </span>
                    <input
                      type="text"
                      placeholder="Request ID / User ID..."
                      className="w-full border-2 pl-9 text-sm border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary py-2"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-end gap-2">
                  <button className="flex-1 bg-primary text-white text-sm font-bold py-2 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 shadow-sm">
                    <span className="material-symbols-outlined text-lg">
                      filter_alt
                    </span>
                    Apply
                  </button>
                  <button className="flex-1 bg-[#f1f4f2] text-[#6a8174] text-sm font-bold py-2 rounded-lg hover:bg-[#dde3e0] transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-lg">
                      restart_alt
                    </span>
                    Reset
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-background-light border-b border-[#dde3e0]">
                      <th className="px-6 py-4 text-[12px] font-bold text-[#6a8174] uppercase tracking-wider">
                        Timestamp
                      </th>
                      <th className="px-6 py-4 text-[12px] font-bold text-[#6a8174] uppercase tracking-wider">
                        User (Role)
                      </th>
                      <th className="px-6 py-4 text-[12px] font-bold text-[#6a8174] uppercase tracking-wider">
                        Action
                      </th>
                      <th className="px-6 py-4 text-[12px] font-bold text-[#6a8174] uppercase tracking-wider">
                        Target
                      </th>
                      <th className="px-6 py-4 text-[12px] font-bold text-[#6a8174] uppercase tracking-wider">
                        Details
                      </th>
                      <th className="px-6 py-4 text-[12px] font-bold text-[#6a8174] uppercase tracking-wider">
                        IP Address
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f4f2]">
                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-3 font-mono text-[13px] text-[#121614]">
                        2023-10-24 14:22:01
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">
                            John Doe
                          </span>
                          <span className="text-[11px] text-blue-600 font-bold uppercase">
                            Citizen
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                          <span className="material-symbols-outlined text-xs">
                            add_circle
                          </span>
                          Submitted
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-primary">
                        #REQ-9012
                      </td>
                      <td className="px-6 py-3 text-sm text-[#6a8174]">
                        Residential waste pickup scheduled.
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-[#6a8174]">
                        192.168.1.1
                      </td>
                    </tr>

                    <tr className="bg-background-light/40 hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-3 font-mono text-[13px] text-[#121614]">
                        2023-10-24 15:10:45
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-primary">
                            System
                          </span>
                          <span className="text-[11px] text-[#6a8174] font-bold uppercase">
                            Automation
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded text-xs font-bold">
                          <span className="material-symbols-outlined text-xs">
                            route
                          </span>
                          Auto-Assigned
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-primary">
                        #REQ-9012
                      </td>
                      <td className="px-6 py-3 text-sm text-[#6a8174]">
                        Optimized Route B assigned.
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-[#6a8174] italic">
                        [INTERNAL]
                      </td>
                    </tr>

                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-3 font-mono text-[13px] text-[#121614]">
                        2023-10-24 16:05:12
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">
                            Sam Smith
                          </span>
                          <span className="text-[11px] text-primary font-bold uppercase">
                            Worker
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold">
                          <span className="material-symbols-outlined text-xs">
                            verified
                          </span>
                          Verified
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-primary">
                        #REQ-8843
                      </td>
                      <td className="px-6 py-3 text-sm text-[#6a8174]">
                        5kg Recyclables confirmed at site.
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-[#6a8174]">
                        172.16.254.1
                      </td>
                    </tr>

                    <tr className="bg-background-light/40 hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-3 font-mono text-[13px] text-[#121614]">
                        2023-10-24 16:15:30
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">
                            Admin (Officer)
                          </span>
                          <span className="text-[11px] text-[#121614] font-bold uppercase">
                            SuperAdmin
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1 bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold">
                          <span className="material-symbols-outlined text-xs">
                            login
                          </span>
                          Admin Login
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-[#6a8174]">
                        Session: #048X
                      </td>
                      <td className="px-6 py-3 text-sm text-[#6a8174]">
                        Manual portal login successful.
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-[#6a8174]">
                        10.0.0.45
                      </td>
                    </tr>

                    <tr className="hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-3 font-mono text-[13px] text-[#121614]">
                        2023-10-24 16:45:00
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold text-primary">
                            System
                          </span>
                          <span className="text-[11px] text-[#6a8174] font-bold uppercase">
                            Finance
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold">
                          <span className="material-symbols-outlined text-xs">
                            payments
                          </span>
                          Payment Credit
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-primary">
                        #CIT-1200
                      </td>
                      <td className="px-6 py-3 text-sm text-[#6a8174]">
                        Credited $4.50 for recyclables.
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-[#6a8174] italic">
                        [INTERNAL]
                      </td>
                    </tr>

                    <tr className="bg-background-light/40 hover:bg-primary/5 transition-colors group">
                      <td className="px-6 py-3 font-mono text-[13px] text-[#121614]">
                        2023-10-24 17:01:15
                      </td>
                      <td className="px-6 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-semibold">
                            Sarah Lane
                          </span>
                          <span className="text-[11px] text-blue-600 font-bold uppercase">
                            Citizen
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-3">
                        <span className="inline-flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded text-xs font-bold">
                          <span className="material-symbols-outlined text-xs">
                            cancel
                          </span>
                          Cancelled
                        </span>
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-primary">
                        #REQ-9015
                      </td>
                      <td className="px-6 py-3 text-sm text-[#6a8174]">
                        User cancelled the request.
                      </td>
                      <td className="px-6 py-3 font-mono text-[13px] text-[#6a8174]">
                        192.168.1.15
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white border-t border-[#dde3e0] px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-[#6a8174] font-medium">
                    Showing 1-10 of 247 activities
                  </span>
                  <div className="flex items-center gap-2">
                    <button className="bg-[#f1f4f2] text-[#121614] px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#dde3e0]">
                      <span className="material-symbols-outlined text-lg">
                        csv
                      </span>
                      Export CSV
                    </button>
                    <button className="bg-[#f1f4f2] text-[#121614] px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-[#dde3e0]">
                      <span className="material-symbols-outlined text-lg">
                        picture_as_pdf
                      </span>
                      Export PDF
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f1f4f2] text-[#6a8174]">
                    <span className="material-symbols-outlined">
                      chevron_left
                    </span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white text-sm font-bold">
                    1
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f1f4f2] text-sm font-bold text-[#6a8174]">
                    2
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f1f4f2] text-sm font-bold text-[#6a8174]">
                    3
                  </button>
                  <span className="px-1 text-[#6a8174]">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f1f4f2] text-sm font-bold text-[#6a8174]">
                    25
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#f1f4f2] text-[#6a8174]">
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
