import { useState } from 'react'

import { Task as TaskView } from '../task/task'
import './task-list.css'
import { NewTaskForm } from '../new-task-form/new-task-form'
import { Filter } from '../filter/filter'
import {FILTER_TYPE_ALL, FILTER_TYPE_DONE} from "../filter/filter-types.tsx";

type Task = {
  title: string
  id: number
  isDone: boolean
}

export function TaskList() {
  const [tasks, updateTasks] = useState<Array<Task>>([
    { id: 1, title: 'Prepare for workshop', isDone: true },
    { id: 2, title: 'Implement sorting', isDone: false },
    { id: 3, title: 'Learn JS', isDone: true },
    { id: 4, title: 'Learn React', isDone: false },
  ])
  const [filter, setFilter] = useState(FILTER_TYPE_ALL)
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  function toggleTask(id: number) {
    const t = tasks.map((task) => task.id === id ? { ...task, isDone: !task.isDone } : task);
    updateTasks(t)
    updateFilteredTasks(t, filter)
  }

  function deleteTask(id: number) {
    const t = tasks.filter((task) => task.id !== id);
    updateTasks(t)
    updateFilteredTasks(t, filter)
  }

  function setTasksFilter(type: string) {
    setFilter(type)
    updateFilteredTasks(tasks, type)
  }

  function updateFilteredTasks(tasks: Task[], type: string) {
    var t = tasks
    if (type !== FILTER_TYPE_ALL) {
      t = tasks.filter((task) => type === FILTER_TYPE_DONE ? task.isDone : !task.isDone)
    }

    setFilteredTasks(t)
  }

  function createNewTask(title: string) {
    const task: Task = {
      title,
      id: tasks[tasks.length - 1].id + 1,
      isDone: false,
    }

    const updatedTasks = [...tasks, task]
    updateTasks(updatedTasks)
    updateFilteredTasks(updatedTasks, filter)
  }

  return (
    <div className="taskList">
      <h1>Task list</h1>
      <NewTaskForm onCreateNewTask={createNewTask} />
      <Filter onChange={setTasksFilter} filterType={filter}/>
      <div>
        {filteredTasks.map(({ id, isDone, title }) => (
          <TaskView
            key={id}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            isDone={isDone}
            id={id}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}
