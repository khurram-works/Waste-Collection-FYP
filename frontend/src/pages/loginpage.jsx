import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// This is your main component
function MyPage() {
  const [selectedRole, setSelectedRole] = useState('Citizen');
  const navigate = useNavigate();

  const handleregister = () => {
    // login logic here
    navigate("/register");
  };

  const handlehome = () =>{
    navigate("/");
  }

  const citizendashboard = () =>{
    navigate("/citizen-dashboard")
  }

  const workerdashboard = () =>{
    navigate("/worker-dashboard")
  }

  const admindashboard = () =>{
    navigate("/admin-dashboard")
  }

  const handleDashboardRedirect = () => {
    switch (selectedRole) {
      case "Citizen":
        citizendashboard();
        break;
      case "Worker":
        workerdashboard();
        break;
      case "Admin":
        admindashboard();
        break;
      default:
        console.log("No role selected");
    }
  };

  return (
    <div className="bg-background-light min-h-screen flex flex-col font-sans transition-colors duration-300">

      {/* // Navigation */}
      <header className="w-full bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
              <div className="pt-1 text-primary">
              <span className="material-symbols-outlined text-3xl">
                recycling
              </span>
            </div>
            <h2 className="text-gray-900 text-lg font-bold leading-tight tracking-tight">Smart Waste Platform</h2>
          </div>
          <a onClick={handlehome} className="text-gray-600 text-sm font-medium cursor-pointer hover:text-primary transition-colors">Go to Home</a>
        </div>
      </header>

      {/* // Main Content Area */}
      <main className="grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-160 bg-white rounded-xl shadow-xl border border-gray-100  overflow-hidden">

          {/* // Headline & Body Text */}
          <div className="pt-10 pb-6 px-8 text-center">
            <h1 className="text-gray-900 text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
            <p className="text-gray-500 text-base">Log in to access your dashboard.</p>
          </div>

          <div className="px-8 pb-12">
            {/* // Role Selection Section */}
            <div className="mb-8">
              <h3 className="text-gray-900 text-sm uppercase  font-bold tracking-wider  mb-4">I am logging in as a: {selectedRole}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* Citizen Role */}
                <div className={`cursor-pointer group flex flex-col p-4 rounded-lg border-2 ${selectedRole === "Citizen" ? "border-primary bg-primary/5 " : "border-gray-100 hover:border-primary/50"} transition-all`} onClick={()=>setSelectedRole("Citizen")}>
                  <div
                    className="w-full aspect-square rounded-md mb-3 bg-center bg-cover"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCaluBJNp6JO94ryIM0zx1oGEzsYzfo3SxIdWhwAhXVFPcOa9OZASOBX91PYq03Bh6NKClxG0qkbDB-Dk8u8TkVP60-TnqJIQg8MlQxHK49c118MFE2U58qdsgwJY_JrctutJoTD6yZCZ1zCTuch7JT8BBLW5EgXD6qHPHcQSWR_0tHLQNKQzebf3_K5r8xTJXxYUD3ui2l2dvIhfrysS_lzGNjrmTb4DtM5pQNVrvSiqGGkIGrJpHyY5qm8LS5RTEzKPuiL0gE')" }}
                  ></div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-900 text-sm font-bold">Citizen</p>
                     {selectedRole === "Citizen" && <span className="text-primary text-lg">✓</span>}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">Submit requests & track earnings.</p>
                </div>

                {/* Worker Role */}
                <div className={`cursor-pointer group flex flex-col p-4 rounded-lg border-2 ${selectedRole === "Worker" ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/50"} transition-all`} onClick={()=>setSelectedRole("Worker")}>
                  <div
                    className="w-full aspect-square rounded-md mb-3 bg-center bg-cover transition-all"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDku_gU-dffmh6iEKlnlLnvQDPSnxDZXgqMp-2VGcUVu1Ra8D71wwdkf08jKM7mo-CUg2ZCWkj1KAjt3mczmYQyMpGfLpoFbI56kOkCeSrgNl2yEMRT3Xs-BkJrgONvRHVIuqlvI5kuOflXCFTBiCEPZyxz1l13baXoZcQSvR3MatLhnYopyf8gkAlJbupsflRG5QzIGIyLk6ZjNdfPj01402QAxnUdPd--DDDQMFRqpo8RIB8-lTj_rEV6j2lrlhpu1IkrvHkE')" }}
                  ></div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-900 text-sm font-bold">Worker</p>
                     {selectedRole === "Worker" && <span className="text-primary text-lg">✓</span>}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">View & complete assigned tasks.</p>
                </div>

                {/* Admin Role */}
                <div className={`cursor-pointer group flex flex-col p-4 rounded-lg border-2 ${selectedRole === "Admin" ? "border-primary bg-primary/5" : "border-gray-100 hover:border-primary/50"} transition-all`} onClick={()=>setSelectedRole("Admin")}>
                  <div
                    className="w-full aspect-square rounded-md mb-3 bg-center bg-cover  transition-all"
                    style={{ backgroundImage: "url('/admin.jpg')" }}
                  ></div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-gray-900 text-sm font-bold">Admin</p>
                     {selectedRole === "Admin" && <span className="text-primary text-lg">✓</span>}
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">Manage system & assignments.</p>
                </div>

              </div>
            </div>

            {/* // Login Form */}
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                  placeholder="Enter your registered email"
                  type="email"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <a className="text-sm font-semibold text-primary hover:underline" href="#">Forgot Password?</a>
                </div>
                <input
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all outline-none"
                  placeholder="Enter your password"
                  type="password"
                />
              </div>

              <button
                className="w-full py-3.5 px-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] mt-4"
                type="button" onClick={handleDashboardRedirect}
              >
                Log In
              </button>
            </form>

            {/* // Sign up Link */}
            <div className="mt-8 text-center border-t border-gray-100 pt-6">
              <p className="text-gray-600 dark:text-gray-400">
                Don't have an account? <a className="text-primary font-bold hover:underline cursor-pointer" onClick={handleregister}>Sign up here</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* // Footer */}
      <footer className="w-full py-8 text-center border-t border-gray-100">
        <p className="text-gray-400 text-sm">© 2025 Smart Waste Platform. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default MyPage;

