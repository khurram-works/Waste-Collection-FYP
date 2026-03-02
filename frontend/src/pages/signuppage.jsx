import React from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // login logic here
    navigate("/login");
  };

  const citizendashboard = () => {
    navigate("/citizen-dashboard");
  };
  return (
    <div className="font-display bg-background-light text-[#121614] min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full bg-white border-b border-[#dde3e0] px-4 md:px-10 lg:px-40 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="pt-1 text-primary">
            <span className="material-symbols-outlined text-3xl">
              recycling
            </span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">
            Smart Waste Platform
          </h1>
        </div>
        <div className="hidden sm:block">
          <a
            className="text-sm font-semibold text-primary hover:underline cursor-pointer"
            onClick={handleLogin}
          >
            Already have an account? Log in
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="grow flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-150 bg-white rounded-xl shadow-xl border border-[#dde3e0] overflow-hidden">
          {/* Headline & Body Text */}
          <div className="px-8 pt-10 pb-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#121614] mb-3">
              Create Your Citizen Account
            </h2>
            <p className="text-base text-[#6a8174]">
              Register to start submitting waste pickup requests and earning
              rewards.
            </p>
          </div>

          {/* Registration Form */}
          <form className="px-8 pb-10 space-y-5">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#121614]">
                Full Name *
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#dde3e0] bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#6a8174]"
                placeholder="Enter your full name"
                type="text"
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#121614]">
                Email Address *
              </label>
              <input
                className="w-full h-12 px-4 rounded-lg border border-[#dde3e0] bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#6a8174]"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            {/* Password Group (Responsive Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#121614]">
                  Create Password *
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border border-[#dde3e0] bg-white  focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#6a8174]"
                  placeholder="Minimum 8 characters"
                  type="password"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-[#121614] ">
                  Confirm Password *
                </label>
                <input
                  className="w-full h-12 px-4 rounded-lg border border-[#dde3e0]  bg-white  focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#6a8174]"
                  placeholder="Re-enter your password"
                  type="password"
                />
              </div>
            </div>

            {/* Pickup Address */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-[#121614] ">
                Pickup Address *
              </label>
              <textarea
                className="w-full p-4 rounded-lg border border-[#dde3e0]  bg-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#6a8174] resize-none"
                placeholder="Your primary address for waste collection"
                rows={3}
              ></textarea>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                className="mt-1 h-5 w-5 rounded border-[#dde3e0] text-primary focus:ring-primary"
                id="terms"
                type="checkbox"
              />
              <label
                className="text-sm text-[#6a8174]  leading-relaxed"
                htmlFor="terms"
              >
                I agree to the{" "}
                <a
                  className="text-primary hover:underline font-medium"
                  href="#"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="text-primary hover:underline font-medium"
                  href="#"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit Button */}
            <button
              className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-4 rounded-lg transition-colors shadow-lg shadow-primary/20 mt-4 flex items-center justify-center gap-2 cursor-pointer"
              type="submit"
              onClick={citizendashboard}
            >
              <span className="material-symbols-outlined text-[20px]">
                person_add
              </span>
              Create Account
            </button>

            {/* Login Redirect (Visible on Mobile) */}
            <div className="text-center pt-4">
              <p className="text-sm text-[#6a8174] ">
                Already part of the platform?{" "}
                <a
                  className="text-primary font-bold hover:underline cursor-pointer"
                  onClick={handleLogin}
                >
                  Log in to your account
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-[#6a8174] text-sm">
        <p>© 2025 Smart Waste Platform</p>
      </footer>
    </div>
  );
};

export default SignUpPage;
