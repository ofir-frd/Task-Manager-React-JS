import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Buy Milk',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Walk the dog',
            day: 'Feb 6th at 6:20pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Meeting',
            day: 'Feb 7th at 13:00pm',
            reminder: true,
        }
    ])

    // Delete Task
    const deleteTask = (id) => {
       setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;
