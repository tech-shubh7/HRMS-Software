import React from 'react'

function Skills({skillsData}) {
  return (
   <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">Skills Assessment</h3>
                    <p className="text-sm text-slate-600">Employee skill proficiency levels</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {skillsData.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-900">{skill.skill}</span>
                        <span className="text-xs text-slate-500">{skill.proficient + skill.developing + skill.beginner} employees</span>
                      </div>
                      <div className="flex h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="bg-emerald-500 transition-all duration-1000 ease-out"
                          style={{ width: `${(skill.proficient / (skill.proficient + skill.developing + skill.beginner)) * 100}%` }}
                        ></div>
                        <div 
                          className="bg-amber-500 transition-all duration-1000 ease-out"
                          style={{ width: `${(skill.developing / (skill.proficient + skill.developing + skill.beginner)) * 100}%` }}
                        ></div>
                        <div 
                          className="bg-red-500 transition-all duration-1000 ease-out"
                          style={{ width: `${(skill.beginner / (skill.proficient + skill.developing + skill.beginner)) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>Proficient: {skill.proficient}%</span>
                        <span>Developing: {skill.developing}%</span>
                        <span>Beginner: {skill.beginner}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
  )
}

export default Skills
