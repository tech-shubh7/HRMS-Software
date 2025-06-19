import React from 'react'
import { ResponsiveContainer,BarChart,CartesianGrid,XAxis,YAxis,Bar,Tooltip,AreaChart,Area} from 'recharts'


function PerformanceData({performanceData}) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Performance Distribution</h3>
                    <p className="text-sm text-slate-600">Quarterly performance ratings</p>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                      <defs>
                        <linearGradient id="excellentGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="goodGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="averageGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                      <XAxis dataKey="quarter" stroke="#64748B" fontSize={12} />
                      <YAxis stroke="#64748B" fontSize={12} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                          backdropFilter: 'blur(10px)',
                          border: '1px solid #E2E8F0',
                          borderRadius: '12px'
                        }}
                      />
                      <Area type="monotone" dataKey="excellent" stackId="1" stroke="#10B981" fill="url(#excellentGradient)" />
                      <Area type="monotone" dataKey="good" stackId="1" stroke="#3B82F6" fill="url(#goodGradient)" />
                      <Area type="monotone" dataKey="average" stackId="1" stroke="#F59E0B" fill="url(#averageGradient)" />
                      <Area type="monotone" dataKey="needsImprovement" stackId="1" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">Excellent</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">Good</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">Average</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-slate-600">Needs Improvement</span>
                  </div>
                </div>
              </div>
  )
}

export default PerformanceData
