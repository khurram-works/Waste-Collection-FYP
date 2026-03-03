import React from "react";

const Profile = ({ worker }) => {
  return (
    <main className="flex-1 p-8 max-w-full overflow-y-scroll">
      <div className="mb-8">
        <h1 className="text-4xl font-black leading-tight tracking-tight">
          My Account & Work Details
        </h1>
        <p className="text-[#6a8174] mt-2">
          Manage your personal information and view system-assigned work details.
        </p>
      </div>

      {/* Profile Form Card */}
      <div className="bg-white rounded-xl shadow-sm border border-[#dde3e0] overflow-hidden mb-8">
        {/* Part 1: Official Assignment (Read-Only) */}
        <div className="bg-background-light p-6 border-b border-[#dde3e0]">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-primary text-xl">
              verified_user
            </span>
            <h2 className="text-lg font-bold">Official Assignment</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col">
              <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
                Worker ID
              </span>
              <span className="text-sm font-medium">{worker.id}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
                Assigned Zone
              </span>
              <span className="text-sm font-medium">{worker.zone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
                Vehicle Number
              </span>
              <span className="text-sm font-medium">{worker.vehicle}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#6a8174] text-xs font-semibold uppercase tracking-wider mb-1">
                Status
              </span>
              <div className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-primary"></span>
                <span className="text-sm font-bold text-primary">{worker.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Part 2: Contact Details (Editable) */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-gray-400 text-xl">
              contact_mail
            </span>
            <h2 className="text-lg font-bold">Your Contact Details</h2>
          </div>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input
                className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
                type="text"
                defaultValue={worker.name}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
                type="tel"
                defaultValue="+1 (555) 000-1234"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <input
                className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
                type="email"
                defaultValue="john.doe@municipal.gov"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Emergency Contact</label>
              <input
                className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
                type="text"
                defaultValue="Jane Doe (+1 555-000-5678)"
              />
            </div>
          </form>
          <div className="mt-8 flex items-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-2.5 px-6 rounded-lg transition-colors text-sm shadow-sm">
              Save Changes
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-2.5 px-6 rounded-lg transition-colors text-sm">
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Security Card */}
      <div className="bg-white rounded-xl shadow-sm border border-[#dde3e0] overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-gray-400 text-xl">lock</span>
            <h2 className="text-lg font-bold">Account Security</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Current Password</label>
              <input
                className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">New Password</label>
              <input
                className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
                placeholder="••••••••"
                type="password"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-700">Confirm New Password</label>
              <input
                className="rounded-lg border-2 p-2 border-[#dde3e0] focus:ring-primary focus:border-primary text-sm"
                placeholder="••••••••"
                type="password"
              />
            </div>
          </div>
          <div className="mt-8">
            <button className="bg-gray-100 hover:bg-gray-200 text-[#121614] font-bold py-2.5 px-6 rounded-lg transition-colors text-sm">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;