import React, { useState } from "react";
import RequestDrawer from "./RequestDrawer";

const ManageView = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);

  // Sample data – replace with your real data later
  const requests = [
    {
      id: "REQ-1023",
      submitted: "Oct 24, 09:12 AM",
      citizen: "David Chen",
      phone: "+1 (555) 012-3456",
      address: "122 Oak Street, Apt 4B, North Zone, City Center 90210",
      wasteType: "Recycling",
      status: "Pending",
      imageUrl: "https://example.com/image1.jpg", // replace with real URL
      notes: "Large cardboard boxes from furniture delivery. All flattened and ready.",
    },
    {
      id: "REQ-1022",
      submitted: "Oct 24, 08:45 AM",
      citizen: "Elena Rodriguez",
      phone: "+1 (555) 123-4567",
      address: "45 Harbor Dr, East Zone",
      wasteType: "Landfill",
      status: "Assigned",
      imageUrl: null,
      notes: "Kitchen waste in bags.",
    },
    {
      id: "REQ-1021",
      submitted: "Oct 23, 04:30 PM",
      citizen: "Michael Scott",
      phone: "+1 (555) 234-5678",
      address: "1725 Slough Ave, Central",
      wasteType: "Recycling",
      status: "Verified",
      imageUrl: null,
      notes: "Papers and cardboard.",
    },
    {
      id: "REQ-1020",
      submitted: "Oct 23, 02:15 PM",
      citizen: "Sarah Miller",
      phone: "+1 (555) 345-6789",
      address: "88 Maple Lane, South",
      wasteType: "Landfill",
      status: "Verified",
      imageUrl: null,
      notes: "General household waste.",
    },
  ];

  const handleCheckboxChange = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedIds.length === requests.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(requests.map((r) => r.id));
    }
  };

  return (
    <main className="flex-1 flex flex-col lg:ml-64 min-h-screen bg-background-light overflow-hidden">
      <div className="p-8 flex-1 overflow-y-auto">
        <div className="mb-6">
          <h1 className="text-[#121614] text-3xl font-black leading-tight tracking-tight">
            All Pickup Requests
          </h1>
        </div>

        {/* Tabs */}
        <div className="mb-6 bg-white rounded-xl shadow-sm border border-[#e5e7eb]">
          <div className="flex border-b border-[#dde3e0] px-4">
            <a className="flex items-center justify-center border-b-[3px] border-[#2e8a57] text-[#2e8a57] px-6 py-4">
              <p className="text-sm font-bold">All</p>
            </a>
            <a className="flex items-center justify-center border-b-[3px] border-transparent text-[#6a8174] px-6 py-4 hover:bg-[#f1f4f2]/50 transition-colors">
              <p className="text-sm font-bold">⚠️ Pending (12)</p>
            </a>
            <a className="flex items-center justify-center border-b-[3px] border-transparent text-[#6a8174] px-6 py-4 hover:bg-[#f1f4f2]/50 transition-colors">
              <p className="text-sm font-bold">🔄 Assigned</p>
            </a>
            <a className="flex items-center justify-center border-b-[3px] border-transparent text-[#6a8174] px-6 py-4 hover:bg-[#f1f4f2]/50 transition-colors">
              <p className="text-sm font-bold">✅ Completed</p>
            </a>
          </div>

          {/* Filter Bar */}
          <div className="p-4 grid grid-cols-12 gap-4 items-center">
            {/* Search */}
            <div className="col-span-3">
              <label className="flex items-stretch bg-background-light rounded-lg border-2 border-[#dde3e0] focus-within:border-[#2e8a57] px-3 h-10 transition-all">
                <span className="material-symbols-outlined text-[#6a8174] self-center mr-2">search</span>
                <input
                  className="bg-transparent border-none focus:outline-none text-sm w-full placeholder:text-[#6a8174]"
                  placeholder="Search ID, citizen or address..."
                />
              </label>
            </div>
            {/* Date range */}
            <div className="col-span-3 flex gap-2">
              <input
                className="bg-background-light border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57] flex-1"
                type="date"
              />
              <span className="self-center text-[#6a8174]">-</span>
              <input
                className="bg-background-light border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57] flex-1"
                type="date"
              />
            </div>
            {/* Waste type */}
            <div className="col-span-2">
              <select className="w-full bg-background-light border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57]">
                <option>All Waste Types</option>
                <option>♻️ Recycling</option>
                <option>🗑️ Landfill</option>
                <option>☢️ Hazardous</option>
              </select>
            </div>
            {/* Zone */}
            <div className="col-span-2">
              <select className="w-full bg-background-light border-[#dde3e0] rounded-lg text-sm h-10 focus:ring-[#2e8a57] focus:border-[#2e8a57]">
                <option>All Zones</option>
                <option>North District</option>
                <option>Central Park</option>
                <option>South Harbor</option>
              </select>
            </div>
            {/* Apply button */}
            <div className="col-span-2 flex justify-end">
              <button className="bg-[#2e8a57]/10 text-[#2e8a57] border border-[#2e8a57]/20 hover:bg-[#2e8a57]/20 font-bold px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Apply Filters
              </button>
            </div>
          </div>
        </div>

        {/* Bulk Action Panel (shows only when items are selected) */}
        {selectedIds.length > 0 && (
          <div className="mb-4 bg-[#2e8a57]/10 border border-[#2e8a57]/20 rounded-lg p-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm font-bold text-[#2e8a57]">
                {selectedIds.length} request{selectedIds.length > 1 ? "s" : ""} selected
              </span>
              <div className="h-6 w-px bg-[#2e8a57]/20"></div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-[#121614] uppercase tracking-wider">
                  Bulk Action:
                </span>
                <select className="bg-white border-[#2e8a57]/30 rounded-lg text-xs h-8 py-0 focus:ring-[#2e8a57]">
                  <option>Assign to Worker...</option>
                  <option>Mark as Verified</option>
                  <option>Archive Requests</option>
                </select>
                <button className="bg-[#2e8a57] text-white text-xs font-bold px-4 py-1.5 rounded-lg hover:bg-opacity-90">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Requests Table */}
        <div className="bg-white rounded-xl shadow-sm border border-[#e5e7eb] overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#f8faf9] border-b border-[#e5e7eb]">
                <th className="p-4 w-10">
                  <input
                    className="rounded border-gray-300 text-[#2e8a57] focus:ring-[#2e8a57]"
                    type="checkbox"
                    checked={selectedIds.length === requests.length && requests.length > 0}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">Request ID</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">Submitted</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">Citizen</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">Address/Zone</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">Waste Type</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-bold text-[#6a8174] uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e5e7eb]">
              {requests.map((request) => (
                <tr
                  key={request.id}
                  className={`hover:bg-gray-50 transition-colors ${
                    selectedIds.includes(request.id) ? "bg-[#2e8a57]/5" : ""
                  }`}
                >
                  <td className="p-4">
                    <input
                      className="rounded border-gray-300 text-[#2e8a57] focus:ring-[#2e8a57]"
                      type="checkbox"
                      checked={selectedIds.includes(request.id)}
                      onChange={() => handleCheckboxChange(request.id)}
                    />
                  </td>
                  <td className="p-4 font-bold text-sm">{request.id}</td>
                  <td className="p-4 text-sm">{request.submitted}</td>
                  <td className="p-4 text-sm">{request.citizen}</td>
                  <td className="p-4 text-sm">{request.address}</td>
                  <td className="p-4">
                    <span
                      className={`flex items-center gap-1.5 text-sm px-2 py-1 rounded-full w-fit font-medium ${
                        request.wasteType === "Recycling"
                          ? "bg-blue-50 text-blue-700"
                          : "bg-orange-50 text-orange-700"
                      }`}
                    >
                      <span className="text-base leading-none">
                        {request.wasteType === "Recycling" ? "♻️" : "🗑️"}
                      </span>
                      {request.wasteType}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`flex items-center gap-1 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full w-fit ${
                        request.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : request.status === "Assigned"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      <span
                        className={`size-1.5 rounded-full ${
                          request.status === "Pending"
                            ? "bg-yellow-800"
                            : request.status === "Assigned"
                            ? "bg-blue-800"
                            : "bg-green-800"
                        }`}
                      ></span>
                      {request.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedRequest(request)}
                      className="bg-[#2e8a57] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-opacity-90"
                    >
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination (simplified) */}
          <div className="p-4 flex items-center justify-between border-t border-[#e5e7eb]">
            <p className="text-sm text-[#6a8174]">
              Showing 1-{requests.length} of {requests.length} requests
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <button className="p-1 rounded hover:bg-gray-100 disabled:opacity-30" disabled>
                  <span className="material-symbols-outlined">chevron_left</span>
                </button>
                <button className="size-8 rounded bg-[#2e8a57] text-white font-bold text-sm">1</button>
                <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">2</button>
                <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">3</button>
                <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">...</button>
                <button className="size-8 rounded hover:bg-gray-100 text-sm font-medium">5</button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <span className="material-symbols-outlined">chevron_right</span>
                </button>
              </div>
              <div className="h-6 w-px bg-gray-200"></div>
              <button className="text-[#2e8a57] text-sm font-bold flex items-center gap-1 hover:underline">
                <span className="material-symbols-outlined text-base">download</span>
                Export to CSV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <RequestDrawer
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
        request={selectedRequest}
      />
    </main>
  );
};

export default ManageView;
