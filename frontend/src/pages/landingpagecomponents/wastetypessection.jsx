import React from "react";
import { useNavigate } from "react-router-dom";

function WasteTypesSection() {

  const navigate = useNavigate();
  
    const handleregister = () => {
      // login logic here
      navigate("/register");
    };

  return (
    // <section className="bg-white  py-20">
    //   <div className="max-w-300 mx-auto px-6 lg:px-40">
    //     <div className="mb-12 text-center">
    //       <h2 className="text-[#121614] text-3xl font-bold leading-tight tracking-[-0.015em]">
    //         What We Accept & What You Earn
    //       </h2>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-gray-200  shadow-xl">
    //       <div className="flex flex-col p-8 bg-primary/5  border-r border-gray-200">
    //         <div className="mb-6">
    //           <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
    //             High Value
    //           </span>
    //           <h3 className="text-primary text-2xl font-black mt-4">
    //             Earn More (RsX/kg)
    //           </h3>
    //         </div>
    //         <ul className="space-y-4 flex-1">
    //           {["PET Bottles", "Cardboard", "Metal Cans"].map((item) => (
    //             <li
    //               key={item}
    //               className="flex items-center gap-3 text-gray-700"
    //             >
    //               <span className="material-symbols-outlined text-primary">
    //                 check_circle
    //               </span>
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //         <p className="mt-8 text-sm italic text-gray-500">
    //           Note: Must be properly separated and cleaned.
    //         </p>
    //       </div>

    //       <div className="flex flex-col p-8 bg-white border-r border-gray-200">
    //         <div className="mb-6">
    //           <span className="bg-gray-200 text-gray-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
    //             Medium Value
    //           </span>
    //           <h3 className="text-[#121614]  text-2xl font-black mt-4">
    //             Earn Less (RsY/kg)
    //           </h3>
    //         </div>
    //         <ul className="space-y-4 flex-1">
    //           {["Mixed Paper", "Newspapers"].map((item) => (
    //             <li
    //               key={item}
    //               className="flex items-center gap-3 text-gray-700"
    //             >
    //               <span className="material-symbols-outlined text-gray-400">
    //                 check_circle
    //               </span>
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //         <p className="mt-8 text-sm italic text-gray-500">
    //           Note: For clean, mixed dry recyclables.
    //         </p>
    //       </div>

    //       <div className="flex flex-col p-8 bg-gray-50 ">
    //         <div className="mb-6">
    //           <span className="bg-red-100 text-red-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
    //             Non-Recyclable
    //           </span>
    //           <h3 className="text-gray-500 text-2xl font-black mt-4">
    //             No Earnings
    //           </h3>
    //         </div>
    //         <ul className="space-y-4 flex-1">
    //           {["Food Waste", "Sanitary Waste", "All other waste"].map(
    //             (item) => (
    //               <li
    //                 key={item}
    //                 className="flex items-center gap-3 text-gray-500 "
    //               >
    //                 <span className="material-symbols-outlined">cancel</span>
    //                 {item}
    //               </li>
    //             ),
    //           )}
    //         </ul>
    //         <p className="mt-8 text-sm italic text-gray-500">
    //           Note: Responsibly sent to landfill/compost.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="w-full bg-[#f1f6f4] py-16">
      <div className="w-full max-w-300 px-4 md:px-10 mx-auto">
        <div className="mb-10 px-4 text-center md:text-left">
          <h2 className="text-[#101814] text-3xl font-bold leading-tight tracking-[-0.015em]">
            What We Collect &amp; How You Earn
          </h2>
          <p className="mt-2 text-[#4b5952]">
            Transparent pricing for your contributions towards a cleaner planet.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          <div className="flex flex-col gap-4 rounded-xl border border-[#d4e2da] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-green-100 rounded-lg text-primary">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <span className="text-[#f9fbfa] text-xs font-bold uppercase tracking-wider rounded-full bg-primary px-3 py-1">
                  Best Value
                </span>
              </div>
              <h3 className="text-[#101814] text-xl font-bold mt-2">
                High-Value Recyclables
              </h3>
              <p className="flex items-baseline gap-1 text-[#101814]">
                <span className="text-[#101814] text-3xl font-black tracking-tight">
                  Rs 15
                </span>
                <span className="text-[#6e7c75] text-sm font-medium">
                  per kg
                </span>
              </p>
            </div>
            <div className="h-px bg-[#eaf1ed] my-2"></div>
            <div className="flex flex-col gap-3">
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
                PET bottles (Clean)
              </div>
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
                Cardboard Boxes
              </div>
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
                Metal Cans &amp; Tins
              </div>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full rounded-lg h-10 px-4 bg-[#eaf1ed] hover:bg-[#d4e2da] text-primary text-sm font-bold transition-colors" onClick={handleregister}>
                Start Collecting
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-xl border border-[#d4e2da] bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-yellow-50 rounded-lg text-yellow-700">
                  <span className="material-symbols-outlined">newspaper</span>
                </div>
                <span className="text-yellow-800 text-xs font-bold uppercase tracking-wider rounded-full bg-yellow-100 px-3 py-1">
                  Moderate Value
                </span>
              </div>
              <h3 className="text-[#101814] text-xl font-bold mt-2">
                Paper Products
              </h3>
              <p className="flex items-baseline gap-1 text-[#101814]">
                <span className="text-[#101814] text-3xl font-black tracking-tight">
                  Rs 5
                </span>
                <span className="text-[#6e7c75] text-sm font-medium">
                  per kg
                </span>
              </p>
            </div>
            <div className="h-px bg-[#eaf1ed] my-2"></div>
            <div className="flex flex-col gap-3">
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
                Mixed Paper
              </div>
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
                Newspapers
              </div>
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  check_circle
                </span>
                Magazines
              </div>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full rounded-lg h-10 px-4 bg-[#eaf1ed] hover:bg-[#d4e2da] text-primary text-sm font-bold transition-colors" onClick={handleregister}>
                Start Collecting
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-xl border border-[#d4e2da] bg-white p-6 shadow-sm hover:shadow-md transition-shadow opacity-90">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-gray-100 rounded-lg text-gray-600">
                  <span className="material-symbols-outlined">delete</span>
                </div>
                <span className="text-gray-600 text-xs font-bold uppercase tracking-wider rounded-full bg-gray-200 px-3 py-1">
                  No Earnings
                </span>
              </div>
              <h3 className="text-[#101814] text-xl font-bold mt-2">
                Non-Recyclable
              </h3>
              <p className="flex items-baseline gap-1 text-[#101814]">
                <span className="text-[#101814] text-3xl font-black tracking-tight">
                  N/A
                </span>
                <span className="text-[#6e7c75] text-sm font-medium">
                  Standard Disposal
                </span>
              </p>
            </div>
            <div className="h-px bg-[#eaf1ed] my-2"></div>
            <div className="flex flex-col gap-3">
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400 text-[20px]">
                  cancel
                </span>
                General Household Waste
              </div>
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400 text-[20px]">
                  cancel
                </span>
                Organic Waste (Compost)
              </div>
              <div className="text-sm text-[#4b5952] flex items-center gap-3">
                <span className="material-symbols-outlined text-gray-400 text-[20px]">
                  cancel
                </span>
                Hazardous Material
              </div>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full rounded-lg h-10 px-4 bg-[#eaf1ed] hover:bg-[#d4e2da] text-primary text-sm font-bold transition-colors" onClick={handleregister}>
                Start Collecting
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WasteTypesSection;
