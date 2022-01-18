import React from 'react'
import { Task } from '../interfaces/task'

interface Props {
  task: Task,
  deleteATask: (id: number) => void
}

export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div className="card card-body bg-secondary rounded-0 text-dark">
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>{task.id}</p>
      <button className="btn btn-danger" onClick={()=>task.id && deleteATask(task.id)}>Delete</button>
    </div>
  )
}
