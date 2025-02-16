import './task.css'

type TaskProps = {
  title: string
  id: number
  isDone: boolean
  toggleTask: (id: number) => void
}

export function Task({ title, isDone, toggleTask, id }: TaskProps) {
  return (
    <div className="task">
      <p className="taskTitle">{title}</p>
      <input type="checkbox" checked={isDone} onChange={() => toggleTask(id)} />
    </div>
  )
}
