import React from 'react'
import { ChevronRight } from 'lucide-react';

function TodayActivity({recentActivities}) {
  return (
     <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-slate-900">Today's Activity</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium hover:underline">
                  View All Activity
                </button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => {
                  const IconComponent = activity.icon;
                  return (
                    <div key={index} className={`flex items-center space-x-4 p-4 rounded-xl ${activity.bgColor} transition-colors hover:bg-opacity-80`}>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activity.bgColor} border border-white/50`}>
                        <IconComponent className={`w-8 h-8 ${activity.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-md font-medium text-slate-900">{activity.title}</p>
                        <p className="text-s text-slate-500 mt-1">{activity.time}</p>
                      </div>
                      <ChevronRight className="w-7 h-7 text-slate-400" />
                    </div>
                  );
                })}
              </div>
            </div>
  )
}

export default TodayActivity
