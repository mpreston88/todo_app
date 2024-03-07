interface INewTask {
    description: string;
}

interface ITask extends INewTask {
    id: string;
}

type Task = {
    message: string
    status: string
    tasks: ITodo[]
    todo?: ITodo
}