import React from 'react'

export default function ActivityFeed() {
  const activities = [
    {
      id: 1,
      title: "Grocery Shopping",
      time: "2 hours ago",
      score: "92%",
      status: "completed"
    },
    {
      id: 2,
      title: "Software Contract",
      time: "5 hours ago",
      score: "--",
      status: "paused"
    },
    {
      id: 3,
      title: "Doctor Appointment",
      time: "Yesterday",
      score: "88%",
      status: "completed"
    },
    {
      id: 4,
      title: "Booking a Train",
      time: "2 days ago",
      score: "76%",
      status: "completed"
    }
  ]

  return (
    <div className="w-full h-full min-h-[300px] bg-zinc-900 border border-zinc-800 rounded-2xl p-6 bento-card flex flex-col">
      
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-sm font-medium text-zinc-400">Recent Transcripts</h4>
      </div>

      <div className="flex flex-col gap-4 flex-1 overflow-y-auto no-scrollbar">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between group cursor-pointer">
            <div>
              <h5 className="text-sm font-medium text-zinc-200 group-hover:text-cyan-400 transition-colors">
                {activity.title}
              </h5>
              <div className="flex items-center gap-2 mt-1">
                <span className={`w-1.5 h-1.5 rounded-full ${activity.status === 'completed' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                <span className="text-[10px] font-mono text-zinc-500">{activity.time}</span>
              </div>
            </div>
            
            <div className="text-right">
              <span className="text-xs font-mono font-bold text-zinc-300">{activity.score}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
