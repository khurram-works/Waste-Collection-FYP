import React, { useState } from "react";

const CitizenRequestView = () => {
  const [recycleable, setRecycleable] = useState("Recycleable");

  return (
    <main className="flex-1 overflow-y-auto px-6 py-8 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-[#121614] text-2xl font-black leading-tight tracking-[-0.033em]">
            Submit a New Pickup Request
          </h1>
          <p className="text-[#6a8174] text-base mt-2">
            Please fill in the details below to schedule a waste collection from your location.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 flex flex-col gap-8">
            {/* Waste Type Selection */}
            <section>
              <h2 className="text-[#121614] text-lg font-bold mb-4">Waste Type Selection</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  className={`relative cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${
                    recycleable === "Recycleable"
                      ? "border-primary bg-primary/5"
                      : "border-gray-100 hover:border-primary/50"
                  }`}
                  onClick={() => setRecycleable("Recycleable")}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">♻️</span>
                    {recycleable === "Recycleable" && (
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    )}
                  </div>
                  <p className="text-[#121614] text-sm font-bold leading-tight mb-1">
                    Properly Separated Recyclables
                  </p>
                  <p className="text-primary text-xs font-semibold mb-2">Earns: Rs 15/kg</p>
                  <p className="text-[#6a8174] text-xs">
                    PET bottles, Cardboard, Aluminum, Metal
                  </p>
                </div>

                <div
                  className={`relative cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${
                    recycleable === "SemiRecycleable"
                      ? "border-primary bg-primary/5"
                      : "border-gray-100 hover:border-primary/50"
                  }`}
                  onClick={() => setRecycleable("SemiRecycleable")}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">⚠️</span>
                    {recycleable === "SemiRecycleable" && (
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    )}
                  </div>
                  <p className="text-[#121614] text-sm font-bold leading-tight mb-1">
                    Mixed Clean Recyclables
                  </p>
                  <p className="text-gray-500 text-xs font-semibold mb-2">Earns: Rs 5/kg</p>
                  <p className="text-[#6a8174] text-xs">
                    Mixed paper, Newsprint, Office waste only
                  </p>
                </div>

                <div
                  className={`relative cursor-pointer flex flex-col p-4 rounded-xl border-2 transition-all ${
                    recycleable === "NonRecycleable"
                      ? "border-primary bg-primary/5"
                      : "border-gray-100 hover:border-primary/50"
                  }`}
                  onClick={() => setRecycleable("NonRecycleable")}
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl">🗑️</span>
                    {recycleable === "NonRecycleable" && (
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                    )}
                  </div>
                  <p className="text-[#121614] text-sm font-bold leading-tight mb-1">
                    Non-Recyclable Waste
                  </p>
                  <p className="text-gray-500 text-xs font-semibold mb-2">No earnings</p>
                  <p className="text-[#6a8174] text-xs">
                    General waste, Food scrap, Sanitaries
                  </p>
                </div>
              </div>
            </section>

            {/* Weight and Photo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <label className="block text-sm font-bold text-[#121614] mb-2">
                  Estimated Weight (kg) *
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Enter weight"
                  type="number"
                />
                <p className="mt-2 text-xs text-gray-500 italic">
                  * Final weight will be verified by collector.
                </p>
              </section>
              <section>
                <label className="block text-sm font-bold text-[#121614] mb-2">
                  Photo of Waste Bag *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-gray-400 text-4xl mb-2">
                    cloud_upload
                  </span>
                  <p className="text-sm font-medium text-gray-700">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 5MB</p>
                </div>
              </section>
            </div>

            {/* Pickup Details */}
            <section className="flex flex-col gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-[#121614]">Pickup Address</label>
                  <a className="text-xs text-primary font-bold hover:underline" href="#">
                    Edit
                  </a>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex gap-3 items-start">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Home (Primary)</p>
                    <p className="text-sm text-gray-600">
                      House No 30, Block 4, Citi Housing, Jhelum - 560001
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-[#121614] mb-2">
                  Additional Notes for Worker
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="Special instructions (e.g., Gate code, specific bin location...)"
                  rows={3}
                ></textarea>
              </div>
            </section>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-100">
              <button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-primary/20">
                Submit Request
              </button>
              <button className="flex-1 bg-transparent hover:bg-gray-100 text-gray-600 font-bold py-3 px-6 border border-gray-300 rounded-lg transition-colors">
                Cancel
              </button>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 p-4 bg-primary/10 rounded-lg flex items-start gap-3">
          <span className="material-symbols-outlined text-primary">info</span>
          <div>
            <p className="text-sm font-bold text-primary">Need help with segregation?</p>
            <p className="text-sm text-gray-700">
              Check our "
              <a className="font-semibold underline decoration-2" href="#">
                Recycling Guide
              </a>
              " to maximize your earnings per kg.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CitizenRequestView;