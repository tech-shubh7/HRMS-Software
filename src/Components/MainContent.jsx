import React from 'react'
import { Filter,Download } from 'lucide-react'
function MainContent() {
  return (
    <>
           <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
                    Good morning, Shubh! 👋
                  </h1>
                  <p className="text-slate-600 text-lg">
                    Here's what's happening with your team today.
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex items-center space-x-3">
                  <button className="flex items-center space-x-2 px-4 py-2 bg-white/70 backdrop-blur-sm border border-slate-200 rounded-lg hover:bg-white transition-colors">
                    <Filter className="w-4 h-4 text-slate-600" />
                    <span className="text-sm font-medium text-slate-700">Filter</span>
                  </button>
                  <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <Download className="w-4 h-4" />
                    <span className="text-sm font-medium">Export</span>
                  </button>
                </div>
              </div>
              
              <div className="text-sm text-slate-500 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
            </div>
</>
  )
}

export default MainContent
