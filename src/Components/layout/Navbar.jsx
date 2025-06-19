// Navbar.jsx
import React from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  User, 
  Menu, 
  ChevronDown,Users
} from 'lucide-react';

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, isProfileDropdownOpen, setIsProfileDropdownOpen }) => {
  return (

    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-40 shadow-md py-2 lg:py-5">
        <div className="flex items-center justify-between px-4 lg:px-8 h-16">
          {/* Left: Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="xl:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
                  HRMSPro
                </h1>
              </div>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-3xl mx-4 lg:mx-10  ">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-600" />
              </div>
              <input
                type="text"
                placeholder="Search employees, departments, or documents..."
                className="w-full pl-10 pr-4 py-2.5 border border-slate-400 rounded-xl bg-white/70  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-md lg:text-xl placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Right: Actions and Profile */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <button className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              <Bell className="w-5 h-5 lg:w-8 lg:h-8" />
              <span className="absolute -top-1 -right-2 w-4 h-4 lg:w-6 lg:h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="w-2 h-2  flex justify-center items-center text-white rounded-full">5</span>
              </span>
            </button>

            {/* Settings */}
            <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              <Settings className="w-5 h-5 lg:w-8 lg:h-8" />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="hidden md:block text-left">
                  <p className="text-sm lg:text-lg font-medium text-slate-900">Shubham Patel</p>
                  <p className="text-sm text-slate-500">HR Manager</p>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Profile Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Preferences</a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Help Center</a>
                  <hr className="my-2" />
                  <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Sign Out</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
  );
};

export default Navbar;



    // <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/60 sticky top-0 z-40 shadow-sm">
    //   <div className="flex items-center justify-between px-4 lg:px-6 h-16">
    //     {/* Left: Logo and Mobile Menu */}
    //     <div className="flex items-center space-x-4">
    //       <button
    //         onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    //         className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
    //       >
    //         <Menu className="w-5 h-5" />
    //       </button>
    //       <div className="flex items-center space-x-3">
    //         <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
    //           <User className="w-5 h-5 text-white" />
    //         </div>
    //         <div className="hidden sm:block">
    //           <h1 className="text-xl font-bold bg-gradient-to-r from-slate-700 to-slate-900 bg-clip-text text-transparent">
    //             HRMSPro
    //           </h1>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Center: Search Bar */}
    //     <div className="flex-1 max-w-2xl mx-4 lg:mx-8">
    //       <div className="relative">
    //         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    //           <Search className="h-4 w-4 text-slate-400" />
    //         </div>
    //         <input
    //           type="text"
    //           placeholder="Search employees, departments, or documents..."
    //           className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-xl bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm placeholder:text-slate-500"
    //         />
    //       </div>
    //     </div>

    //     {/* Right: Notifications, Settings, Profile */}
    //     <div className="flex items-center space-x-2">
    //       <button className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
    //         <Bell className="w-5 h-5" />
    //         <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
    //           <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
    //         </span>
    //       </button>

    //       <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
    //         <Settings className="w-5 h-5" />
    //       </button>

    //       {/* Profile Dropdown */}
    //       <div className="relative">
    //         <button
    //           onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
    //           className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-100 transition-colors"
    //         >
    //           <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
    //             <User className="w-4 h-4 text-white" />
    //           </div>
    //           <div className="hidden md:block text-left">
    //             <p className="text-sm font-medium text-slate-900">Sarah Wilson</p>
    //             <p className="text-xs text-slate-500">HR Manager</p>
    //           </div>
    //           <ChevronDown className="w-4 h-4 text-slate-500" />
    //         </button>

    //         {isProfileDropdownOpen && (
    //           <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-200 py-2 z-50">
    //             <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Profile Settings</a>
    //             <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Preferences</a>
    //             <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Help Center</a>
    //             <hr className="my-2" />
    //             <a href="#" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg mx-2">Sign Out</a>
    //           </div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </header>
