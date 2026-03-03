import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const AddWorkerDialog = ({ isOpen, onClose }) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    className="relative z-50 focus:outline-none"
  >
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-out data-closed:opacity-0"
      aria-hidden="true"
    />
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        <DialogPanel
          transition
          className="relative w-full max-w-2xl rounded-xl bg-white shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0 overflow-hidden"
        >
          <div className="px-8 pt-8 pb-6 flex justify-between items-start border-b border-primary/10 bg-white">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  person_add
                </span>
                Add New Municipal Worker
              </h2>
              <p className="text-neutral-gray mt-1 text-sm">
                Fill in the details below to create a new worker account on the
                Smart Waste Platform.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-gray hover:text-primary transition-colors p-1 rounded-full hover:bg-primary/10"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* MODAL CONTENT FORM */}
          <form className="px-8 py-6 space-y-8 max-h-[60vh] overflow-y-auto bg-white relative z-10">
            {/* 1. PERSONAL INFORMATION SECTION */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                <span className="material-icons text-lg">badge</span>
                Personal Information
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    placeholder="e.g. Johnathan Smith"
                    type="text"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-neutral-gray text-lg">
                      mail
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="john.s@municipality.gov"
                      type="email"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-neutral-gray text-lg">
                      phone
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-primary/5" />

            {/* 2. OFFICIAL ASSIGNMENT SECTION */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">
                  assignment
                </span>
                Official Assignment
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Zone Select */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Zone
                  </label>
                  <select className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none">
                    <option value="">Select Zone</option>
                    <option value="A">Zone A - Downtown</option>
                    <option value="B">Zone B - North Suburbs</option>
                    <option value="C">Zone C - Industrial Park</option>
                    <option value="D">Zone D - South District</option>
                  </select>
                </div>

                {/* Vehicle Number */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Vehicle Number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-2.5 text-neutral-gray text-lg">
                      local_shipping
                    </span>
                    <input
                      className="w-full pl-10 pr-4 py-2 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="e.g. TRK-204"
                      type="text"
                    />
                  </div>
                </div>

                {/* Account Status */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Account Status
                  </label>
                  <div className="flex items-center gap-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        defaultChecked
                        className="sr-only peer"
                        type="checkbox"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      <span className="ml-3 text-sm font-medium text-slate-600">
                        Worker is active
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-primary/5" />

            {/* 3. LOGIN CREDENTIALS SECTION */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">lock</span>
                Login Credentials
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Username */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Username/ID
                  </label>
                  <input
                    className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-primary/5 text-primary font-medium focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    disabled
                    placeholder="WM-2024-XXXX"
                    type="text"
                    defaultValue="MW-AUTO-092"
                  />
                  <p className="text-[10px] text-neutral-gray italic">
                    Auto-generated based on municipal pattern.
                  </p>
                </div>

                {/* Password */}
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-slate-700">
                    Temporary Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full px-4 py-2 rounded-lg border border-primary/20 bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                      placeholder="••••••••"
                      type="password"
                    />
                    <button
                      className="absolute right-3 top-2.5 text-neutral-gray hover:text-primary"
                      type="button"
                    >
                      <span className="material-symbols-outlined text-lg">
                        visibility
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </form>

          {/* MODAL FOOTER */}
          <div className="px-8 py-6 bg-primary/5 flex flex-col sm:flex-row justify-end gap-3 border-t border-primary/10 relative z-10">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg border border-neutral-gray text-neutral-gray font-semibold hover:bg-neutral-gray hover:text-white transition-all order-2 sm:order-1"
              type="button"
            >
              Cancel
            </button>
            <button
              className="px-8 py-2.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 shadow-md shadow-primary/20 transition-all flex items-center justify-center gap-2 order-1 sm:order-2"
              type="submit"
            >
              <span className="material-symbols-outlined text-sm">
                person_add
              </span>
              Create Worker
            </button>
          </div>

          {/* Decorative Background Visuals (Now correctly contained within panel) */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none z-0"></div>
        </DialogPanel>
      </div>
    </div>
  </Dialog>
);

export default AddWorkerDialog;
