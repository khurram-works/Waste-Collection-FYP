import React from "react";
import { Dialog, DialogPanel } from "@headlessui/react";

const TaskDetailsDrawer = ({ isOpen, onClose, task }) => {
  if (!task) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="fixed inset-0 flex justify-end">
        <DialogPanel
          transition
          className="w-96 bg-white h-full shadow-2xl flex flex-col transform transition duration-300 ease-in-out data-closed:translate-x-full"
        >
          <div className="p-4 border-b border-[#dde3e0] flex justify-between items-center">
            <h3 className="font-bold">Task Details</h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="p-5 flex-1 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-[10px] uppercase font-bold text-[#6a8174]">
                Assigned Address
              </p>
              <p className="text-base font-semibold leading-tight">{task.address}</p>
              <button className="flex items-center gap-1 text-primary text-xs font-bold mt-1">
                <span className="material-symbols-outlined text-sm">directions</span>
                Open in Maps
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-[10px] uppercase font-bold text-[#6a8174]">
                Waste Specs
              </p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{task.wasteIcon}</span>
                  <span className="text-sm">{task.wasteType}</span>
                </div>
                <span className={`text-sm font-medium ${task.priorityColor}`}>
                  {task.priority} Priority
                </span>
              </div>
            </div>

            <div className="bg-background-light p-4 rounded-lg flex flex-col gap-2">
              <div className="flex items-center gap-2 text-[#6a8174]">
                <span className="material-symbols-outlined text-sm">sticky_note_2</span>
                <p className="text-[10px] uppercase font-bold">Worker Notes</p>
              </div>
              <p className="text-sm italic text-gray-600">"{task.notes}"</p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t border-[#dde3e0]">
            <button
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
              onClick={() => {
                // You can add logic to switch to map view if needed
                onClose();
              }}
            >
              <span className="material-symbols-outlined">play_arrow</span>
              Navigate & Start Task
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default TaskDetailsDrawer;