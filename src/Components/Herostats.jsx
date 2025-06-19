import React from 'react'
import {TrendingUp,} from 'lucide-react'

function Herostats({metrics}) {
  return (
        <div className="grid grid-cols-1 px-4 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4  gap-6 mb-8">
            {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
            <div
                key={index}
                className="relative group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
                >
                {/* Floating Border Layer */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-borderPulse rounded-2xl blur-[2px] opacity-70 group-hover:opacity-90 transition-all duration-500"></div>

                {/* Inner Card Content */}
                <div className="relative z-10 rounded-2xl bg-white/80 backdrop-blur-md border border-white/30 p-6 sm:p-8 shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:brightness-105 flex flex-col justify-between h-full">
                    
                    {/* Top Row */}
                    <div className="flex items-center justify-between mb-5">
                    {/* Icon Box */}
                    <div
                        className={`w-12 h-12 min-w-[3rem] min-h-[3rem] rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center shadow-md`}
                    >
                        <IconComponent className="w-6 h-6 text-white" />
                    </div>

                    {/* Metric Badge */}
                    <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${metric.bgColor} ${
                        metric.changeType === 'increase'
                            ? 'text-emerald-700'
                            : metric.changeType === 'warning'
                            ? 'text-amber-700'
                            : 'text-slate-700'
                        } flex items-center gap-1`}
                    >
                        {metric.changeType === 'increase' && (
                        <TrendingUp className="w-4 h-4" />
                        )}
                        {metric.change}
                    </div>
                    </div>

                    {/* Bottom Content */}
                    <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">{metric.value}</h3>
                    <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium">
                        {metric.title}
                    </p>
                    </div>
                </div>
                </div>

            );
            })}
        </div>
               
  )
}

export default Herostats
