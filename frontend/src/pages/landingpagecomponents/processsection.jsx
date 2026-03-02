import React from "react";

function ProcessSection() {
  const steps = [
    {
      icon: "smartphone",
      title: "Step 1: Submit",
      desc: "Citizens submit a pickup request for segregated waste through our mobile app or web portal.",
    },
    {
      icon: "recycling",
      title: "Step 2: Verify",
      desc: "Municipal workers collect, weigh, and verify the waste quality at your doorstep.",
    },
    {
      icon: "payments",
      title: "Step 3: Earn",
      desc: "The system calculates and credits earnings directly to the citizen's digital wallet instantly.",
    },
  ];

  return (
    <>
      {/* <section className="bg-[#f5f5f5] dark:bg-background-dark/50 py-20">
        <div className="max-w-300 mx-auto px-6 lg:px-40">
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-[#121614]  text-3xl font-bold leading-tight tracking-[-0.015em]">
              How It Works in 3 Steps
            </h2>
            <div className="h-1 w-20 bg-primary mt-4 mx-auto md:mx-0"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 p-8 bg-white  rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="size-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {step.icon}
                  </span>
                </div>
                <div>
                  <h3 className="text-[#121614]  text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600  text-base leading-normal">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="w-full max-w-300 mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="mb-12 px-4 text-center">
          <h2 className="text-[#101814] text-3xl font-bold leading-tight tracking-[-0.015em]">
            How It Works
          </h2>
          <p className="mt-3 text-[#4b5952] max-w-2xl mx-auto">
            Getting started is easy. Follow these three simple steps to start
            earning rewards for your recycling efforts.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-[#eaf1ed] -z-10"></div>

          <div className="flex flex-col items-center text-center gap-4 bg-background-light p-4 z-10">
            <div className="size-24 rounded-full bg-white border-4 border-[#eaf1ed] flex items-center justify-center text-primary shadow-sm mb-2 relative">
              <span className="material-symbols-outlined text-4xl">
                calendar_add_on
              </span>
              <div className="absolute -top-2 -right-2 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                1
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#101814]">Submit Request</h3>
            <p className="text-[#4b5952] text-sm leading-relaxed">
              Log in to the app, select the type of waste you have, and schedule
              a convenient pickup time.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-background-light p-4 z-10">
            <div className="size-24 rounded-full bg-white border-4 border-[#eaf1ed] flex items-center justify-center text-primary shadow-sm mb-2 relative">
              <span className="material-symbols-outlined text-4xl">
                local_shipping
              </span>
              <div className="absolute -top-2 -right-2 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                2
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#101814]">
              Verified Collection
            </h3>
            <p className="text-[#4b5952] text-sm leading-relaxed">
              Our verified collection partner arrives, weighs your recyclables,
              and validates the quality.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-4 bg-background-light p-4 z-10">
            <div className="size-24 rounded-full bg-white border-4 border-[#eaf1ed] flex items-center justify-center text-primary shadow-sm mb-2 relative">
              <span className="material-symbols-outlined text-4xl">
                account_balance_wallet
              </span>
              <div className="absolute -top-2 -right-2 size-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white">
                3
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#101814]">Wallet Credit</h3>
            <p className="text-[#4b5952] text-sm leading-relaxed">
              Earnings are instantly credited to your digital wallet, ready to
              be redeemed or transferred.
            </p>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default ProcessSection;
