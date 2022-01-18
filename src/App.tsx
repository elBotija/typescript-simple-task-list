import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Task } from './interfaces/task';
import TaskList from './components/TaskList';
import TaskForms from './components/TaskForms';

interface Props {
  title: string,
}

function App({ title }: Props) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "learn Typescript",
      description: "react",
      completed: false
    }
  ])

  const getCurrentTimeStamp = ():number => new Date().getTime();

  const addANewTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: getCurrentTimeStamp(), completed: false }])
  }

  const deleteATask = (id:number):void => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="bg-dark text-white" style={{ height: '100vh' }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="logo" style={{ width: '4rem' }} />
            {title}
          </a>
        </div>
      </nav>

      <main className="container p-4">
        <div className="row">
          <div className="col-md-4">
            <TaskForms addANewTask={addANewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
