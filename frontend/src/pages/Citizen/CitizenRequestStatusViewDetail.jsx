import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import CancelRequestModal from "./CitizenCancelRequest";

// Helper to determine step state
const getStepState = (currentStatus, stepName) => {
  const statusOrder = ["Pending", "Assigned", "Collected", "Verified", "Paid"];
  const stepIndex = statusOrder.indexOf(stepName);
  const currentIndex = statusOrder.indexOf(currentStatus);

  if (currentIndex > stepIndex) return "completed";
  if (currentIndex === stepIndex) return "active";
  return "pending";
};





export default function RequestDetailsModal({ isOpen, onClose, request }) {
  const [cancelled, setcancelled] = useState(false);
  if (!request) return null; // safety check

  const {
    id,
    wasteType = "—",
    submitted = "—",
    scheduled = "—",
    status = "Pending",
    earnings = "—",
    // Extended fields (add these to your request objects)
    weight = "—",
    address = "—",
    citizenNote = "—",
    workerName = "—",
    workerId = "—",
    workerRating = "—",
    workerPickups = "—",
    estimatedArrival = "—",
    imageUrl = null,
  } = request;

  const statusOrder = ["Pending", "Assigned", "Collected", "Verified", "Paid"];

  return (
    <>
    <Dialog open={isOpen} onClose={onClose} className="relative z-50 focus:outline-none">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out data-closed:opacity-0" aria-hidden="true" />

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="relative w-full max-w-2xl rounded-xl bg-white shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 overflow-hidden"
          >
            {/* Modal Header */}
            <header className="flex items-center justify-between px-8 py-6 border-b border-primary/10">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 flex items-center gap-2">
                  Request Details: <span className="text-primary">{id}</span>
                </h2>
                <p className="text-zinc-500 text-sm mt-1">
                  Submitted on: {submitted}
                </p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-zinc-100 rounded-full transition-colors text-zinc-400 hover:text-zinc-600">
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
            </header>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-8 space-y-8 max-h-[calc(90vh-200px)]">
              {/* Status Timeline */}
              <section className="space-y-6">
                <div className="relative flex items-center justify-between">
                  {/* Progress background lines */}
                  <div className="absolute top-5 left-0 w-full h-0.5 bg-zinc-200 -z-10" />
                  <div
                    className="absolute top-5 left-0 h-0.5 bg-primary -z-10 transition-all"
                    style={{ width: `${(statusOrder.indexOf(status) / (statusOrder.length - 1)) * 100}%` }}
                  />

                  {statusOrder.map((step) => {
                    const state = getStepState(status, step);
                    return (
                      <div key={step} className="flex flex-col items-center gap-2 bg-white px-2">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                            state === "completed"
                              ? "bg-primary text-white shadow-primary/20"
                              : state === "active"
                              ? "bg-blue-500 text-white shadow-blue-500/20"
                              : "border-2 border-zinc-200 bg-white text-zinc-400"
                          }`}
                        >
                          <span className="material-symbols-outlined">
                            {state === "completed"
                              ? "check"
                              : state === "active"
                              ? "radio_button_checked"
                              : "circle"}
                          </span>
                        </div>
                        <span
                          className={`text-sm font-${
                            state === "active" ? "bold text-blue-600" : "medium text-zinc-400"
                          }`}
                        >
                          {step}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-600">info</span>
                  <p className="text-blue-700 font-medium">Status: {status}</p>
                </div>
              </section>

              {/* Request Information */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-100 pt-8">
                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                    Request Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">recycling</span>
                      <div>
                        <p className="text-xs text-zinc-500">Waste Type</p>
                        <p className="font-semibold text-zinc-800">{wasteType}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">weight</span>
                      <div>
                        <p className="text-xs text-zinc-500">Estimated Weight</p>
                        <p className="font-semibold text-zinc-800">{weight}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                      <div>
                        <p className="text-xs text-zinc-500">Pickup Address</p>
                        <p className="font-semibold text-zinc-800 leading-snug">{address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400">
                    Citizen Note & Media
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-zinc-50 p-3 rounded-lg border border-zinc-100">
                      <p className="text-xs text-zinc-500 mb-1">Citizen Note</p>
                      <p className="text-zinc-700 italic">"{citizenNote}"</p>
                    </div>
                    {imageUrl && (
                      <div>
                        <p className="text-xs text-zinc-500 mb-2">Uploaded Photo</p>
                        <div className="relative group cursor-pointer w-24 h-24 rounded-lg overflow-hidden border-2 border-zinc-200 hover:border-primary transition-all">
                          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                            <span className="material-symbols-outlined text-white">zoom_in</span>
                          </div>
                          <img src={imageUrl} alt="Waste" className="w-full h-full object-cover" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Verification Details */}
              <section className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-zinc-900 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">verified</span>
                    Verification Details
                  </h3>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    {status === "Verified" || status === "Paid" ? "Completed" : "Pending Collection"}
                  </span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <p className="text-xs text-zinc-500">Actual Weight</p>
                    <p className="font-bold text-lg">{status === "Verified" || status === "Paid" ? weight : "-- kg"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Condition</p>
                    <p className="font-bold text-lg text-primary">{status === "Verified" || status === "Paid" ? "Good" : "--"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Rate Applied</p>
                    <p className="font-bold text-lg">{status === "Verified" || status === "Paid" ? "₹ 15/kg" : "₹ --/kg"}</p>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500">Final Earnings</p>
                    <p className="font-bold text-lg text-primary">{status === "Paid" ? earnings : "--"}</p>
                  </div>
                </div>
                {(status !== "Verified" && status !== "Paid") && (
                  <p className="mt-4 text-xs text-zinc-400 text-center italic">
                    Details will be updated once the waste is collected and verified.
                  </p>
                )}
              </section>

              {/* Assigned Worker */}
              {workerName !== "—" && (
                <section className="border-t border-zinc-100 pt-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-4">
                    Assigned Worker
                  </h3>
                  <div className="flex items-center justify-between bg-zinc-50 p-4 rounded-xl border border-zinc-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden border-2 border-white">
                        {/* You can add a worker image if available */}
                      </div>
                      <div>
                        <h4 className="font-bold text-zinc-900">
                          {workerName} <span className="text-zinc-400 font-normal text-xs">({workerId})</span>
                        </h4>
                        <div className="flex items-center gap-1 mt-0.5 text-xs text-zinc-500">
                          <span className="material-symbols-outlined text-xs text-yellow-500 fill-icon">star</span>
                          {workerRating} Rating • {workerPickups} Pickups
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-zinc-500 uppercase font-bold">Estimated Arrival</p>
                      <p className="font-bold text-zinc-900">{estimatedArrival}</p>
                    </div>
                  </div>
                </section>
              )}
            </div>

            {/* Footer Actions */}
            <footer className="flex items-center justify-between px-8 py-6 bg-zinc-50 border-t border-zinc-100">
              <button onClick={() => setcancelled(true)} className="px-6 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">cancel</span>
                Cancel Request
              </button>
              <div className="flex gap-3">
                <button onClick={onClose} className="px-8 py-2.5 text-sm font-bold text-zinc-600 border border-zinc-300 rounded-lg hover:bg-zinc-100 transition-colors">
                  Close
                </button>
                
              </div>
            </footer>
          </DialogPanel>
        </div>
      </div>
    </Dialog>

    <CancelRequestModal
            isopen={cancelled}
            onclose={()=>setcancelled(false)}
        />
    </>
  );
}