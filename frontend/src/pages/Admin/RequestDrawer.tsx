import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const RequestDrawer = ({ isOpen, onClose, request }) => {
  if (!request) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex justify-end">
        <DialogPanel
          transition
          className="w-96 bg-white h-full shadow-2xl flex flex-col transform transition duration-300 ease-in-out data-closed:translate-x-full"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#e5e7eb] flex justify-between items-center">
            <div>
              <h2 className="text-xl font-black">Manage Request</h2>
              <p className="text-[#2e8a57] font-bold text-sm">{request.id}</p>
            </div>
            <button
              onClick={onClose}
              className="size-8 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Citizen Information */}
            <section>
              <h3 className="text-xs font-bold text-[#6a8174] uppercase tracking-widest mb-4">
                Citizen Information
              </h3>
              <div className="flex items-center gap-4 mb-3">
                <div className="size-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-lg text-[#2e8a57]">
                  {request.citizen?.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold">{request.citizen}</p>
                  <p className="text-sm text-[#6a8174]">
                    {request.phone || "+1 (555) 000-0000"}
                  </p>
                </div>
              </div>
              <div className="bg-background-light p-3 rounded-lg border border-[#dde3e0]">
                <p className="text-xs text-[#6a8174] mb-1">Pickup Location</p>
                <p className="text-sm font-medium">{request.address}</p>
              </div>
            </section>

            {/* Waste Verification */}
            <section>
              <h3 className="text-xs font-bold text-[#6a8174] uppercase tracking-widest mb-4">
                Waste Verification
              </h3>
              {request.imageUrl && (
                <div
                  className="aspect-video w-full rounded-lg bg-gray-200 mb-3 bg-cover bg-center overflow-hidden border border-gray-200"
                  style={{ backgroundImage: `url("${request.imageUrl}")` }}
                >
                  <div className="w-full h-full bg-black/20 flex items-end p-3">
                    <button className="bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded shadow flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px]">zoom_in</span>
                      Enlarge Photo
                    </button>
                  </div>
                </div>
              )}
              <p className="text-sm text-gray-600 italic">"{request.notes}"</p>
            </section>

            {/* Assignment Tools */}
            <section className="space-y-4">
              <h3 className="text-xs font-bold text-[#6a8174] uppercase tracking-widest">
                Assignment Tools
              </h3>
              <div>
                <label className="block text-sm font-bold mb-2">Assign to Worker</label>
                <select className="w-full border-[#dde3e0] rounded-lg text-sm h-11 focus:ring-[#2e8a57] focus:border-[#2e8a57]">
                  <option>Select available worker...</option>
                  <option>🟢 John Doe (2.4km away)</option>
                  <option>🟢 Sarah Connor (3.1km away)</option>
                  <option>🟡 Mike Ross (On break)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Select Route</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className={`border-2 ${
                      request.wasteType === "Recycling"
                        ? "border-[#2e8a57] bg-[#2e8a57]/5"
                        : "border-gray-100"
                    } rounded-lg py-3 flex flex-col items-center gap-1 transition-all`}
                  >
                    <span
                      className={`text-2xl ${
                        request.wasteType !== "Recycling" ? "opacity-40 grayscale" : ""
                      }`}
                    >
                      ♻️
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        request.wasteType === "Recycling" ? "text-[#2e8a57]" : "text-gray-400"
                      }`}
                    >
                      Recycling
                    </span>
                  </button>
                  <button
                    className={`border-2 ${
                      request.wasteType === "Landfill"
                        ? "border-[#2e8a57] bg-[#2e8a57]/5"
                        : "border-gray-100"
                    } rounded-lg py-3 flex flex-col items-center gap-1 transition-all`}
                  >
                    <span
                      className={`text-2xl ${
                        request.wasteType !== "Landfill" ? "opacity-40 grayscale" : ""
                      }`}
                    >
                      🗑️
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        request.wasteType === "Landfill" ? "text-[#2e8a57]" : "text-gray-400"
                      }`}
                    >
                      Landfill
                    </span>
                  </button>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Actions */}
          <div className="p-6 border-t border-[#e5e7eb] space-y-3">
            <button className="w-full bg-[#2e8a57] text-white font-black py-4 rounded-xl shadow-lg shadow-[#2e8a57]/20 hover:bg-opacity-95 transition-all">
              Approve & Assign
            </button>
            <button className="w-full border border-red-500 text-red-600 font-bold py-3 rounded-xl hover:bg-red-50 transition-all text-sm">
              Reject Request
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default RequestDrawer;