import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleregister = () => {
    navigate("/register");
  };

  return (
    // <section className="relative bg-white  py-16 md:py-24">
    //   <div className="max-w-300 mx-auto px-6 lg:px-40">
    //     <div className="@container">
    //       <div className="flex flex-col items-center justify-center text-center gap-8">
    //         <div className="flex flex-col gap-4 max-w-200">
    //           <h1 className="text-[#121614] text-4xl md:text-6xl font-bold leading-tight tracking-[-0.033em]">
    //             Turn Your Recyclables into Rewards.
    //           </h1>
    //           <h2 className="text-gray-600  text-base md:text-xl font-normal leading-relaxed">
    //             A digital platform connecting citizens, municipal workers, and
    //             the city for efficient waste collection. Help the planet and
    //             your wallet.
    //           </h2>
    //         </div>
    //         <button className="flex min-w-50 cursor-pointer items-center justify-center rounded-lg h-12 md:h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg hover:scale-105 transition-transform" onClick={handleregister}>
    //           <span>Start Earning →</span>
    //         </button>
    //         <div className="w-full mt-12 rounded-2xl overflow-hidden aspect-16/7 relative shadow-2xl">
    //           <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
    //           <img
    //             alt="Recycling bins in a clean modern city environment"
    //             className="w-full h-full object-cover"
    //             src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy9Wx-9PzzvlqqMO67z_9qbFQWVe4Nk5ehlElsScUmzdAEaeXT4MkvOsuMHX3AWiHf_XyczW5mgH-hlZNdy7Df1PaOLBpL2YGhZz6AKJk_G63d_DInYtAvyZAZ0GU_NazBT6POvNT9_V3uVMrEg18HFpw6CEWMDbofan1R4Jma6GXsbWl8tFc-KIR7K-JljLDZtf5HkH4WS0HYbLrk3_KRTzIdBX0b1VN_9pJQ98oaXatpNurX7xpexsmbAblPtWbSa1vUQ2oS"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="w-full max-w-300 mx-auto px-4 md:px-10 py-12 md:py-20">
      <div className="@container">
        <div className="flex flex-col gap-10 px-4 @[480px]:gap-8 @[864px]:flex-row items-center">
          <div className="flex flex-col gap-6 flex-1 @[480px]:gap-8 text-left order-2 @[864px]:order-1">
            <div className="flex flex-col gap-4">
              <h1 className="text-[#101814] text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl lg:text-6xl">
                Turn Your Recyclables into Rewards.
              </h1>
              <h2 className="text-[#4b5952] text-lg font-normal leading-relaxed max-w-xl">
                A digital platform connecting citizens, waste workers, and the
                municipal office for efficient collection and recycling.
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark transition-colors text-[#f9fbfa] text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20" onClick={handleregister}>
                <span className="truncate">Start Earning Today →</span>
              </button>
              {/* <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 text-primary hover:bg-[#eaf1ed] transition-colors text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Learn More</span>
              </button> */}
            </div>
          </div>
          <div className="w-full flex-1 order-1 @[864px]:order-2 rounded-2xl overflow-hidden shadow-2xl relative aspect-4/3 @[864px]:aspect-square lg:aspect-4/3 bg-linear-to-br from-[#eaf1ed] to-[#d4e2da]">
            <img
              alt="People recycling waste in a modern park"
              className="w-full h-full object-cover mix-blend-multiply opacity-90"
              data-alt="People recycling waste in a modern park"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG5dKCHn3jZmxeV1TAcmst0vaHJ2mwEdaRnhk0BoMBrI6MwWnVJ6NOxh1RuqLDXdJ_hrHKqVHVeWtE4uTthdGQ5i26dLMHtR0_iSjbYYgqmYAuXK9tpZ22ITrdRr-AjHkGTOqgRy38FStntUZkbuk3M7ISQ0sw2_7d4E9TK9v3jS5xmpYwdu6SV-wOMdmcIKLMYyaPhBohpFObi-6KkBwItm0xHjZ_58swf7Y_EGej93jsFrAXo9Sh1SOz_mZ1rUkcYfXbRhAj-kuS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
