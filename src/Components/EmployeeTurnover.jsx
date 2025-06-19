import React,{useState} from 'react'
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


function EmployeeTurnover({turnoverData}) {
    const [selectedTimeRange, setSelectedTimeRange] = useState('30days');
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">Employee Turnover</h3>
                        <p className="text-sm text-slate-600">Resignations vs New Hires</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <select 
                          value={selectedTimeRange}
                          onChange={(e) => setSelectedTimeRange(e.target.value)}
                          className="text-sm border border-slate-200 rounded-lg px-3 py-1 bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="30days">Last 30 days</option>
                          <option value="90days">Last 90 days</option>
                          <option value="6months">Last 6 months</option>
                          <option value="1year">Last year</option>
                        </select>
                      </div>
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={turnoverData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                          <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
                          <YAxis stroke="#64748B" fontSize={12} />
                          <Tooltip 
                            contentStyle={{ 
                              backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                              backdropFilter: 'blur(10px)',
                              border: '1px solid #E2E8F0',
                              borderRadius: '12px',
                              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                            }}
                          />
                          <Bar dataKey="newHires" fill="#10B981" name="New Hires" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="resignations" fill="#F59E0B" name="Resignations" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="terminations" fill="#EF4444" name="Terminations" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex items-center justify-center space-x-6 mt-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">New Hires</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">Resignations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span className="text-sm text-slate-600">Terminations</span>
                      </div>
                    </div>
                  </div>
  )
}

export default EmployeeTurnover
