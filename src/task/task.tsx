import './task.css'

type TaskProps = {
  title: string
  id: number
  isDone: boolean
  toggleTask: (id: number) => void
  deleteTask: (id: number) => void
}

export function Task({ title, isDone, toggleTask, deleteTask, id }: TaskProps) {
  return (
    <div className="task">
      <p className="taskTitle">{title}</p>
      <input type="checkbox" checked={isDone} onChange={() => toggleTask(id)} />
      <button onClick={() => deleteTask(id)}>X</button>
    </div>
  )
}
