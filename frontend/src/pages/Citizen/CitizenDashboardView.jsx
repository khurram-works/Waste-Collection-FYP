import React from "react";

const CitizenDashboardView = ({ currentview, setCurrentView }) => {
  return (
    <main className="flex-1 overflow-y-auto bg-background-light p-8">
      <div className="max-w-275 mx-auto space-y-8">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#6a8174] text-sm font-medium">Total Earnings</p>
              <span className="material-symbols-outlined text-primary text-xl">payments</span>
            </div>
            <p className="text-[#121614] text-3xl font-bold leading-tight">Rs 1,240</p>
            <div className="flex items-center gap-1 text-primary text-sm font-bold mt-1">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+12% from last month</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#6a8174] text-sm font-medium">Pending Pickups</p>
              <span className="material-symbols-outlined text-orange-400 text-xl">pending_actions</span>
            </div>
            <p className="text-[#121614] text-3xl font-bold leading-tight">2</p>
            <p className="text-[#6a8174] text-sm mt-1">Scheduled within 48h</p>
          </div>

          <div className="flex flex-col gap-2 rounded-xl p-6 bg-white border border-[#dde3e0] shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#6a8174] text-sm font-medium">Completed This Month</p>
              <span className="material-symbols-outlined text-primary text-xl">verified</span>
            </div>
            <p className="text-[#121614] text-3xl font-bold leading-tight">5</p>
            <p className="text-[#6a8174] text-sm mt-1">Target: 8 pickups</p>
          </div>
        </div>

        {/* Primary Action Card */}
        <div className="flex flex-col xl:flex-row items-stretch rounded-xl shadow-md bg-white border border-[#dde3e0] overflow-hidden">
          <div
            className="w-full xl:w-1/3 min-h-48 xl:h-full bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCV2ZwaK3eYezr1BmL33Rz-6IIsIfJVt3fXhW6ZgNkaVOu2jnIPm1RGui0yHeoDIl8EH9DohH6qxGpJO6X38SeEmOZgvZIMOjNyAzyLOYZi59DoVjmUpCmSHVpUFUaB-GXB5EMxQzYd_Ci6loiEEtwwski_2HDf6GKBTOynuogtDVcFOE_x0rjgcrDuBLHpVNh1SHLZOldhWS_Wf4lI6FgJFnNiDhm0XqymgMa3tx7cU23d56AWT87mmHWn5vkDCmf6dizJATpw")',
            }}
          ></div>
          <div className="flex w-full grow flex-col items-start justify-center gap-4 p-8">
            <div>
              <h3 className="text-[#121614] text-2xl font-bold tracking-tight">
                Ready for a new pickup?
              </h3>
              <p className="text-[#6a8174] text-base mt-1">
                Request a pickup for your sorted waste and start earning rewards. We accept PET,
                cardboard, and glass.
              </p>
            </div>
            <button
              className="flex items-center gap-2 cursor-pointer rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-transform active:scale-95 shadow-lg shadow-primary/20"
              onClick={() => setCurrentView("Request")}
            >
              <span className="material-symbols-outlined text-sm">add</span>
              <span>Submit a New Pickup Request</span>
            </button>
          </div>
        </div>

        {/* Recent Activity Table */}
        <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-[#dde3e0] flex justify-between items-center">
            <h2 className="text-[#121614] text-xl font-bold">Recent Pickup Requests</h2>
            <button onClick={() => setCurrentView("RequestStatus")} className="text-primary text-sm font-bold hover:underline">
              View All My Requests
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-background-light">
                  <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                    Request ID
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                    Waste Type
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                    Date Submitted
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-sm font-bold text-[#6a8174] uppercase tracking-wider text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde3e0]">
                <tr className="hover:bg-background-light transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">#REQ-1001</td>
                  <td className="px-6 py-4 text-sm">PET Bottles</td>
                  <td className="px-6 py-4 text-sm">24 Dec 2025</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700">
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right">
                    <button className="text-primary font-bold hover:text-primary/80">View</button>
                  </td>
                </tr>
                <tr className="hover:bg-background-light transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">#REQ-1000</td>
                  <td className="px-6 py-4 text-sm">Cardboard</td>
                  <td className="px-6 py-4 text-sm">23 Dec 2025</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/20 text-primary">
                      Verified
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right">
                    <button className="text-primary font-bold hover:text-primary/80">View</button>
                  </td>
                </tr>
                <tr className="hover:bg-background-light transition-colors">
                  <td className="px-6 py-4 text-sm font-medium">#REQ-0999</td>
                  <td className="px-6 py-4 text-sm">Mixed Paper</td>
                  <td className="px-6 py-4 text-sm">22 Dec 2025</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-right">
                    <button className="text-primary font-bold hover:text-primary/80">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CitizenDashboardView;