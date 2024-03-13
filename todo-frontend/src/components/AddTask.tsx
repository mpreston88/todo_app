import React, { FormEvent, useRef } from "react"

type Props = {
  createTask: (event: FormEvent<HTMLFormElement>, newTask: INewTask) => void

}


const AddTask: React.FC<Props> = ({ createTask }) => {
  const descriptionRef = useRef<HTMLInputElement>(null)
  const handleCreateTask = (event: FormEvent<HTMLFormElement>): void => {
    const newTask = { description: descriptionRef?.current?.value || "" }
    createTask(event, newTask)
    event.currentTarget.reset()
  }


  return (
    <form onSubmit={handleCreateTask} className="Form">
      <input type="text"
       placeholder='Task Description...' 
       name='task'
       ref={descriptionRef}
      />

      <button type="submit">Add Task</button>
  </form>
  )
}

export default AddTask