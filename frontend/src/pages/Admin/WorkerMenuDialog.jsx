import { Dialog, DialogPanel } from '@headlessui/react';

const WorkerMenuDialog = ({ isOpen, onClose, onDelete }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Dim background */}
      <div className="fixed inset-0 bg-black/20" />

      {/* Center the dialog */}
      <div className="fixed inset-0 flex items-center justify-center">
        <DialogPanel className="rounded-xl bg-white p-6 shadow-xl max-w-xs w-full">
          <p className="text-center mb-4 text-gray-700">Delete this worker?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                onDelete();   // actually delete the worker (you'll add the logic)
                onClose();
              }}
              className="px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default WorkerMenuDialog;