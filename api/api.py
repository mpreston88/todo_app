from fastapi import FastAPI, Response

# configure fastapi
app = FastAPI()


# API
@app.get("/")
def awesome_api():
    return Response("This is an Awesome API")
