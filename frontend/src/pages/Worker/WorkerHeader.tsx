import React from "react";

const WorkerHeader = ({ worker }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dde3e0] bg-white px-6 py-3 z-20">
      <div className="flex items-center gap-2 text-[#121614]">
        <div className=" text-primary">
          <div className='items-center justify-center h-full w-full'>
          <span className='material-symbols-outlined pt-1 text-3xl'>recycling</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
            Smart Waste Platform
          </h2>
          <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">
            Worker
          </span>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-6 items-center">
        <div className="flex items-center gap-3">
          <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-9 px-4 bg-primary text-white text-sm font-bold">
            <span className="truncate">Worker: {worker.name}</span>
          </button>
          <button className="flex items-center justify-center rounded-lg h-9 w-9 bg-gray-100 text-[#121614]">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 border border-gray-200"
          style={{ backgroundImage: `url("${worker.avatarUrl}")` }}
        />
      </div>
    </header>
  );
};

export default WorkerHeader;