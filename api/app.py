from database import db_client, db_session
from fastapi import Depends, FastAPI, Response
from pymongo.client_session import ClientSession
from tasks.models import PyObjectId, Task
from tasks.schemas import TaskSchema

# configure fastapi
app = FastAPI()


# API
@app.get("/api/tasks", tags=["tasks"])
def get_tasks(session: ClientSession = Depends(db_session)) -> list[Task]:
    """
    Get a list of all tasks
    """
    tasks_collection = db_client["todo"]["tasks"]

    tasks = [Task(**task) for task in tasks_collection.find({}, session=session)]

    return tasks


@app.post(
    "/api/tasks",
    status_code=201,
    tags=["tasks"],
    response_description="Id of the created task",
)
def create_task(
    task: TaskSchema, session: ClientSession = Depends(db_session)
) -> Response:
    """
    Create a new task
    """
    tasks_collection = db_client["todo"]["tasks"]

    new_task = tasks_collection.insert_one(
        task.model_dump(mode="json"), session=session
    )

    return Response(status_code=201, content=str(new_task.inserted_id))


@app.put(
    "/api/tasks/{task_id}",
    responses={
        200: {"description": "Task updated"},
        404: {"description": "Task not found"},
    },
    tags=["tasks"],
)
def update_task(
    task_id: PyObjectId, task: TaskSchema, session: ClientSession = Depends(db_session)
) -> Response:
    """
    Updates the task with the given id
    """
    tasks_collection = db_client["todo"]["tasks"]
    updated_task = tasks_collection.find_one_and_update(
        {"_id": task_id}, {"$set": task.model_dump(mode="json")}, session=session
    )
    if updated_task:
        return Response(status_code=200)
    else:
        return Response(status_code=404)


@app.delete(
    "/api/tasks/{task_id}",
    responses={
        200: {"description": "Task deleted"},
        404: {"description": "Task not found"},
    },
    tags=["tasks"],
)
def delete_task(task_id: PyObjectId, session: ClientSession = Depends(db_session)):
    """
    Deletes the task with the given id
    """
    tasks_collection = db_client["todo"]["tasks"]
    deleted_task = tasks_collection.find_one_and_delete(
        {"_id": task_id}, session=session
    )

    if deleted_task:
        return Response(status_code=200)
    else:
        return Response(status_code=404)
