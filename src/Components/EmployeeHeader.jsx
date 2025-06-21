import React from 'react'
import { Upload,Download,Plus,Users,UserCheck,UserX } from 'lucide-react'


function EmployeeHeader({setShowAddModal,employees,activeEmployees,inactiveEmployees}) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Employee Management
              </h1>
              <p className="text-slate-600 mt-2 text-lg">Manage your organization's talent with ease</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-200 font-medium">
                <Upload className="w-5 h-5" />
                <span>Import</span>
              </button>
              <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-200 font-medium">
                <Download className="w-5 h-5" />
                <span>Export</span>
              </button>
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
              >
                <Plus className="w-5 h-5" />
                <span>Add Employee</span>
              </button>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <div className="group p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-200/30 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-blue-600">Total Employees</p>
                  <p className="text-3xl font-bold text-blue-900">{employees.length}</p>
                </div>
              </div>
            </div>
            
            <div className="group p-6 bg-gradient-to-br from-emerald-500/10 to-// Continuing from where your code was cut off - after the emerald stats card

            teal-500/10 border border-emerald-200/30 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <UserCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-emerald-600">Active</p>
                  <p className="text-3xl font-bold text-emerald-900">{activeEmployees}</p>
                </div>
              </div>
            </div>
            
            <div className="group p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-200/30 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <UserX className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-red-600">Inactive</p>
                  <p className="text-3xl font-bold text-red-900">{inactiveEmployees}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default EmployeeHeader
