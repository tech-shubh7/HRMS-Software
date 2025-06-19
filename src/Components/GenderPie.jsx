import React from 'react'
import { ResponsiveContainer,PieChart,Pie,Tooltip,Cell } from 'recharts'

function GenderPie({diversityData}) {
  return (
   <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                   <div className="flex items-center justify-between mb-6">
                     <div>
                       <h3 className="text-lg font-semibold text-slate-900">Gender Diversity</h3>
                       <p className="text-sm text-slate-600">Workforce distribution</p>
                     </div>
                   </div>
                   <div className="h-64">
                     <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                         <Pie
                           data={diversityData}
                           cx="50%"
                           cy="50%"
                           innerRadius={40}
                           outerRadius={80}
                           // paddingAngle={5}
                           dataKey="value"
                         >
                           {diversityData.map((entry, index) => (
                             <Cell key={`cell-${index}`} fill={entry.color} />
                           ))}
                         </Pie>
                         <Tooltip 
                           contentStyle={{ 
                             backgroundColor: 'rgba(255, 255, 255, 0.95)', 
                             backdropFilter: 'blur(10px)',
                             border: '1px solid #E2E8F0',
                             borderRadius: '12px'
                           }}
                         />
                       </PieChart>
                     </ResponsiveContainer>
                   </div>
                   <div className="space-y-2">
                     {diversityData.map((item, index) => (
                       <div key={index} className="flex items-center justify-between">
                         <div className="flex items-center space-x-2">
                           <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                           <span className="text-sm text-slate-600">{item.name}</span>
                         </div>
                         <span className="text-sm font-medium text-slate-900">{item.value}</span>
                       </div>
                     ))}
                   </div>
                 </div>
  )
}

export default GenderPie
