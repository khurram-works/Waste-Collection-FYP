import React, { useState } from "react";
import RequestDetailsModal from "./CitizenRequestStatusViewDetail";

const CitizenRequestStatusView = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  // Enriched sample data with all fields the modal now expects
  const requests = [
    {
      id: "#REQ-1005",
      wasteType: "PET Bottles",
      weight: "4.5 kg",
      address: "123 Main Street, Gulberg, Block C",
      citizenNote: "Bags are at the back gate, near the blue bin.",
      submitted: "24 Dec 2025, 10:30 AM",
      scheduled: "--",
      status: "Pending",
      earnings: "Rs 150",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/...",
      workerName: "—",
    },
    {
      id: "#REQ-1004",
      wasteType: "Cardboard",
      weight: "8.2 kg",
      address: "456 Oak Avenue, Phase 2",
      citizenNote: "Please ring the bell twice.",
      submitted: "23 Dec 2025, 2:15 PM",
      scheduled: "26 Dec 2025",
      status: "Assigned",
      earnings: "Rs 120",
      imageUrl: null,
      workerName: "Ali Raza",
      workerId: "W-07",
      workerRating: "4.8",
      workerPickups: "1.2k",
      estimatedArrival: "Today, 2:00 PM - 4:00 PM",
    },
    {
      id: "#REQ-1003",
      wasteType: "Mixed Paper",
      weight: "3.0 kg",
      address: "789 Pine Street",
      citizenNote: "Leave inside the porch if not home.",
      submitted: "22 Dec 2025, 9:00 AM",
      scheduled: "25 Dec 2025",
      status: "Verified",
      earnings: "Rs 45",
      imageUrl: null,
      workerName: "Sara Khan",
      workerId: "W-12",
      workerRating: "4.9",
      workerPickups: "890",
      estimatedArrival: "Completed",
    },
    {
      id: "#REQ-1002",
      wasteType: "Metal Cans",
      weight: "12.0 kg",
      address: "321 Cedar Road",
      citizenNote: "Heavy items, need assistance.",
      submitted: "20 Dec 2025, 11:30 AM",
      scheduled: "21 Dec 2025",
      status: "Paid",
      earnings: "Rs 180",
      imageUrl: null,
      workerName: "Imran Ali",
      workerId: "W-03",
      workerRating: "4.7",
      workerPickups: "2.1k",
      estimatedArrival: "Completed",
    },
  ];

  return (
    <>
      <main className="flex-1 flex flex-col bg-background-light p-8 gap-8 overflow-x-hidden">
        {/* ... (your existing filter and table code) ... */}

        <div className="flex flex-col gap-6">

          <div className="flex items-center justify-between">
          
            <h1 className="text-[#121614] text-4xl font-black leading-tight tracking-[-0.033em]">
               My Pickup Requests 
            </h1>
            
          </div>
          
          <div className="flex flex-wrap items-end gap-4 bg-white p-6 rounded-xl border border-[#dde3e0] shadow-sm">
            
            <div className="flex flex-col gap-2 min-w-50">
              
              <p className="text-[#121614] text-sm font-semibold">
                Filter by Status
              </p>
              
              <select className="form-select w-full rounded-lg border-[#dde3e0] border-2 bg-white text-sm focus:border-primary focus:ring-primary h-11">
                 <option>All Statuses</option>
                 <option>Pending</option>
                 <option>Assigned</option>
                 <option>Collected</option>
                 <option>Verified</option>
                 <option>Paid</option>
                
              </select>
            
            </div>
          
            <div className="flex flex-col gap-2 flex-1 min-w-75">
  
              <p className="text-[#121614] text-sm font-semibold">
                Search Request ID
              </p>
            
              <div className="relative">
  
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#6a8174]">
                  search
                </span>
      
                <input
                  className="form-input w-full pl-10 rounded-lg border-[#dde3e0] border-2 bg-white text-sm focus:border-primary focus:ring-primary h-11"
                  placeholder="Search by Request ID (#REQ-...)"
                  type="text"
                />
              </div>
            </div>
            <button className="bg-primary hover:bg-primary/90 text-white font-bold h-11 px-8 rounded-lg transition-colors whitespace-nowrap">
              Apply Filters
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden flex flex-col flex-1">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f8faf9] border-b border-[#dde3e0]">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Request ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Waste Type
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Submitted
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Scheduled
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Status
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Est. Earnings
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase text-[#6a8174]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde3e0]">
                {requests.map((req) => (
                  <tr
                    key={req.id}
                    className="hover:bg-primary/5 transition-colors cursor-pointer"
                    onClick={() => setSelectedRequest(req)}
                  >
                    <td className="px-6 py-4 font-bold text-sm">{req.id}</td>
                    <td className="px-6 py-4 text-sm">{req.wasteType}</td>
                    <td className="px-6 py-4 text-sm">{req.submitted}</td>
                    <td className="px-6 py-4 text-sm">{req.scheduled}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                          req.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : req.status === "Assigned"
                              ? "bg-blue-100 text-blue-700"
                              : req.status === "Verified"
                                ? "bg-green-100 text-green-700"
                                : req.status === "Paid"
                                  ? "bg-primary/20 text-primary"
                                  : ""
                        }`}
                      >
                        <span className="material-symbols-outlined text-sm">
                          {req.status === "Pending"
                            ? "schedule"
                            : req.status === "Assigned"
                              ? "local_shipping"
                              : req.status === "Verified"
                                ? "verified"
                                : req.status === "Paid"
                                  ? "check_circle"
                                  : ""}
                        </span>
                        {req.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold">
                      {req.earnings}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="text-primary hover:underline text-sm font-bold"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedRequest(req);
                        }}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
        </div>
      </main>

      {/* Modal */}
      <RequestDetailsModal
        isOpen={!!selectedRequest}
        onClose={() => setSelectedRequest(null)}
        request={selectedRequest} 
      />
    </>
  );
};

export default CitizenRequestStatusView;
