import React from "react"

type Props = {
    task: ITask,
  updateTodo: (todo: ITask) => void
  deleteTodo: (_id: string) => void
}

const DisplayTask: React.FC<Props> = ({ task, updateTodo, deleteTodo }) => {
  return (
    <div className="Card">
      <div className="Card--text">
        <span>{task.description}</span>
      </div>
      <div className="Card--button">
        {/* <button
          onClick={() => updateTodo(task)}
        >
          Complete
        </button> */}
        <button
          onClick={() => deleteTodo(task.id)}
          className="Card--button__delete"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default DisplayTask