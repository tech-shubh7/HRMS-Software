import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, Edit2, Trash2, Eye, Users, UserCheck, UserX, Calendar, Mail, Phone, MapPin, Building, ChevronDown, X, Download, Upload } from 'lucide-react';

const EmployeeManage = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  // Sample employee data with more realistic information
  const sampleEmployees = [
    {
      id: 'EMP001',
      name: 'Alexandra Chen',
      email: 'alexandra.chen@company.com',
      phone: '+1-555-0123',
      department: 'Engineering',
      position: 'Senior Software Engineer',
      status: 'Active',
      joinDate: '2023-01-15',
      salary: '$95,000',
      address: '123 Tech Street, Silicon Valley, CA 94025',
      emergencyContact: 'David Chen - +1-555-0124',
      avatar: 'AC',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      id: 'EMP002',
      name: 'Marcus Rodriguez',
      email: 'marcus.rodriguez@company.com',
      phone: '+1-555-0125',
      department: 'Marketing',
      position: 'Marketing Director',
      status: 'Active',
      joinDate: '2022-08-10',
      salary: '$88,000',
      address: '456 Creative Ave, Austin, TX 78701',
      emergencyContact: 'Sofia Rodriguez - +1-555-0126',
      avatar: 'MR',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      id: 'EMP003',
      name: 'Sarah Kim',
      email: 'sarah.kim@company.com',
      phone: '+1-555-0127',
      department: 'Design',
      position: 'UX/UI Designer',
      status: 'Active',
      joinDate: '2023-03-20',
      salary: '$72,000',
      address: '789 Design Blvd, Portland, OR 97201',
      emergencyContact: 'James Kim - +1-555-0128',
      avatar: 'SK',
      color: 'bg-gradient-to-br from-emerald-500 to-teal-500'
    },
    {
      id: 'EMP004',
      name: 'David Thompson',
      email: 'david.thompson@company.com',
      phone: '+1-555-0129',
      department: 'HR',
      position: 'HR Business Partner',
      status: 'Active',
      joinDate: '2021-11-05',
      salary: '$75,000',
      address: '321 People St, Denver, CO 80201',
      emergencyContact: 'Emma Thompson - +1-555-0130',
      avatar: 'DT',
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      id: 'EMP005',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },{
      id: 'EMP006',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },{
      id: 'EMP007',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },{
      id: 'EMP077',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },{
      id: 'EMP008',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },{
      id: 'EMP009',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },{
      id: 'EMP010',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },{
      id: 'EMP011',
      name: 'Lisa Wang',
      email: 'lisa.wang@company.com',
      phone: '+1-555-0131',
      department: 'Finance',
      position: 'Senior Financial Analyst',
      status: 'Active',
      joinDate: '2022-12-01',
      salary: '$82,000',
      address: '654 Finance Dr, New York, NY 10001',
      emergencyContact: 'Michael Wang - +1-555-0132',
      avatar: 'LW',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
    },
    {
      id: 'EMP012',
      name: 'James Wilson',
      email: 'james.wilson@company.com',
      phone: '+1-555-0133',
      department: 'Sales',
      position: 'Account Executive',
      status: 'Inactive',
      joinDate: '2023-05-15',
      salary: '$65,000',
      address: '987 Sales Ave, Chicago, IL 60601',
      emergencyContact: 'Mary Wilson - +1-555-0134',
      avatar: 'JW',
      color: 'bg-gradient-to-br from-pink-500 to-rose-500'
    }
  ];

  const [newEmployee, setNewEmployee] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    status: 'Active',
    joinDate: '',
    salary: '',
    address: '',
    emergencyContact: ''
  });

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setEmployees(sampleEmployees);
      setFilteredEmployees(sampleEmployees);
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    let filtered = employees.filter(emp => 
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.position.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filterDepartment) {
      filtered = filtered.filter(emp => emp.department === filterDepartment);
    }

    if (filterStatus) {
      filtered = filtered.filter(emp => emp.status === filterStatus);
    }

    setFilteredEmployees(filtered);
    setCurrentPage(1);
  }, [searchTerm, filterDepartment, filterStatus, employees]);

  const departments = [...new Set(employees.map(emp => emp.department))];
  const statuses = [...new Set(employees.map(emp => emp.status))];

  const generateEmployeeColor = () => {
    const colors = [
      'bg-gradient-to-br from-purple-500 to-pink-500',
      'bg-gradient-to-br from-blue-500 to-cyan-500',
      'bg-gradient-to-br from-emerald-500 to-teal-500',
      'bg-gradient-to-br from-orange-500 to-red-500',
      'bg-gradient-to-br from-indigo-500 to-purple-500',
      'bg-gradient-to-br from-pink-500 to-rose-500'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleAddEmployee = () => {
    const id = `EMP${String(employees.length + 1).padStart(3, '0')}`;
    const avatar = newEmployee.name.split(' ').map(n => n[0]).join('').toUpperCase();
    const color = generateEmployeeColor();
    const employee = { ...newEmployee, id, avatar, color };
    
    setEmployees([...employees, employee]);
    setNewEmployee({
      name: '',
      email: '',
      phone: '',
      department: '',
      position: '',
      status: 'Active',
      joinDate: '',
      salary: '',
      address: '',
      emergencyContact: ''
    });
    setShowAddModal(false);
  };

  const handleEditEmployee = () => {
    const updatedEmployees = employees.map(emp => 
      emp.id === selectedEmployee.id ? selectedEmployee : emp
    );
    setEmployees(updatedEmployees);
    setShowEditModal(false);
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      setEmployees(employees.filter(emp => emp.id !== id));
    }
  };

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const activeEmployees = employees.filter(emp => emp.status === 'Active').length;
  const inactiveEmployees = employees.filter(emp => emp.status === 'Inactive').length;

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDelay: '0.15s'}}></div>
      </div>
    </div>
  );

  const EmployeeModal = ({ employee, isEdit, onSave, onClose }) => (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform animate-pulse">
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

  const ViewEmployeeModal = ({ employee, onClose }) => (
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

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-full p-4 sm:p-6 lg:p-8">
        {/* Header */}
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

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search employees by name, email, ID, or position..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-slate-50/50 hover:bg-white text-lg"
                />
              </div>
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center justify-center space-x-2 px-6 py-4 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all duration-200 font-medium lg:w-auto"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {showFilters && (
            <div className="mt-6 p-6 bg-slate-50/50 rounded-xl border border-slate-200/50 animate-in slide-in-from-top-2 duration-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Department</label>
                  <select
                    value={filterDepartment}
                    onChange={(e) => setFilterDepartment(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 bg-white"
                  >
                    <option value="">All Statuses</option>
                    {statuses.map(status => (
                      <option key={status} value={status}>{status}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => {
                    setFilterDepartment('');
                    setFilterStatus('');
                    setSearchTerm('');
                  }}
                  className="px-4 py-2 text-slate-600 hover:text-slate-800 font-medium transition-colors duration-200"
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Employee Grid */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 mb-8">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-slate-800">
                  Employees ({filteredEmployees.length})
                </h2>
              </div>
              
              {currentEmployees.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-600 mb-2">No employees found</h3>
                  <p className="text-slate-500">Try adjusting your search terms or filters</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentEmployees.map((employee) => (
                    <div key={employee.id} className="group bg-white border border-slate-200/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                      <div className="flex flex-col items-center text-center">
                        <div className={`w-16 h-16 ${employee.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          {employee.avatar}
                        </div>
                        
                        <h3 className="font-semibold text-slate-800 text-lg mb-1 group-hover:text-blue-600 transition-colors duration-200">
                          {employee.name}
                        </h3>
                        <p className="text-slate-600 text-sm mb-2">{employee.position}</p>
                        <p className="text-slate-500 text-xs mb-3">{employee.department}</p>
                        
                        <div className="flex items-center space-x-2 mb-4">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            employee.status === 'Active' 
                              ? 'bg-emerald-100 text-emerald-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {employee.status}
                          </span>
                        </div>
                        
                        <div className="flex space-x-2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() => {
                              setSelectedEmployee(employee);
                              setShowViewModal(true);
                            }}
                            className="flex-1 p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4 mx-auto" />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedEmployee(employee);
                              setShowEditModal(true);
                            }}
                            className="flex-1 p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors duration-200"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4 mx-auto" />
                          </button>
                          <button
                            onClick={() => handleDeleteEmployee(employee.id)}
                            className="flex-1 p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4 mx-auto" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6">
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Previous
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === index + 1
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      {showAddModal && (
        <EmployeeModal
          employee={null}
          isEdit={false}
          onSave={handleAddEmployee}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && selectedEmployee && (
        <EmployeeModal
          employee={selectedEmployee}
          isEdit={true}
          onSave={handleEditEmployee}
          onClose={() => {
            setShowEditModal(false);
            setSelectedEmployee(null);
          }}
        />
      )}

      {showViewModal && selectedEmployee && (
        <ViewEmployeeModal
          employee={selectedEmployee}
          onClose={() => {
            setShowViewModal(false);
            setSelectedEmployee(null);
          }}
        />
      )}
    </div>
  );
};

export default EmployeeManage;