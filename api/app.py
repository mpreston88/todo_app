from config import MONGO_HOST, MONGO_PASSWORD, MONGO_USERNAME
from fastapi import FastAPI, Response
from pymongo import MongoClient

# configure fastapi
app = FastAPI()
db_client = MongoClient(MONGO_HOST, username=MONGO_USERNAME, password=MONGO_PASSWORD)


# API
@app.get("/")
def awesome_api():
    hello = db_client["todo"]["hello"].find({})
    return Response(hello[0]["content"])
