import React from 'react'
import { ArrowUpRight,Target,TrendingUp,BookOpen,Minus,Users,ArrowDownRight } from 'lucide-react'
function SummaryCards() {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-2xl font-bold mb-1">94.2%</h3>
                <p className="text-white/80 text-sm">Employee Satisfaction</p>
                <div className="flex items-center space-x-1 mt-2">
                  <ArrowUpRight className="w-3 h-3" />
                  <span className="text-xs">+2.4% from last month</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-2xl font-bold mb-1">87.5%</h3>
                <p className="text-white/80 text-sm">Goal Completion</p>
                <div className="flex items-center space-x-1 mt-2">
                  <ArrowUpRight className="w-3 h-3" />
                  <span className="text-xs">+5.1% from last quarter</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <Minus className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-2xl font-bold mb-1">76.8%</h3>
                <p className="text-white/80 text-sm">Training Completion</p>
                <div className="flex items-center space-x-1 mt-2">
                  <Minus className="w-3 h-3" />
                  <span className="text-xs">-1.2% from last month</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <ArrowDownRight className="w-5 h-5 text-white/70" />
                </div>
                <h3 className="text-2xl font-bold mb-1">8.3%</h3>
                <p className="text-white/80 text-sm">Turnover Rate</p>
                <div className="flex items-center space-x-1 mt-2">
                  <ArrowDownRight className="w-3 h-3" />
                  <span className="text-xs">-0.8% from last month</span>
                </div>
              </div>
            </div>
  )
}

export default SummaryCards
