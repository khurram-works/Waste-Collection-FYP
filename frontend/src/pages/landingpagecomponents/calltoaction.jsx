import React from "react";
import { useNavigate } from "react-router-dom";

function CallToAction() {

  const navigate = useNavigate();

  const handleregister = () => {
    // login logic here
    navigate("/register");
  };

  return (
    // <section className="py-20 bg-primary/5 ">
    //   <div className="max-w-300 mx-auto px-6 lg:px-40 text-center">
    //     <h2 className="text-[#121614] text-3xl md:text-4xl font-bold mb-10">
    //       Join the movement for a cleaner city.
    //     </h2>
    //     <div className="flex flex-col sm:flex-row gap-4 justify-center">
    //       <button className="flex min-w-60 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-white  border-2 border-primary text-primary text-base font-bold hover:bg-primary hover:text-white transition-all" onClick={handleLogin}>
    //         <span >Login to Your Account</span>
    //       </button>
    //       <button className="flex min-w-60 cursor-pointer items-center justify-center rounded-lg h-14 px-6 bg-primary text-white text-base font-bold shadow-lg hover:bg-primary/90 transition-all" onClick={handleregister}>
    //         <span >Create a Free Citizen Account</span>
    //       </button>
    //     </div>
    //   </div>
    // </section>

    <section className="w-full bg-[#101814]/90 text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="layout-container flex flex-col items-center text-center px-4 md:px-10 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Ready to contribute to a cleaner city and earn rewards?
          </h2>
          <p className="text-gray-300 max-w-2xl mb-10 text-lg">
            Join thousands of citizens making a difference today. It takes less
            than 2 minutes to get started.
          </p>
          <button className="flex min-w-50 cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 text-[#f9fbfa] text-lg font-bold leading-normal tracking-[0.015em] shadow-lg shadow-green-900/50" onClick={handleregister}>
            Create Your Free Account
          </button>
        </div>
      </section>


  );
}

export default CallToAction;
