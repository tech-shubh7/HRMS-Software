import React from 'react'

function QuickActions({quickActions}) {
  return (
     <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm mb-5 ">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button
                      key={index}
                      className={`flex flex-col items-center space-y-3 p-6 rounded-xl transition-all duration-200 ${action.color} hover:shadow-lg hover:-translate-y-1`}
                    >
                      <IconComponent className="w-6 h-6" />
                      <span className="text-sm md:text-md lg:text-lg xl:text-xl font-medium">{action.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
  )
}

export default QuickActions
