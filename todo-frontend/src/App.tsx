import { FormEvent, useEffect, useState } from 'react';
import './App.css';
import { addTask, deleteTask, getTasks, updateTask } from './api';
import DisplayTask from './components/DisplayTask';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([])

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = (): void => {
    getTasks()
    .then(({ data }: ITask[] | any) => setTasks(data))
    .catch((err: Error) => console.log(err))
  }

  const createTask = (event: FormEvent, newTask: INewTask): void => {
    event.preventDefault()
    addTask(newTask)
      .then(({ status, data: id }) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved")
        }
        setTasks([...tasks, {description: newTask.description, "id": id}])
      })
      .catch(err => console.log(err))
  }
  
  const handleUpdateTask = (todo: ITask): void => {
    updateTask(todo)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not updated")
        }
        setTasks(data.tasks)
      })
      .catch(err => console.log(err))
  }
  
  const handleDeleteTodo = (_id: string): void => {
    deleteTask(_id)
      .then(({ status, data }) => {
        if (status !== 200) {
          throw new Error("Error! Todo not deleted")
        }
        const filteredTasks = tasks.filter(task => task.id!== _id)
        setTasks(filteredTasks)
      })
      .catch(err => console.log(err))
  }
  


  return (
    <main className='App'>
      <h1>My Todos</h1>
      <AddTask createTask={createTask} />
      {tasks.map((task: ITask) => (
        <DisplayTask
          key={task.id}
          updateTodo={handleUpdateTask}
          deleteTodo={handleDeleteTodo}
          task={task}
        />
      ))}
    </main>
  );
}

export default App;
