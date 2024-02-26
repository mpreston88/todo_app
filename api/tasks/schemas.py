from pydantic import BaseModel, Field


class TaskSchema(BaseModel):
    """
    Request Schema for a Task
    """

    description: str = Field(
        str, min_length=1, description="The description of the task todo"
    )
