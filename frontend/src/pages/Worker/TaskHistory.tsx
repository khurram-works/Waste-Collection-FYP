import React from "react";

const TaskHistory = () => {
  return (
    <main className="flex-1 p-6 md:p-10 overflow-x-hidden">
      {/* Header & Summary Stats */}
      <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 mb-8">
        <div>
          <h2 className="text-[#121614] text-3xl font-black leading-tight tracking-[-0.033em]">
            My Completed Task History
          </h2>
          <p className="text-[#6a8174] mt-1">
            Review your collection performance and earnings.
          </p>
        </div>
        <div className="flex gap-4">
          {/* Summary Card 1 */}
          <div className="bg-white p-4 rounded-xl border border-[#dde3e0] shadow-sm min-w-50">
            <p className="text-xs font-semibold text-[#6a8174] uppercase tracking-wider">
              Total Collected
            </p>
            <p className="text-2xl font-black text-primary mt-1">1,250 kg</p>
          </div>
          {/* Summary Card 2 */}
          <div className="bg-white p-4 rounded-xl border border-[#dde3e0] shadow-sm min-w-50">
            <p className="text-xs font-semibold text-[#6a8174] uppercase tracking-wider">
              Earnings Generated
            </p>
            <p className="text-2xl font-black text-primary mt-1">Rs 3,450</p>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white p-4 rounded-xl border border-[#dde3e0] shadow-sm flex flex-wrap items-end gap-4 mb-6">
        <div className="flex-1 min-w-50">
          <p className="text-[#121614] text-sm font-medium pb-2">Search Tasks</p>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8174] text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm"
              placeholder="Task ID or Address..."
              type="text"
            />
          </div>
        </div>
        <div className="flex-1 min-w-35">
          <p className="text-[#121614] text-sm font-medium pb-2">From</p>
          <input
            className="w-full py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm"
            type="date"
          />
        </div>
        <div className="flex-1 min-w-35">
          <p className="text-[#121614] text-sm font-medium pb-2">To</p>
          <input
            className="w-full py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm"
            type="date"
          />
        </div>
        <div className="flex-1 min-w-35">
          <p className="text-[#121614] text-sm font-medium pb-2">Waste Type</p>
          <select className="w-full py-2 bg-background-light border-2 border-[#dde3e0] rounded-lg focus:ring-primary focus:border-primary text-sm">
            <option value="all">All Types</option>
            <option value="pet">PET Plastic</option>
            <option value="paper">Paper/Cardboard</option>
            <option value="general">General Waste</option>
          </select>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[20px]">filter_list</span>
          Apply Filters
        </button>
      </div>

      {/* History Table Area */}
      <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-background-light border-b border-[#dde3e0]">
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">Date</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">Task ID</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">Address</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">Waste Type</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase text-center">Weight</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase">Condition</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase text-right">Earnings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#dde3e0]">
              {/* Row 1 */}
              <tr className="hover:bg-[#f8faf9] transition-colors">
                <td className="p-4 text-sm font-medium">12 Oct 2023</td>
                <td className="p-4 text-sm text-[#6a8174] font-mono">#SW-2931</td>
                <td className="p-4 text-sm max-w-50 truncate">122 MG Road, Sector 4</td>
                <td className="p-4 text-sm flex items-center gap-2">
                  <span className="text-lg">♻️</span> PET Plastic
                </td>
                <td className="p-4 text-sm font-bold text-center">5.2 kg</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Proper
                  </span>
                </td>
                <td className="p-4 text-sm font-black text-right text-primary">Rs 156.00</td>
              </tr>
              {/* Row 2 */}
              <tr className="hover:bg-[#f8faf9] transition-colors">
                <td className="p-4 text-sm font-medium">12 Oct 2023</td>
                <td className="p-4 text-sm text-[#6a8174] font-mono">#SW-2928</td>
                <td className="p-4 text-sm max-w-50 truncate">H Block Apartment, Flat 4B</td>
                <td className="p-4 text-sm flex items-center gap-2">
                  <span className="text-lg">♻️</span> Paper
                </td>
                <td className="p-4 text-sm font-bold text-center">3.0 kg</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    Mixed
                  </span>
                </td>
                <td className="p-4 text-sm font-black text-right text-primary">Rs 45.00</td>
              </tr>
              {/* Row 3 */}
              <tr className="hover:bg-[#f8faf9] transition-colors">
                <td className="p-4 text-sm font-medium">11 Oct 2023</td>
                <td className="p-4 text-sm text-[#6a8174] font-mono">#SW-2899</td>
                <td className="p-4 text-sm max-w-50 truncate">Shop No. 12, Main Market</td>
                <td className="p-4 text-sm flex items-center gap-2">
                  <span className="text-lg">🗑️</span> General
                </td>
                <td className="p-4 text-sm font-bold text-center">10.0 kg</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-red-100 text-red-700">
                    <span className="material-symbols-outlined text-[14px]">cancel</span>
                    Contaminated
                  </span>
                </td>
                <td className="p-4 text-sm font-black text-right text-[#6a8174]">Rs 0.00</td>
              </tr>
              {/* Row 4 */}
              <tr className="hover:bg-[#f8faf9] transition-colors">
                <td className="p-4 text-sm font-medium">11 Oct 2023</td>
                <td className="p-4 text-sm text-[#6a8174] font-mono">#SW-2884</td>
                <td className="p-4 text-sm max-w-50 truncate">Green Villa, Plot 55</td>
                <td className="p-4 text-sm flex items-center gap-2">
                  <span className="text-lg">♻️</span> PET Plastic
                </td>
                <td className="p-4 text-sm font-bold text-center">8.5 kg</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Proper
                  </span>
                </td>
                <td className="p-4 text-sm font-black text-right text-primary">Rs 255.00</td>
              </tr>
              {/* Row 5 */}
              <tr className="hover:bg-[#f8faf9] transition-colors">
                <td className="p-4 text-sm font-medium">10 Oct 2023</td>
                <td className="p-4 text-sm text-[#6a8174] font-mono">#SW-2872</td>
                <td className="p-4 text-sm max-w-50 truncate">City Park Entrance</td>
                <td className="p-4 text-sm flex items-center gap-2">
                  <span className="text-lg">♻️</span> Paper
                </td>
                <td className="p-4 text-sm font-bold text-center">15.0 kg</td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                    <span className="material-symbols-outlined text-[14px]">check_circle</span>
                    Proper
                  </span>
                </td>
                <td className="p-4 text-sm font-black text-right text-primary">Rs 225.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex items-center justify-between p-4 border-t border-[#dde3e0] bg-background-light/30">
          <p className="text-sm text-[#6a8174]">
            Showing Page <span className="font-bold text-[#121614]">1 of 5</span> (42 results)
          </p>
          <div className="flex items-center gap-2">
            <button className="size-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-primary font-bold shadow-sm">
              1
            </button>
            <button className="size-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-[#121614] hover:bg-primary/10 transition-colors">
              2
            </button>
            <button className="size-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-[#121614] hover:bg-primary/10 transition-colors">
              3
            </button>
            <button className="px-3 h-9 flex items-center justify-center rounded-lg bg-white border border-[#dde3e0] text-[#121614] hover:bg-primary/10 transition-colors gap-1">
              Next
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TaskHistory;