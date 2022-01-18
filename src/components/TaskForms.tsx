import React, { ChangeEvent, FormEvent, useRef, useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Task } from '../interfaces/task'

interface Props {
  addANewTask: (task: Task) => void
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
type HandleOnSubmit = FormEvent<HTMLFormElement>

const initialState = {
  title: '',
  description: ''
}

export default function TaskForms({addANewTask}: Props) {
  const [task, setTask] = useState(initialState)
  const inputTitle = useRef<HTMLInputElement> (null)

  const handleInput = ({ target }: HandleInputChange) => {
    setTask({ ...task, [target.name]: target.value })
  }

  const handleNewTask = (e: HandleOnSubmit):void => {
    e.preventDefault()
    addANewTask(task)
    setTask(initialState)
    inputTitle.current?.focus()
  }

  return (
    <div className="card card-body bg-secondary text-dark mb-2">
      <h1>Add Task</h1>
      <form onSubmit={handleNewTask}>
        <input onChange={handleInput} value={task.title} type="text" autoFocus ref={inputTitle} placeholder="Write a title" name="title" className="form-control mb-3 rounded-0 shadow-none border-0" />
        <textarea onChange={handleInput} value={task.description} name="description" rows={2} placeholder="write a description" className="form-control mb-3 shadow-none border-0"></textarea>
        <button className="btn btn-primary">Save <AiOutlinePlus /></button>
      </form>
    </div>
  )
}
