import React from "react";
import { X,Phone,Mail,Building,Calendar,MapPin } from "lucide-react";
  const ViewEmployeeModal = ({ employee, onClose,setSelectedEmployee,setShowEditModal }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform">
        <div className="relative">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-t-2xl border-b border-slate-100">
            <button 
              onClick={onClose} 
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-all duration-200 shadow-sm"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
            
            <div className="flex items-center space-x-6">
              <div className={`w-20 h-20 ${employee?.color || 'bg-gradient-to-br from-blue-500 to-purple-500'} rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                {employee?.avatar}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{employee?.name}</h3>
                <p className="text-slate-600 font-medium">{employee?.position}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    employee?.status === 'Active' 
                      ? 'bg-emerald-100 text-emerald-700 border border-emerald-200' 
                      : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {employee?.status === 'Active' ? '🟢' : '🔴'} {employee?.status}
                  </span>
                  <span className="text-sm text-slate-500">ID: {employee?.id}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-500">Email Address</p>
                    <p className="text-slate-800 font-medium">{employee?.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-500">Phone Number</p>
                    <p className="text-slate-800 font-medium">{employee?.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <Building className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-500">Department</p>
                    <p className="text-slate-800 font-medium">{employee?.department}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <Calendar className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-500">Join Date</p>
                    <p className="text-slate-800 font-medium">{employee?.joinDate}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <p className="text-sm font-medium text-slate-500">Salary</p>
                  <p className="text-2xl font-bold text-slate-800">{employee?.salary}</p>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-slate-500">Address</p>
                      <p className="text-slate-800 font-medium leading-relaxed">{employee?.address}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                  <p className="text-sm font-medium text-slate-500">Emergency Contact</p>
                  <p className="text-slate-800 font-medium">{employee?.emergencyContact}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-slate-50/50 rounded-b-2xl border-t border-slate-100">
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  onClose();
                  setSelectedEmployee(employee);
                  setShowEditModal(true);
                }}
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Edit Employee
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  export default ViewEmployeeModal