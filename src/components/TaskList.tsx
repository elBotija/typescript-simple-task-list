import React from 'react'
import { Task } from '../interfaces/task'
import TaskCard from './TaskCard'

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void
}
export default function TaskList({ tasks, deleteATask }: Props) {
  return (
    <>
      {tasks.map((task, i) => (
        <div className="col-md-4 pb-2">
          <TaskCard key={i} task={task} deleteATask={deleteATask}/>
        </div>
      ))}
    </>
  )
}
