import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
const users = 
[
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'An exceptional strategic thinker, this team member consistently drives project milestones forward, ensuring our remote operations remain aligned and efficient.',
    tag: 'Satisfied',
    color: '#10B981' // Emerald Green
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Bringing innovative technical solutions to the table, they excel at troubleshooting complex issues independently while collaborating seamlessly across time zones.',
    tag: 'Underserved',
    color: '#F59E0B' // Amber
  },
  {
    img: 'https://images.unsplash.com/photo-1555421689-43cad7100750?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'A master of digital communication, they foster strong client relationships and keep internal teams perfectly synchronized regardless of physical location.',
    tag: 'underbanked',
    color: '#3B82F6' // Blue
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661721192338-c74704ab6ab2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    intro: 'Highly organized and fiercely dedicated, this professional consistently delivers high-quality results on schedule, proving the true power of remote adaptability.',
    tag: 'underbanked',
    color: '#6366F1' // Indigo
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'With a keen eye for design and user experience, they transform abstract concepts into intuitive interfaces, elevating the quality of our digital products.',
    tag: 'Satisfied',
    color: '#34D399' // Light Green
  },
  {
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'A highly analytical mind focused on data-driven growth, this individual consistently identifies market trends that position our campaigns for maximum impact.',
    tag: 'Underserved',
    color: '#F97316' // Orange
  },
  {
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'An empathetic leader and skilled mediator, they excel at resolving conflicts and ensuring that company culture thrives even in a fully distributed environment.',
    tag: 'Satisfied',
    color: '#059669' // Dark Green
  },
  {
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'Resourceful and highly adaptable, they possess an incredible ability to pivot strategies quickly, ensuring we stay ahead of rapid industry shifts.',
    tag: 'underbanked',
    color: '#8B5CF6' // Purple
  },
  {
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'A natural problem solver with a background in logistics, they streamline our internal workflows and remove bottlenecks before they can impact delivery.',
    tag: 'Underserved',
    color: '#EAB308' // Yellow
  },
  {
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0',
    intro: 'Bringing a wealth of financial acumen to the team, they manage budgets with precision and provide forecasting that keeps our ambitious projects fully funded.',
    tag: 'Satisfied',
    color: '#047857' // Deep Green
  }
]
function App() {
  return (
    <div>
      <Section1 users = {users}/>
      <Section2 />
    </div>
  )
}

export default App
