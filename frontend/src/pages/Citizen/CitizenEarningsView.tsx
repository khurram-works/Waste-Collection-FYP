import React from "react";

const CitizenEarningsView = () => {
  return (
    <main className="flex-1 overflow-y-auto p-8 bg-background-light">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-[#121614] text-3xl font-black tracking-tight">Earnings Wallet</h2>
          <p className="text-gray-500 text-base">
            Manage and track your recycling rewards and transaction history
          </p>
        </div>

        {/* Wallet Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-[#dde3e0] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-500 text-sm font-medium">Current Wallet Balance</p>
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">
                payments
              </span>
            </div>
            <p className="text-primary text-3xl font-bold leading-tight">Rs 1,850</p>
            <p className="text-primary text-sm font-semibold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">arrow_upward</span>
              +Rs 150 today
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#dde3e0] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-500 text-sm font-medium">Earned This Month</p>
              <span className="material-symbols-outlined text-gray-400 bg-gray-100 p-2 rounded-full">
                calendar_today
              </span>
            </div>
            <p className="text-[#121614] text-3xl font-bold leading-tight">Rs 420</p>
            <p className="text-primary text-sm font-semibold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span>
              12% increase
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-[#dde3e0] shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-500 text-sm font-medium">Total Transactions</p>
              <span className="material-symbols-outlined text-gray-400 bg-gray-100 p-2 rounded-full">
                receipt_long
              </span>
            </div>
            <p className="text-[#121614] text-3xl font-bold leading-tight">14</p>
            <p className="text-primary text-sm font-semibold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">add</span> 2 new this week
            </p>
          </div>
        </div>

        {/* Earnings Breakdown & Visual */}
        <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm">
          <h3 className="text-[#121614] text-lg font-bold p-6 border-b border-[#dde3e0]">
            Earnings Breakdown by Material
          </h3>
          <div className="p-8 flex flex-col md:flex-row items-center gap-12">
            <div className="relative size-48 shrink-0">
              <div
                className="size-full rounded-full border-16 border-primary"
                style={{ clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 50%)" }}
              ></div>
              <div
                className="absolute inset-0 size-full rounded-full border-16 border-primary/40 rotate-90"
                style={{ clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 50%)" }}
              ></div>
              <div
                className="absolute inset-0 size-full rounded-full border-16 border-primary/20 rotate-180"
                style={{ clipPath: "polygon(50% 50%, 50% 0, 80% 0)" }}
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-primary">Rs 1,850</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">
                  Total
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-1">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary"></div>
                <div>
                  <p className="text-sm font-medium text-gray-600">PET Bottles</p>
                  <p className="text-lg font-bold">Rs 750</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary/60"></div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Cardboard</p>
                  <p className="text-lg font-bold">Rs 600</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary/40"></div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Metal Cans</p>
                  <p className="text-lg font-bold">Rs 350</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary/20"></div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Mixed Paper</p>
                  <p className="text-lg font-bold">Rs 150</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction History Table */}
        <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-6 border-b border-[#dde3e0]">
            <h3 className="text-[#121614] text-lg font-bold">Transaction History</h3>
            <div className="flex gap-2">
              <button className="text-sm font-semibold text-primary px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-primary/5 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">download</span>
                Export to CSV
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-background-light">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Waste Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                    Weight / Rate
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde3e0]">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">20 Dec 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-semibold text-gray-900">Payment for #REQ-1002</p>
                    <p className="text-xs text-gray-400">Recycling Credit</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 rounded bg-blue-50 text-blue-600 text-[11px] font-bold uppercase">
                      PET Bottles
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <p className="text-sm font-medium">5.0 kg</p>
                    <p className="text-xs text-gray-400">Rs 30/kg</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <p className="text-sm font-bold text-primary">+ Rs 150</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-1.5 text-primary text-sm font-semibold">
                      <span className="material-symbols-outlined text-[18px]">check_circle</span>
                      Credited
                    </div>
                  </td>
                </tr>
                {/* Add more rows similarly */}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-[#dde3e0] flex items-center justify-between">
            <p className="text-sm text-gray-500">Showing 1 to 3 of 14 transactions</p>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded hover:bg-gray-100 disabled:opacity-30" disabled>
                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
              </button>
              <button className="size-8 rounded bg-primary text-white text-sm font-bold">1</button>
              <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">2</button>
              <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">3</button>
              <span className="px-1 text-gray-400">...</span>
              <button className="p-2 rounded hover:bg-gray-100">
                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CitizenEarningsView;