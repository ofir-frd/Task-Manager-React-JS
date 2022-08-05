import {useState} from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
    const [showAddTask, setShowAddTask] = useState(false)

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

    // Add Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1

        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    // Delete Task
    const deleteTask = (id) => {
       setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
                    task.id === id ? {...task, reminder:
                            !task.reminder} : task
            )
        )
    }

  return (
    <div className="container">
      <Header
          onAdd={() =>setShowAddTask(!showAddTask)}
          showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask}/>}
        {tasks.length > 0 ? (
            <Tasks
                tasks={tasks}
                   onDelete={deleteTask}
                   onToggle={toggleReminder}/>) : (
                       'No tasks to show')
        }
    </div>
  )
}

export default App;
