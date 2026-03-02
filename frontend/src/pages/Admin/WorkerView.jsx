import React, { useState } from 'react';
import WorkerDrawer from './WorkerDrawer';
import WorkerMenuDialog from './WorkerMenuDialog';

// Sample worker data (in a real app you'd fetch this from an API)
const workersData = [
  {
    id: 'W-07',
    name: 'Ali Raza',
    contact: '+92 300 1234567',
    zone: 'Zone 4 (Central)',
    status: 'Active',
    tasksCompleted: 1248,
    totalTasks: 8,
    completedTasks: 4,
    rating: 4.8,
    attendance: 96,
    vehicle: 'ABC-1234',
    initials: 'AR',
  },
  {
    id: 'W-09',
    name: 'Salman Khan',
    contact: '+92 321 9876543',
    zone: 'Unassigned',
    status: 'Inactive',
    tasksCompleted: 0,
    totalTasks: 0,
    completedTasks: 0,
    rating: 0,
    attendance: 0,
    vehicle: '',
    initials: 'SK',
  },
  {
    id: 'W-12',
    name: 'Hamza Shahid',
    contact: '+92 345 5550123',
    zone: 'Zone 2 (North)',
    status: 'Active',
    tasksCompleted: 1248, // placeholder
    totalTasks: 8,
    completedTasks: 7,
    rating: 4.8,
    attendance: 96,
    vehicle: 'XYZ-789',
    initials: 'HS',
  },
];

const WorkerView = () => {
  const [selectedWorker, setSelectedWorker] = useState(null);        // for edit drawer
  const [menuWorker, setMenuWorker] = useState(null);                // which worker is being deleted

  const openEditDrawer = (worker) => setSelectedWorker(worker);
  const closeEditDrawer = () => setSelectedWorker(null);

  const openMenu = (worker) => setMenuWorker(worker);
  const closeMenu = () => setMenuWorker(null);

  const handleDelete = () => {
    if (menuWorker) {
      // Here you would call your API to delete the worker
      console.log('Delete worker', menuWorker.id);
      // Then remove from local list (if using state)
      closeMenu();
    }
  };

  return (
    <main className="flex-1 overflow-y-auto bg-background-light lg:ml-64 min-h-screen">
      <div className="max-w-full p-8">
        {/* Page Heading & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[#121614] text-3xl font-black leading-tight tracking-[-0.033em]">
              Municipal Workforce
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Manage and assign waste management staff across city zones.
            </p>
          </div>
          <button className="flex min-w-40 cursor-pointer items-center justify-center gap-2 rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal shadow-sm hover:bg-primary/90 transition-all">
            <span className="material-symbols-outlined">add</span>
            <span>Add New Worker</span>
          </button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white flex flex-col gap-2 rounded-xl p-6 border border-[#dde3e0] shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-sm font-medium">Active Workers</p>
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
            </div>
            <p className="text-[#121614] text-3xl font-bold">14</p>
          </div>
          <div className="bg-white flex flex-col gap-2 rounded-xl p-6 border border-[#dde3e0] shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-sm font-medium">On Duty Now</p>
              <span className="material-symbols-outlined text-blue-500 text-lg">electric_bolt</span>
            </div>
            <p className="text-[#121614] text-3xl font-bold">12</p>
          </div>
          <div className="bg-white flex flex-col gap-2 rounded-xl p-6 border border-[#dde3e0] shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-sm font-medium">Zones Covered</p>
              <span className="material-symbols-outlined text-orange-500 text-lg">map</span>
            </div>
            <p className="text-[#121614] text-3xl font-bold">6</p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-[#dde3e0] mb-6 flex flex-col md:flex-row gap-4 items-center shadow-sm">
          <div className="flex-1 w-full relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              search
            </span>
            <input
              className="w-full h-11 pl-11 pr-4 rounded-lg bg-background-light border-none text-[#121614] placeholder-gray-400 focus:ring-2 focus:ring-primary/50 text-sm font-normal"
              placeholder="Search workers by name or ID..."
            />
          </div>
          <div className="w-full md:w-64 relative">
            <select className="w-full h-11 pl-4 pr-10 rounded-lg bg-background-light border-none text-sm font-medium text-[#121614] appearance-none focus:ring-2 focus:ring-primary/50">
              <option>Status: All</option>
              <option>Status: Active</option>
              <option>Status: Inactive</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              expand_more
            </span>
          </div>
        </div>

        {/* Workers Table */}
        <div className="bg-white rounded-xl border border-[#dde3e0] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#dde3e0] bg-gray-50">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Worker ID</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Assigned Zone</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Today's Tasks</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#dde3e0]">
                {workersData.map((worker) => {
                  const progress = worker.totalTasks
                    ? Math.round((worker.completedTasks / worker.totalTasks) * 100)
                    : 0;
                  return (
                    <tr key={worker.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-gray-600">{worker.id}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                            {worker.initials}
                          </div>
                          <span className="text-sm font-bold text-[#121614]">{worker.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{worker.contact}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{worker.zone}</td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-bold ${
                            worker.status === 'Active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          <span
                            className={`size-1.5 rounded-full ${
                              worker.status === 'Active' ? 'bg-green-600' : 'bg-red-600'
                            }`}
                          />
                          {worker.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col gap-1.5 w-24">
                          <div className="flex justify-between text-[10px] font-bold text-gray-500">
                            <span>
                              {worker.completedTasks}/{worker.totalTasks}
                            </span>
                            <span>{progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                              className={`h-1.5 rounded-full ${
                                worker.status === 'Active' ? 'bg-primary' : 'bg-gray-400'
                              }`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {/* Edit button */}
                          <button
                            onClick={() => openEditDrawer(worker)}
                            className="p-1.5 text-gray-400 hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          {/* Three-dot menu button */}
                          <button
                            onClick={() => openMenu(worker)}
                            className="p-1.5 text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <span className="material-symbols-outlined text-xl">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 flex items-center justify-between bg-gray-50 border-t border-[#dde3e0]">
            <span className="text-xs font-medium text-gray-500">
              Showing 1 to {workersData.length} of 14 workers
            </span>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border border-[#dde3e0] rounded-lg text-xs font-bold bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50">
                Previous
              </button>
              <button className="px-3 py-1.5 border border-[#dde3e0] rounded-lg text-xs font-bold bg-white text-gray-600 hover:bg-gray-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for editing worker */}
      <WorkerDrawer
        isOpen={!!selectedWorker}
        onClose={closeEditDrawer}
        worker={selectedWorker}
      />

      {/* Menu dialog for delete confirmation */}
      <WorkerMenuDialog
        isOpen={!!menuWorker}
        onClose={closeMenu}
        onDelete={handleDelete}
      />
    </main>
  );
};

export default WorkerView;