import React from 'react';

const ReportView = () => (
  <main className="flex-1 overflow-y-auto bg-background-light pl-64">
    <div className="max-w-7xl mx-auto p-8">
      <div className="mb-8">
        <h1 className="text-[#121614] text-4xl font-black leading-tight tracking-[-0.033em]">
          Reports &amp; Analytics
        </h1>
        <p className="text-[#6a8174] text-base font-normal leading-normal">
          Monitor city-wide recycling performance and financial metrics.
        </p>
      </div>
      {/* REPORT CONTROLS CARD */}
      <section className="bg-white rounded-xl shadow-sm border border-[#dde3e0] p-6 mb-8">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col gap-2 flex-1 min-w-50">
            <label className="text-[#121614] text-sm font-bold">
              From Date
            </label>
            <div className="relative">
              <input
                className="w-full h-12 rounded-lg border-[#dde3e0] bg-white text-[#121614] focus:ring-primary focus:border-primary px-4"
                type="date"
                defaultValue="2023-10-01"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-1 min-w-50">
            <label className="text-[#121614] text-sm font-bold">To Date</label>
            <div className="relative">
              <input
                className="w-full h-12 rounded-lg border-[#dde3e0] bg-white text-[#121614] focus:ring-primary focus:border-primary px-4"
                type="date"
                defaultValue="2023-10-31"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-[1.5] min-w-60">
            <label className="text-[#121614] text-sm font-bold">
              Report Type
            </label>
            <select className="w-full h-12 rounded-lg border-[#dde3e0] bg-white text-[#121614] focus:ring-primary focus:border-primary px-4">
              <option>System Summary Report</option>
              <option>Financial Incentives Audit</option>
              <option>Collection Efficiency Trends</option>
              <option>Waste Composition Analysis</option>
            </select>
          </div>
          <div className="flex gap-2 min-w-fit">
            <button className="h-12 px-6 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">
                auto_graph
              </span>
              Generate
            </button>
            <button className="h-12 px-4 border border-[#dde3e0] text-[#121614] font-semibold rounded-lg hover:bg-background-light transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">
                picture_as_pdf
              </span>
            </button>
            <button className="h-12 px-4 border border-[#dde3e0] text-[#121614] font-semibold rounded-lg hover:bg-background-light transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">
                file_download
              </span>
            </button>
          </div>
        </div>
      </section>
      {/* KPI METRIC ROW */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        {/* Metric Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
          <div>
            <p className="text-[#6a8174] text-sm font-medium mb-1">
              Total Recycled
            </p>
            <h3 className="text-2xl font-black text-[#121614]">1,250 kg</h3>
            <p className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>
              +12.5% vs last month
            </p>
          </div>
          <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">
              recycling
            </span>
          </div>
        </div>
        {/* Metric Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
          <div>
            <p className="text-[#6a8174] text-sm font-medium mb-1">
              Incentives Paid
            </p>
            <h3 className="text-2xl font-black text-[#121614]">Rs 15,400</h3>
            <p className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>
              +5.2% vs last month
            </p>
          </div>
          <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">payments</span>
          </div>
        </div>
        {/* Metric Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
          <div>
            <p className="text-[#6a8174] text-sm font-medium mb-1">
              Avg. Collection Time
            </p>
            <h3 className="text-2xl font-black text-[#121614]">2.8 hrs</h3>
            <p className="text-orange-500 text-xs font-bold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                trending_down
              </span>
              -0.4 hrs improvement
            </p>
          </div>
          <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">timer</span>
          </div>
        </div>
        {/* Metric Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0] flex items-center justify-between">
          <div>
            <p className="text-[#6a8174] text-sm font-medium mb-1">
              Citizen Participation
            </p>
            <h3 className="text-2xl font-black text-[#121614]">312 users</h3>
            <p className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">
                trending_up
              </span>
              +24 new this week
            </p>
          </div>
          <div className="size-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-2xl">
              person_add
            </span>
          </div>
        </div>
      </div>
      {/* CENTRAL CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Line Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#121614]">
              Pickup Requests Trend
            </h3>
            <span className="text-xs text-[#6a8174] font-medium">
              Last 7 Days
            </span>
          </div>
          <div className="w-full h-64 bg-background-light rounded-lg relative overflow-hidden flex items-end px-4 pb-4 gap-2">
            {/* Abstract chart illustration */}
            <div className="flex-1 bg-primary/40 rounded-t h-[40%]"></div>
            <div className="flex-1 bg-primary/40 rounded-t h-[60%]"></div>
            <div className="flex-1 bg-primary/40 rounded-t h-[55%]"></div>
            <div className="flex-1 bg-primary/40 rounded-t h-[80%]"></div>
            <div className="flex-1 bg-primary rounded-t h-[95%]"></div>
            <div className="flex-1 bg-primary/40 rounded-t h-[70%]"></div>
            <div className="flex-1 bg-primary/40 rounded-t h-[85%]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 px-3 py-1 rounded shadow text-xs font-bold border border-primary/20">
                Data Visualization Active
              </div>
            </div>
          </div>
        </div>
        {/* Donut Chart Placeholder */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#dde3e0]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#121614]">
              Waste Composition
            </h3>
            <span className="text-xs text-[#6a8174] font-medium">
              Global Distribution
            </span>
          </div>
          <div className="flex items-center gap-8 h-64">
            <div className="relative size-48 rounded-full border-12 border-primary flex items-center justify-center">
              <div className="absolute inset-0 border-12 border-primary/20 rounded-full border-r-transparent border-b-transparent rotate-45"></div>
              <div className="text-center">
                <p className="text-3xl font-black text-[#121614]">74%</p>
                <p className="text-[10px] text-[#6a8174] uppercase tracking-widest font-bold">
                  Recyclable
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary"></div>
                <p className="text-xs text-[#6a8174] font-bold flex-1">
                  PET Plastics
                </p>
                <p className="text-xs font-black text-[#121614]">42%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary/60"></div>
                <p className="text-xs text-[#6a8174] font-bold flex-1">
                  Cardboard
                </p>
                <p className="text-xs font-black text-[#121614]">28%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-primary/30"></div>
                <p className="text-xs text-[#6a8174] font-bold flex-1">Glass</p>
                <p className="text-xs font-black text-[#121614]">18%</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-3 rounded-full bg-[#dde3e0]"></div>
                <p className="text-xs text-[#6a8174] font-bold flex-1">Metal</p>
                <p className="text-xs font-black text-[#121614]">12%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DATA TABS CARD */}
      <div className="bg-white rounded-xl shadow-sm border border-[#dde3e0] overflow-hidden">
        <div className="border-b border-[#dde3e0] px-6">
          <div className="flex gap-8">
            <button className="py-4 border-b-2 border-primary text-primary text-sm font-bold">
              Top Recycling Citizens
            </button>
            <button className="py-4 border-b-2 border-transparent text-[#6a8174] text-sm font-medium hover:text-primary transition-colors">
              Worker Efficiency
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#6a8174] text-xs font-bold uppercase tracking-wider">
                  <th className="pb-4 px-2">Rank</th>
                  <th className="pb-4 px-2">Citizen Name</th>
                  <th className="pb-4 px-2">Total Recycled (kg)</th>
                  <th className="pb-4 px-2 text-right">Total Earned (Rs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde3e0]">
                <tr className="text-[#121614] hover:bg-background-light transition-colors">
                  <td className="py-4 px-2 font-black text-primary">01</td>
                  <td className="py-4 px-2 flex items-center gap-3">
                    <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                      AS
                    </div>
                    Arjun Sharma
                  </td>
                  <td className="py-4 px-2 font-medium">145.50 kg</td>
                  <td className="py-4 px-2 text-right font-black">
                    Rs 1,820.00
                  </td>
                </tr>
                <tr className="text-[#121614] hover:bg-background-light transition-colors">
                  <td className="py-4 px-2 font-black text-primary">02</td>
                  <td className="py-4 px-2 flex items-center gap-3">
                    <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                      PK
                    </div>
                    Priya Kapoor
                  </td>
                  <td className="py-4 px-2 font-medium">132.20 kg</td>
                  <td className="py-4 px-2 text-right font-black">
                    Rs 1,650.50
                  </td>
                </tr>
                <tr className="text-[#121614] hover:bg-background-light transition-colors">
                  <td className="py-4 px-2 font-black text-primary">03</td>
                  <td className="py-4 px-2 flex items-center gap-3">
                    <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                      RJ
                    </div>
                    Rohan Joshi
                  </td>
                  <td className="py-4 px-2 font-medium">118.45 kg</td>
                  <td className="py-4 px-2 text-right font-black">
                    Rs 1,480.00
                  </td>
                </tr>
                <tr className="text-[#121614] hover:bg-background-light transition-colors">
                  <td className="py-4 px-2 font-black text-primary">04</td>
                  <td className="py-4 px-2 flex items-center gap-3">
                    <div className="size-8 rounded-full bg-background-light flex items-center justify-center font-bold text-xs">
                      MV
                    </div>
                    Meera Varma
                  </td>
                  <td className="py-4 px-2 font-medium">95.10 kg</td>
                  <td className="py-4 px-2 text-right font-black">
                    Rs 1,188.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex justify-center">
            <a
              className="text-primary text-sm font-bold hover:underline flex items-center gap-1"
              href="#"
            >
              View Full Performance Report
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default ReportView;
