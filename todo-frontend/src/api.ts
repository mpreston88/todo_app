import axios, { AxiosResponse } from "axios"



const api = axios.create({headers: {'Content-Type': 'application/json'}})


export const getTasks = async (): Promise<AxiosResponse<[ITask]>> => {
  try {
    const todos: AxiosResponse<[ITask]> = await api.get(
    "/api/tasks"
    )
    return todos
  } catch (error) {
    if (axios.isAxiosError(error)) {
        throw new Error(error.message)
    }
    throw new Error("Something went wrong")
  }
}

export const addTask = async (
    formData: INewTask
  ): Promise<AxiosResponse<string>> => {
    try {
      const task = {
        description: formData.description,
      }
      const saveTask: AxiosResponse<string> = await api.post(
        "/api/tasks",
        task
      )
      return saveTask
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message)
        }
      throw new Error("Something went wrong")
    }
  }

  export const updateTask = async (
    task: ITask
  ): Promise<AxiosResponse> => {
    try {
      const taskUpdate: Pick<ITask, "description"> = {
        description: task.description,
      }
      const updatedTask: AxiosResponse = await api.put(
        `api/tasks/${task.id}`,
        taskUpdate
      )
      return updatedTask
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message)
        }
      throw new Error("Something went wrong")
    }
  }
  
  export const deleteTask = async (
    _id: string
  ): Promise<AxiosResponse> => {
    try {
      const deletedTask: AxiosResponse = await api.delete(
        `api/tasks/${_id}`
      )
      return deletedTask
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.message)
        }
      throw new Error("Something went wrong")
    }
  }
  