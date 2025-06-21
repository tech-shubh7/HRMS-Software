import React from 'react'
import { X } from 'lucide-react';

  const EmployeeModal = ({ employee, isEdit, onSave, onClose,selectedEmployee,setSelectedEmployee}) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform ">
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-slate-100 p-6 z-10">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-slate-800">
                {isEdit ? 'Edit Employee' : 'Add New Employee'}
              </h3>
              <p className="text-slate-500 text-sm mt-1">
                {isEdit ? 'Update employee information' : 'Fill in the details to add a new employee'}
              </p>
            </div>
            <button 
              onClick={onClose} 
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors duration-200"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Full Name *</label>
              <input
                type="text"
                value={isEdit ? selectedEmployee?.name || '' : newEmployee.name}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, name: e.target.value})
                  : setNewEmployee({...newEmployee, name: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                placeholder="Enter full name"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Email Address *</label>
              <input
                type="email"
                value={isEdit ? selectedEmployee?.email || '' : newEmployee.email}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, email: e.target.value})
                  : setNewEmployee({...newEmployee, email: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                placeholder="Enter email address"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Phone Number</label>
              <input
                type="tel"
                value={isEdit ? selectedEmployee?.phone || '' : newEmployee.phone}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, phone: e.target.value})
                  : setNewEmployee({...newEmployee, phone: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                placeholder="Enter phone number"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Department *</label>
              <select
                value={isEdit ? selectedEmployee?.department || '' : newEmployee.department}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, department: e.target.value})
                  : setNewEmployee({...newEmployee, department: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
              >
                <option value="">Select Department</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Design">Design</option>
                <option value="Sales">Sales</option>
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Position *</label>
              <input
                type="text"
                value={isEdit ? selectedEmployee?.position || '' : newEmployee.position}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, position: e.target.value})
                  : setNewEmployee({...newEmployee, position: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                placeholder="Enter job position"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Status</label>
              <select
                value={isEdit ? selectedEmployee?.status || '' : newEmployee.status}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, status: e.target.value})
                  : setNewEmployee({...newEmployee, status: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Join Date</label>
              <input
                type="date"
                value={isEdit ? selectedEmployee?.joinDate || '' : newEmployee.joinDate}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, joinDate: e.target.value})
                  : setNewEmployee({...newEmployee, joinDate: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700">Salary</label>
              <input
                type="text"
                value={isEdit ? selectedEmployee?.salary || '' : newEmployee.salary}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, salary: e.target.value})
                  : setNewEmployee({...newEmployee, salary: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                placeholder="e.g., $50,000"
              />
            </div>
            
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-slate-700">Address</label>
              <textarea
                value={isEdit ? selectedEmployee?.address || '' : newEmployee.address}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, address: e.target.value})
                  : setNewEmployee({...newEmployee, address: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white resize-none"
                rows="3"
                placeholder="Enter full address"
              />
            </div>
            
            <div className="md:col-span-2 space-y-2">
              <label className="block text-sm font-medium text-slate-700">Emergency Contact</label>
              <input
                type="text"
                value={isEdit ? selectedEmployee?.emergencyContact || '' : newEmployee.emergencyContact}
                onChange={(e) => isEdit 
                  ? setSelectedEmployee({...selectedEmployee, emergencyContact: e.target.value})
                  : setNewEmployee({...newEmployee, emergencyContact: e.target.value})
                }
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white"
                placeholder="Name - Phone Number"
              />
            </div>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-slate-50/80 backdrop-blur-sm border-t border-slate-100 p-6 rounded-b-2xl">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-3 text-slate-600 font-medium border border-slate-200 rounded-xl hover:bg-slate-50 transition-all duration-200"
            >
              Cancel
            </button>
            <button
              onClick={onSave}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isEdit ? 'Update Employee' : 'Add Employee'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  export default EmployeeModal