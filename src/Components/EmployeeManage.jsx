import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, Edit2, Trash2, Eye, Users, UserCheck, UserX, Calendar, Mail, Phone, MapPin, Building, ChevronDown, X, Download, Upload } from 'lucide-react';
import EmployeeModal from './EmployeeModal';
import ViewEmployeeModal from './ViewEmployeeModal';
import EmployeeHeader from './EmployeeHeader';
import EmployeesSearchFilter from './EmployeesSearchFilter';

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
    name: 'Aarav Mehta',
    email: 'aarav.mehta@company.in',
    phone: '+91-9876543210',
    department: 'Engineering',
    position: 'Senior Software Engineer',
    status: 'Active',
    joinDate: '2023-01-15',
    salary: '₹15,00,000',
    address: '12 MG Road, Bengaluru, Karnataka 560001',
    emergencyContact: 'Kiran Mehta - +91-9876543211',
    avatar: 'AM',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500'
  },
  {
    id: 'EMP002',
    name: 'Isha Reddy',
    email: 'isha.reddy@company.in',
    phone: '+91-9123456789',
    department: 'Marketing',
    position: 'Marketing Director',
    status: 'Active',
    joinDate: '2022-08-10',
    salary: '₹13,50,000',
    address: '45 Jubilee Hills, Hyderabad, Telangana 500033',
    emergencyContact: 'Rahul Reddy - +91-9123456790',
    avatar: 'IR',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
  },
  {
    id: 'EMP003',
    name: 'Neha Sharma',
    email: 'neha.sharma@company.in',
    phone: '+91-9988776655',
    department: 'Design',
    position: 'UX/UI Designer',
    status: 'Active',
    joinDate: '2023-03-20',
    salary: '₹11,00,000',
    address: '78 Sector 18, Noida, Uttar Pradesh 201301',
    emergencyContact: 'Ravi Sharma - +91-9988776656',
    avatar: 'NS',
    color: 'bg-gradient-to-br from-emerald-500 to-teal-500'
  },
  {
    id: 'EMP004',
    name: 'Rohit Kapoor',
    email: 'rohit.kapoor@company.in',
    phone: '+91-9810012345',
    department: 'HR',
    position: 'HR Business Partner',
    status: 'Active',
    joinDate: '2021-11-05',
    salary: '₹10,00,000',
    address: '23 Lodhi Road, New Delhi, Delhi 110003',
    emergencyContact: 'Priya Kapoor - +91-9810012346',
    avatar: 'RK',
    color: 'bg-gradient-to-br from-orange-500 to-red-500'
  },
  {
    id: 'EMP005',
    name: 'Meera Nair',
    email: 'meera.nair@company.in',
    phone: '+91-9845011223',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '90 Marine Drive, Mumbai, Maharashtra 400020',
    emergencyContact: 'Anil Nair - +91-9845011224',
    avatar: 'MN',
    color: 'bg-gradient-to-br from-indigo-500 to-purple-500'
  },
  {
    id: 'EMP006',
    name: 'Tanvi Patel',
    email: 'tanvi.patel@company.in',
    phone: '+91-9001234567',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '201 SG Highway, Ahmedabad, Gujarat 380015',
    emergencyContact: 'Nilesh Patel - +91-9001234568',
    avatar: 'TP',
    color: 'bg-gradient-to-br from-green-500 to-lime-500'
  },
  {
    id: 'EMP007',
    name: 'Divya Joshi',
    email: 'divya.joshi@company.in',
    phone: '+91-9012345678',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '14 Race Course Road, Indore, Madhya Pradesh 452001',
    emergencyContact: 'Kunal Joshi - +91-9012345679',
    avatar: 'DJ',
    color: 'bg-gradient-to-br from-yellow-500 to-amber-500'
  },
  {
    id: 'EMP077',
    name: 'Sanya Iyer',
    email: 'sanya.iyer@company.in',
    phone: '+91-9922334455',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '56 Brigade Road, Bengaluru, Karnataka 560025',
    emergencyContact: 'Ravi Iyer - +91-9922334456',
    avatar: 'SI',
    color: 'bg-gradient-to-br from-fuchsia-500 to-pink-600'
  },
  {
    id: 'EMP008',
    name: 'Anjali Deshmukh',
    email: 'anjali.deshmukh@company.in',
    phone: '+91-9700111222',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '78 FC Road, Pune, Maharashtra 411004',
    emergencyContact: 'Nitin Deshmukh - +91-9700111223',
    avatar: 'AD',
    color: 'bg-gradient-to-br from-teal-500 to-green-400'
  },
  {
    id: 'EMP009',
    name: 'Simran Kaur',
    email: 'simran.kaur@company.in',
    phone: '+91-9856123478',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '99 Sector 17, Chandigarh 160017',
    emergencyContact: 'Harpreet Kaur - +91-9856123479',
    avatar: 'SK',
    color: 'bg-gradient-to-br from-rose-500 to-amber-400'
  },
  {
    id: 'EMP010',
    name: 'Karan Malhotra',
    email: 'karan.malhotra@company.in',
    phone: '+91-9678112233',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '5 Elgin Road, Kolkata, West Bengal 700020',
    emergencyContact: 'Sahil Malhotra - +91-9678112234',
    avatar: 'KM',
    color: 'bg-gradient-to-br from-sky-500 to-indigo-400'
  },
  {
    id: 'EMP011',
    name: 'Ritika Jain',
    email: 'ritika.jain@company.in',
    phone: '+91-9865111122',
    department: 'Finance',
    position: 'Senior Financial Analyst',
    status: 'Active',
    joinDate: '2022-12-01',
    salary: '₹12,00,000',
    address: '31 Raja Park, Jaipur, Rajasthan 302004',
    emergencyContact: 'Amit Jain - +91-9865111123',
    avatar: 'RJ',
    color: 'bg-gradient-to-br from-red-500 to-pink-400'
  },
  {
    id: 'EMP012',
    name: 'Arjun Verma',
    email: 'arjun.verma@company.in',
    phone: '+91-9900112233',
    department: 'Sales',
    position: 'Account Executive',
    status: 'Inactive',
    joinDate: '2023-05-15',
    salary: '₹9,00,000',
    address: '33 Park Street, Kolkata, West Bengal 700016',
    emergencyContact: 'Seema Verma - +91-9900112234',
    avatar: 'AV',
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
  emp.id === selectedEmployee.id ? { ...selectedEmployee } : emp
);
    setEmployees(updatedEmployees);
    setShowEditModal(false);
    setSelectedEmployee(null);

    setSearchTerm('');
    setFilterDepartment('');
   setFilterStatus('');
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




  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <div className="max-w-full p-4 sm:p-6 lg:p-8">
        {/* Header */}
          <EmployeeHeader
          setShowAddModal={setShowAddModal}
          employees={employees}
          activeEmployees={activeEmployees}
          inactiveEmployees={inactiveEmployees}
          />
        {/* Search and Filters */}
         <EmployeesSearchFilter
         searchTerm={searchTerm}
         setSearchTerm={setSearchTerm}
         filterDepartment={filterDepartment}
         setFilterDepartment={setFilterDepartment}
         showFilters={showFilters}
         setShowFilters={setShowFilters}
         departments={departments}
         filterStatus={filterStatus}
         statuses={statuses}
         setFilterStatus={setFilterStatus}
         />

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
        <EmployeeModal  employee={null}
          isEdit={false}
          onSave={handleAddEmployee}
          onClose={() => setShowAddModal(false)}
           selectedEmployee={selectedEmployee}
    setSelectedEmployee={setSelectedEmployee}
    newEmployee={newEmployee}
    setNewEmployee={setNewEmployee}
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
           selectedEmployee={selectedEmployee}
    setSelectedEmployee={setSelectedEmployee}
    newEmployee={newEmployee}
    setNewEmployee={setNewEmployee}
        />
      )}

      {showViewModal && selectedEmployee && (
        <ViewEmployeeModal
          employee={selectedEmployee}
          onClose={() => {
           setShowViewModal(false);
            setSelectedEmployee(null);
          }}
          setSelectedEmployee={setSelectedEmployee}
          setShowEditModal={setShowEditModal}
        />
      )}
    </div>
  );
};

export default EmployeeManage;