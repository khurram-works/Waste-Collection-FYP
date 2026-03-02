import React from "react";

const CitizenHeader = ({ user }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#dde3e0] bg-white px-6 py-3 z-10">
      <div className="flex items-center gap-2 text-[#121614]">
        <div className=" text-primary">
          <div className="items-center justify-center h-full w-full">
            <span className="material-symbols-outlined pt-1 text-3xl">
              recycling
            </span>
          </div>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-tight">
          Smart Waste Platform
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-background-light text-[#121614] text-sm font-bold">
          <span className="truncate">Welcome, {user.name}</span>
        </button>
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
          style={{ backgroundImage: `url("${user.avatarUrl}")` }}
        ></div>
      </div>
    </header>
  );
};

export default CitizenHeader;
