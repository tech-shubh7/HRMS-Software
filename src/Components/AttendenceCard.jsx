import React from 'react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { 
  Maximize2,
  MoreHorizontal
} from 'lucide-react';


function AttendenceCard({attendanceData}) {
  return (
 
     <div className="bg-white/70 backdrop-blur-sm rounded-2xl py-6 px-4 border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
        <div>
            <h3 className="text-lg font-semibold text-slate-900">Attendance Trends</h3>
            <p className="text-sm text-slate-600">Date-wise attendance patterns</p>
        </div>
        <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
            <Maximize2 className="w-4 h-4 text-slate-600" />
            </button>
            <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors">
            <MoreHorizontal className="w-4 h-4 text-slate-600" />
            </button>
        </div>
        </div>

        <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={attendanceData}>
            <defs>
                <linearGradient id="presentGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="absentGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
            <XAxis
                dataKey="date"
                stroke="#64748B"
                fontSize={10}
                tickFormatter={(date) => new Date(date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
            />
            <YAxis stroke="#64748B" fontSize={12} />
            <Tooltip
                labelFormatter={(date) => `Date: ${new Date(date).toDateString()}`}
                contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid #E2E8F0',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                }}
            />
            <Area
                type="monotone"
                dataKey="present"
                stroke="#10B981"
                strokeWidth={2}
                fill="url(#presentGradient)"
            />
            <Area
                type="monotone"
                dataKey="absent"
                stroke="#EF4444"
                strokeWidth={2}
                fill="url(#absentGradient)"
            />
            </AreaChart>
        </ResponsiveContainer>
        </div>

        <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-slate-700">Present</span>
        </div>
        <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-sm text-slate-700">Absent</span>
        </div>
        </div>
    </div>
  )
}

export default AttendenceCard
