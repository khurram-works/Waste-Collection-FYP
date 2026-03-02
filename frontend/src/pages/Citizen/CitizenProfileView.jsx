import React from "react";

const CitizenProfileView = ({ user }) => {
  return (
    <main className="flex-1 w-full px-4 py-8 md:px-10 lg:px-16 bg-background-light min-h-[calc(100vh-64px)] overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-[#121614] text-3xl md:text-3xl font-black leading-tight tracking-[-0.033em]">
          My Account Profile
        </h1>
        <p className="text-[#6a8174] text-base font-normal mt-2 leading-normal">
          Manage your personal details and service settings.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl">
        {/* Personal Information Card */}
        <section className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-[#f1f4f2] overflow-hidden">
          <div className="px-6 py-5 border-b border-[#f1f4f2]">
            <h2 className="text-[#121614] text-xl font-bold leading-tight">Personal Information</h2>
          </div>
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#121614]">Full Name</label>
                <input
                  className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                  type="text"
                  defaultValue={user.name}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#121614]">Email Address (Login ID)</label>
                <input
                  className="rounded-lg border-[#e0e4e2] border-2 bg-[#f8faf9] cursor-not-allowed h-11 text-sm text-[#6a8174]"
                  readOnly
                  type="email"
                  defaultValue="alex.citizen@example.com"
                />
              </div>
              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-sm font-semibold text-[#121614]">Phone Number</label>
                <input
                  className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Address Section */}
            <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-xl">home_pin</span>
                <h3 className="text-primary text-base font-bold">Primary Pickup Address</h3>
              </div>
              <div className="flex flex-col gap-3">
                <textarea
                  className="w-full rounded-lg border-[#e0e4e2] focus:border-primary focus:ring-primary text-sm p-3"
                  placeholder="Enter your full street address, apartment number, and zip code"
                  rows={3}
                  defaultValue={`123 Green Valley Road, Eco District\nBuilding 4, Apt 2B\nSustainability City, 54321`}
                ></textarea>
                <div className="flex items-start gap-2 text-[#6a8174]">
                  <span className="material-symbols-outlined text-base mt-0.5">info</span>
                  <p className="text-xs italic leading-tight">
                    This address is used for all scheduled waste collections and route optimizations.
                    Please ensure accuracy for timely service.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button className="px-6 h-10 rounded-lg text-sm font-bold text-[#6a8174] hover:bg-[#f1f4f2] transition-colors">
                Cancel
              </button>
              <button className="px-8 h-10 rounded-lg bg-primary text-white text-sm font-bold shadow-sm hover:bg-[#256e45] transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </section>

        {/* Password Update Card */}
        <section className="bg-white rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-[#f1f4f2] overflow-hidden">
          <div className="px-6 py-5 border-b border-[#f1f4f2]">
            <h2 className="text-[#121614] text-xl font-bold leading-tight">Change Password</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#121614]">Current Password</label>
                <input
                  className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#121614]">New Password</label>
                <input
                  className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-[#121614]">Confirm New Password</label>
                <input
                  className="rounded-lg border-[#e0e4e2] border-2 focus:border-primary focus:ring-primary h-11 text-sm"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <button className="px-6 h-10 rounded-lg border border-primary text-primary text-sm font-bold hover:bg-primary/5 transition-colors">
                Update Password
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CitizenProfileView;