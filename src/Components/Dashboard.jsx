import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Settings, 
  User, 
  Menu, 
  X, 
  Users, 
  Calendar, 
  Clock, 
  TrendingUp, 
  FileText, 
  Award,
  ChevronDown,
  Home,
  UserCheck,
  DollarSign,
  BarChart3,
  Target,
  BookOpen,
  MessageCircle,
  Shield,
  ChevronRight,
  Plus,
  Filter,
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Maximize2,
  MoreHorizontal
} from 'lucide-react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Navbar from './layout/Navbar';
import Herostats from './Herostats';
import AttendenceCard from './AttendenceCard';
import EmployeeTurnover from './EmployeeTurnover';
import { useNavigation,useLocation, useNavigate } from 'react-router-dom';
import MainContent from './MainContent';
import GenderPie from './GenderPie';
import DeptData from './DeptData';
import PerformanceData from './PerformanceData';
import Skills from './Skills';
import SummaryCards from './SummaryCards';
import TodayActivity from './TodayActivity';
import QuickActions from './QuickActions';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

        const navigate=useNavigate();
        const location=useLocation();
        const isActive = (path) => location.pathname.startsWith(path);

  // Chart data for analytics
const attendanceData = [
  { date: '2025-06-01', present: 91, absent: 9 },
  { date: '2025-06-02', present: 89, absent: 11 },
  { date: '2025-06-03', present: 94, absent: 6 },
  { date: '2025-06-04', present: 90, absent: 10 },
  { date: '2025-06-05', present: 87, absent: 13 },
  { date: '2025-06-06', present: 92, absent: 8 },
  { date: '2025-06-07', present: 95, absent: 5 },
  { date: '2025-06-08', present: 93, absent: 7 },
  { date: '2025-06-09', present: 90, absent: 10 },
  { date: '2025-06-10', present: 88, absent: 12 }
];

  const turnoverData = [
    { month: 'Jan', resignations: 5, terminations: 2, newHires: 12 },
    { month: 'Feb', resignations: 8, terminations: 1, newHires: 15 },
    { month: 'Mar', resignations: 3, terminations: 3, newHires: 8 },
    { month: 'Apr', resignations: 6, terminations: 2, newHires: 18 },
    { month: 'May', resignations: 9, terminations: 1, newHires: 14 },
    { month: 'Jun', resignations: 4, terminations: 2, newHires: 11 }
  ];

  const diversityData = [
    { name: 'Male', value: 142, color: '#3B82F6' },
    { name: 'Female', value: 105, color: '#EC4899' },
   
  ];

  const departmentData = [
    { department: 'Engineering', employees: 25, budget: 2400000 },
    { department: 'Sales', employees: 22, budget: 1200000 },
    { department: 'Marketing', employees: 8, budget: 800000 },
    { department: 'HR', employees: 15, budget: 450000 },
    { department: 'Finance', employees: 12, budget: 650000 },
    { department: 'Operations', employees: 25, budget: 900000 }
  ];

  const performanceData = [
    { quarter: 'Q1', excellent: 25, good: 45, average: 20, needsImprovement: 10 },
    { quarter: 'Q2', excellent: 30, good: 42, average: 18, needsImprovement: 10 },
    { quarter: 'Q3', excellent: 35, good: 40, average: 15, needsImprovement: 10 },
    { quarter: 'Q4', excellent: 32, good: 43, average: 17, needsImprovement: 8 }
  ];

  const skillsData = [
    { skill: 'Leadership', proficient: 65, developing: 30, beginner: 5 },
    { skill: 'Technical', proficient: 78, developing: 18, beginner: 4 },
    { skill: 'Communication', proficient: 72, developing: 25, beginner: 3 },
    { skill: 'Problem Solving', proficient: 68, developing: 28, beginner: 4 },
    { skill: 'Teamwork', proficient: 85, developing: 13, beginner: 2 }
  ];

  // Navigation items for sidebar
  const navItems = [
    { icon: Home, label: 'Dashboard', active: true, count: null, path:'/dashboard' },
    { icon: Users, label: 'Employees', active:false, count: 107 , path:'/employees' },
    { icon: UserCheck, label: 'Attendance', active: false, count: 15 },
    { icon: Calendar, label: 'Leave Management', active: false, count: 8 },
    { icon: DollarSign, label: 'Payroll', active: false, count: null },
    { icon: Target, label: 'Performance', active: false, count: 12 },
    { icon: BookOpen, label: 'Training', active: false, count: 5 },
    { icon: BarChart3, label: 'Analytics', active: false, count: null },
    { icon: MessageCircle, label: 'Communication', active: false, count: 3 },
    { icon: Shield, label: 'Compliance', active: false, count: null },
  ];

  // Hero metrics data
  const metrics = [
    {
      title: 'Total Employees',
      value: '247',
      change: '+12 this month',
      changeType: 'increase',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Present Today',
      value: '198',
      change: '80.2% attendance',
      changeType: 'neutral',
      icon: UserCheck,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      title: 'On Leave',
      value: '15',
      change: '3 pending approval',
      changeType: 'warning',
      icon: Calendar,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50'
    },
    {
      title: 'Avg Performance',
      value: '4.2',
      change: '+0.3 from last month',
      changeType: 'increase',
      icon: Award,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const quickActions = [
    { icon: Plus, label: 'Add Employee', color: 'bg-blue-600 hover:bg-blue-700 text-white' },
    { icon: Clock, label: 'Time Tracker', color: 'bg-emerald-600 hover:bg-emerald-700 text-white' },
    { icon: Calendar, label: 'Schedule Meeting', color: 'bg-purple-600 hover:bg-purple-700 text-white' },
    { icon: FileText, label: 'Generate Report', color: 'bg-amber-600 hover:bg-amber-700 text-white' }
  ];

  const recentActivities = [
    {
      icon: UserCheck,
      title: '15 employees clocked in on time',
      time: '9:00 AM',
      type: 'success',
      bgColor: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    },
    {
      icon: Calendar,
      title: '3 leave requests pending approval',
      time: 'Requires attention',
      type: 'warning',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600'
    },
    {
      icon: Award,
      title: 'Performance reviews due this week',
      time: '8 employees',
      type: 'info',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'New announcement posted',
      time: '2 hours ago',
      type: 'neutral',
      bgColor: 'bg-slate-50',
      iconColor: 'text-slate-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Top Header */}
      <Navbar
      isSidebarOpen={isSidebarOpen}
    setIsSidebarOpen={setIsSidebarOpen}
     isProfileDropdownOpen={isProfileDropdownOpen}
    setIsProfileDropdownOpen={setIsProfileDropdownOpen}
  />

      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className={`fixed  z-50 w-80 bg-white/90 border-r border-slate-200/60 shadow-xl transform transition-transform duration-300 ease-in-out  ${
          isSidebarOpen ? `translate-x-0 ` : `-translate-x-full `
        } xl:relative xl:translate-x-0 lg:z-0 `}>
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200/60">
            <h2 className="text-lg font-semibold text-slate-900">Navigation</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="lg:hidden p-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-4  space-y-2">
            {navItems.map((item, index) => {
              const IconComponent = item.icon;
              // const isItemActive=item.path?isActive(item.path):false;
              return (
                <button
                  key={index}
                  onClick={() => {setActiveIndex(index)
                     if (item.path) {
                        navigate(item.path);
                      } else {
                        // handle other click logic here if needed
                        console.log(`${item.label} clicked`);
                      }
                    }
                     }
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
               >
                  <div className="flex items-center space-x-3">
                    <IconComponent className={`w-5 h-5 ${activeIndex === index ? 'text-white' : 'text-slate-500 group-hover:text-slate-700'}`} />
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.count && (
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        activeIndex === index 
                          ? 'bg-white/20 text-gray-600' 
                          : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                      }`}>
                        {item.count}
                      </span>
                    )}
                    <ChevronRight className={`w-4 h-4 ${activeIndex === index ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Quick Stats in Sidebar */}
          <div className="p-4 mt-6 border-t border-slate-200/60">
            <h3 className="text-sm font-semibold text-slate-900 mb-3">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-900">Attendance</span>
                </div>
                <span className="text-sm font-bold text-emerald-600">80.2%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-900">Goals</span>
                </div>
                <span className="text-sm font-bold text-blue-600">67%</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 top-[72px] bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
      <main className={`flex-1 mt-[10px] ${isSidebarOpen ? `ml-80 `: ``} `}>
          <div className="p-4 px-5 lg:p-8">
            {/* Welcome Header */}
              <MainContent/>
            {/* Metrics Grid */}
              <Herostats
               metrics={metrics}/>
              {/* Analytics Charts Section */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              {/* Attendance Trends Chart */}  
                 <AttendenceCard 
                  attendanceData={attendanceData}/>
                {/* Employee Turnover Chart */}
                 <EmployeeTurnover turnoverData={turnoverData}/>
           </div>
              {/* Diversity & Department Analytics */}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
               {/* Gender Diversity Pie Chart */}
               <GenderPie diversityData={diversityData}/>
               {/* Department Breakdown */}
                <DeptData departmentData={departmentData}/>
         </div>
            {/* Performance & Skills Analytics */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                  {/* Performance Distribution */}
                    <PerformanceData performanceData={performanceData}/>
              {/* Skills Assessment */}
              <Skills skillsData={skillsData}/>
           </div>

            {/* Key Metrics Summary Cards */}
            <SummaryCards/>
              
              <TodayActivity recentActivities={recentActivities}
            /> 
            {/* Quick Actions */}
           <QuickActions quickActions={quickActions}/>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;