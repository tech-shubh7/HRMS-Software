import React from 'react'
import { ResponsiveContainer,BarChart,CartesianGrid,XAxis,YAxis,Bar,Tooltip } from 'recharts'

function DeptData({departmentData}) {
  return (
    
          <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-2xl p-6 px-7 border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Department Overview</h3>
                    <p className="text-sm text-slate-600">Employee count by department</p>
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={departmentData} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis type="number" stroke="#64748B" fontSize={12} />
                      <YAxis
                        dataKey="department"
                        type="category"
                        stroke="#64748B"
                        fontSize={12}
                        width={100}
      
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'rgba(255, 255, 255, 0.95)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid #E2E8F0',
                          borderRadius: '12px'
                        }}
                      />
                      <Bar dataKey="employees" fill="#6366F1" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
    
  )
}

export default DeptData
