import React, { useState } from "react";
import TaskDetailsDrawer from "./TaskDetailsDrawer";
import MapView from "./MapView";

// Sample task data (you would get this from props or an API)
const tasksData = [
  {
    id: "#WT-402",
    address: "123 Maple St, North Hills",
    wasteType: "Recycle",
    wasteIcon: "♻️",
    priority: "High",
    priorityColor: "text-red-500",
    status: "In Progress",
    statusColor: "bg-orange-100 text-orange-700",
    notes: "Customer mentioned the bin is behind the secondary wooden gate. Gate code is #4451.",
  },
  {
    id: "#WT-405",
    address: "456 Oak Ave, Sector 4",
    wasteType: "Landfill",
    wasteIcon: "🗑️",
    priority: "Standard",
    priorityColor: "text-yellow-500",
    status: "Pending",
    statusColor: "bg-gray-100 text-gray-600",
    notes: "",
  },
  {
    id: "#WT-408",
    address: "789 Pine Rd, East Side",
    wasteType: "Recycle",
    wasteIcon: "♻️",
    priority: "High",
    priorityColor: "text-red-500",
    status: "Pending",
    statusColor: "bg-gray-100 text-gray-600",
    notes: "",
  },
];

const TaskListView = ({ worker }) => {
  const [currentView, setCurrentView] = useState("list"); // "list" or "map"
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const openDrawer = (task) => {
    setSelectedTask(task);
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedTask(null);
  };

  return (
    <main className="flex-1 overflow-y-auto bg-background-light p-6 flex flex-col gap-6">
      {/* VIEW TOGGLE AND SUMMARY BAR */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Tabs */}
        <div className="flex border-b border-[#dde3e0] gap-8">
          <button
            onClick={() => setCurrentView("list")}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${
              currentView === "list"
                ? "border-b-primary text-primary"
                : "border-b-transparent text-[#6a8174] hover:text-primary transition-colors"
            }`}
          >
            <p className="text-sm font-bold tracking-[0.015em]">List View</p>
          </button>
          <button
            onClick={() => setCurrentView("map")}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-3 pt-2 ${
              currentView === "map"
                ? "border-b-primary text-primary"
                : "border-b-transparent text-[#6a8174] hover:text-primary transition-colors"
            }`}
          >
            <p className="text-sm font-bold tracking-[0.015em]">Map View</p>
          </button>
        </div>

        {/* Summary Bar */}
        <div className="flex gap-4">
          <div className="flex items-center gap-3 bg-white border border-[#dde3e0] px-5 py-3 rounded-xl shadow-sm">
            <div className="flex flex-col">
              <p className="text-[10px] uppercase font-bold text-[#6a8174]">
                Today's Tasks
              </p>
              <p className="text-xl font-bold">8</p>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="flex flex-col">
              <p className="text-[10px] uppercase font-bold text-[#6a8174]">
                Completed
              </p>
              <p className="text-xl font-bold text-primary">2</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Content */}
      {currentView === "list" ? (
        <div className="flex flex-1 gap-6 overflow-hidden">
          {/* TASK LIST TABLE */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="bg-white border border-[#dde3e0] rounded-xl shadow-sm overflow-hidden flex flex-col">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 border-b border-[#dde3e0]">
                    <tr>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
                        Task ID
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
                        Address
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
                        Waste Type
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
                        Priority
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
                        Status
                      </th>
                      <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#6a8174]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#dde3e0]">
                    {tasksData.map((task) => (
                      <tr
                        key={task.id}
                        className={`hover:bg-gray-50 transition-colors ${
                          selectedTask?.id === task.id
                            ? "bg-primary/5 border-l-4 border-l-primary"
                            : ""
                        }`}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                          {task.id}
                        </td>
                        <td className="px-6 py-4 text-sm text-[#121614]">
                          {task.address}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f1f4f2] text-xs font-medium text-[#121614] w-fit">
                            <span>{task.wasteIcon}</span> {task.wasteType}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className={`flex items-center gap-1.5 text-xs font-medium ${task.priorityColor}`}>
                            <span className="size-2 rounded-full bg-current" /> {task.priority}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`text-xs font-medium px-2 py-1 rounded ${task.statusColor}`}>
                            {task.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => openDrawer(task)}
                            className="text-primary font-bold text-sm hover:underline"
                          >
                            {task.status === "In Progress" ? "Verify" : "Start"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Task Details Drawer */}
          <TaskDetailsDrawer
            isOpen={isDrawerOpen}
            onClose={closeDrawer}
            task={selectedTask}
          />
        </div>
      ) : (
        <MapView />
      )}
    </main>
  );
};

export default TaskListView;