import {useState} from 'react'

const Tasks = () => {
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

    return(
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks