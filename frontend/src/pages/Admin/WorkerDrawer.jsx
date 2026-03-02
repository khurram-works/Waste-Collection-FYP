// import { Dialog, DialogPanel } from '@headlessui/react';

// const WorkerDrawer = ({ isOpen, onClose, worker }) => (
//   <Dialog open={isOpen} onClose={onClose} className="relative z-50">
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
//     <div className="fixed inset-0 flex justify-end">
//       <DialogPanel className="w-96 bg-white h-full shadow-2xl flex flex-col">
//         {/* drawer content */}
//       </DialogPanel>
//     </div>
//   </Dialog>
// );

import { Dialog, DialogPanel } from '@headlessui/react';

const WorkerDrawer = ({ isOpen, onClose, worker }) => {
  if (!worker) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Dim the background */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Drawer slides in from the right */}
      <div className="fixed inset-0 flex justify-end">
        <DialogPanel
          transition
          className="w-96 bg-white h-full shadow-2xl flex flex-col transform transition duration-300 ease-in-out data-closed:translate-x-full"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#dde3e0] flex items-center justify-between">
            <div>
              <h2 className="text-[#121614] text-lg font-bold">
                Manage Worker
              </h2>
              <p className="text-sm text-primary font-bold">
                {worker.name} ({worker.id})
              </p>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-8">
            {/* Official Assignment */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-gray-400 text-sm">badge</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  Official Assignment
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600">Assigned Zone</label>
                  <div className="relative">
                    <select
                      defaultValue={worker.zone}
                      className="w-full h-10 pl-3 pr-10 rounded-lg bg-background-light border-none text-sm font-medium focus:ring-2 focus:ring-primary/50 appearance-none"
                    >
                      <option>Zone 4 (Central)</option>
                      <option>Zone 1 (South)</option>
                      <option>Zone 2 (North)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      unfold_more
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600">Vehicle No.</label>
                  <input
                    type="text"
                    defaultValue={worker.vehicle || ''}
                    className="w-full h-10 px-3 rounded-lg bg-background-light border-none text-sm font-medium focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-background-light rounded-lg">
                  <div>
                    <p className="text-sm font-bold text-gray-700">Account Status</p>
                    <p className="text-[10px] text-gray-500">Toggle worker active/inactive</p>
                  </div>
                  <div
                    className={`relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer ${
                      worker.status === 'Active' ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition shadow-sm ${
                        worker.status === 'Active' ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Performance & Details */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-gray-400 text-sm">trending_up</span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500">
                  Performance & Details
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg border border-[#dde3e0]">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Tasks Completed</p>
                  <p className="text-xl font-black text-gray-700 mt-1">{worker.tasksCompleted}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-[#dde3e0]">
                  <p className="text-[10px] font-bold text-gray-400 uppercase">Avg. Rating</p>
                  <div className="flex items-center gap-1 mt-1 text-orange-500">
                    <p className="text-xl font-black">{worker.rating}</p>
                    <span className="material-symbols-outlined text-base">star</span>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
                <p className="text-xs font-bold text-primary uppercase mb-2">Attendance Summary</p>
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-gray-600">Month: October 2023</span>
                  <span className="font-bold">{worker.attendance}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: `${worker.attendance}%` }}
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Footer buttons */}
          <div className="p-6 border-t border-[#dde3e0] bg-gray-50/50 space-y-3">
            <button className="w-full h-11 bg-primary text-white font-bold rounded-lg shadow-sm hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">save</span>
              <span>Save Changes</span>
            </button>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 h-10 bg-white border border-[#dde3e0] text-gray-600 font-bold text-sm rounded-lg hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button className="flex-1 h-10 text-red-600 font-bold text-sm hover:bg-red-50 rounded-lg transition-all">
                Deactivate Account
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default WorkerDrawer;