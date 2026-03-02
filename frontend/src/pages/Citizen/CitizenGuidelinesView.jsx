import React from "react";

const CitizenGuidelinesView = ({ setCurrentView }) => {
  return (
    <main className="flex-1 flex flex-col p-4 md:p-8 lg:p-12 gap-8 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#121614] text-3xl md:text-4xl font-black leading-tight tracking-tight">
          Maximize Your Earnings: Recycling Guidelines
        </h1>
        <p className="text-[#6a8174] text-base md:text-lg max-w-2xl">
          Follow these instructions to ensure your waste is processed correctly
          and you earn the highest rates for every collection.
        </p>
      </div>

      <div className="bg-primary/5 border-2 border-primary/20 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex gap-4 items-start">
          <div className="bg-primary text-white p-3 rounded-full flex items-center justify-center">
            <span className="material-symbols-outlined">track_changes</span>
          </div>
          <div className="flex flex-col">
            <p className="text-primary text-xl font-bold">The Golden Rule</p>
            <p className="text-[#6a8174] text-base leading-relaxed max-w-xl">
              Keep it <strong>CLEAN, DRY, and SEPARATED</strong>. Contaminated
              items reduce the value of your entire collection and may lead to
              pickup rejection.
            </p>
          </div>
        </div>
        <button className="w-full md:w-auto px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">info</span>
          Learn Detailed Process
        </button>
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="text-[#121614] text-2xl font-bold">
          Material Preparation Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* High Value Card */}
          <div className="bg-white border border-primary/30 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
            <div className="bg-primary/10 px-5 py-4 flex justify-between items-center border-b border-primary/10">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
                <span className="text-primary font-bold">High Value</span>
              </div>
              <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                EARN: ₹X/kg
              </span>
            </div>
            <div className="p-6 flex flex-col gap-4 grow">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                  PET Plastic
                </span>
                <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                  Cardboard
                </span>
                <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                  Metal Cans
                </span>
              </div>
              <ul className="space-y-3 mt-2">
                <li className="flex items-start gap-2 text-sm text-[#121614]">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  <span>Rinse containers to remove food residue</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#121614]">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  <span>Flatten all boxes to save storage space</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#121614]">
                  <span className="material-symbols-outlined text-primary text-lg">
                    check_circle
                  </span>
                  <span>Keep PET separate from other plastics</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Low Value Card */}
          <div className="bg-white border border-orange-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
            <div className="bg-orange-50 px-5 py-4 flex justify-between items-center border-b border-orange-100">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-600">
                  warning
                </span>
                <span className="text-orange-700 font-bold">Low Value</span>
              </div>
              <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                EARN: ₹Y/kg
              </span>
            </div>
            <div className="p-6 flex flex-col gap-4 grow">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                  Newspapers
                </span>
                <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                  Magazines
                </span>
                <span className="px-2 py-1 bg-[#f1f4f2] rounded text-xs font-semibold">
                  Office Paper
                </span>
              </div>
              <ul className="space-y-3 mt-2">
                <li className="flex items-start gap-2 text-sm text-[#121614]">
                  <span className="material-symbols-outlined text-orange-600 text-lg">
                    check_circle
                  </span>
                  <span>Must be completely dry (No wet paper)</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#121614]">
                  <span className="material-symbols-outlined text-orange-600 text-lg">
                    check_circle
                  </span>
                  <span>Can be mixed together in one bag</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-[#121614]">
                  <span className="material-symbols-outlined text-orange-600 text-lg">
                    check_circle
                  </span>
                  <span>Remove plastic/metal clips and binders</span>
                </li>
              </ul>
            </div>
          </div>

          {/* No Earnings Card */}
          <div className="bg-[#f8f9f8] border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col h-full opacity-90">
            <div className="bg-gray-200 px-5 py-4 flex justify-between items-center border-b border-gray-300">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-gray-600">
                  delete
                </span>
                <span className="text-gray-700 font-bold">No Earnings</span>
              </div>
              <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                EARN: ₹0
              </span>
            </div>
            <div className="p-6 flex flex-col gap-4 grow">
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                  Food Waste
                </span>
                <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                  Plastic Bags
                </span>
                <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                  Glass
                </span>
                <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                  Textiles
                </span>
              </div>
              <div className="mt-2 p-3 bg-red-50 border border-red-100 rounded-lg">
                <p className="text-xs text-red-700 leading-normal font-medium">
                  <strong>Note:</strong> These items contaminate recycling
                  batches. Dispose of food waste through composting. Plastic
                  bags are not currently accepted for payout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-auto pt-8 border-t border-[#dde3e0]">
        <div className="bg-white border border-[#dde3e0] p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col text-center sm:text-left">
            <p className="text-lg font-bold text-[#121614]">
              Ready to recycle right?
            </p>
            <p className="text-sm text-[#6a8174]">
              Your bins look sorted and ready for collection!
            </p>
          </div>
          <button onClick={() => setCurrentView("Request")} className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white text-base font-bold rounded-lg shadow-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
            <span className="material-symbols-outlined">add_task</span>+ Submit
            a New Pickup Request
          </button>
        </div>
      </div>
    </main>
  );
};

export default CitizenGuidelinesView;
