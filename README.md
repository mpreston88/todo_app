# todo_app
Basic Todo app 

## Perquisites
- Docker installed https://www.docker.com/get-started/

## Getting Started

### Starting the Application Stack
1. From the root directory run `docker compose up` to trail the logs or `docker compose up -d` to run the api in detached mode

### Run MongoDB in standalone container
1. Run `docker compose up todo-mongodb`

### Setting up Local API Env
1. Install [PyEnv](https://github.com/pyenv/pyenv)
1. Install [Poetry](https://python-poetry.org/docs/)
1. Install [Docker](https://www.docker.com/get-started/)
1. Change dir to `/todo_app/api`
1. Create a `.env` file by copying the `sample.env` file and inserting the appropriate values
1. Run `pyenv local` to use the python version set by the project in `.python-version`
1. Run `poetry install` to create the poetry venv
1. You can start the API locally by running `poetry run uvicorn app:app --host 0.0.0.0 --port 8000 --reload` it is recommended to run this via docker compose however

### Setting up Local Frontend Environment
1. Install [NVM](https://github.com/nvm-sh/nvm)
1. Change dir to `/todo_app/frontend`
1. Run `nvm install` to install the Node version specified in .nvmrc
1. Run `nvm use` to use the Node version specified in .nvmrc
1. Run `corepack enable` to enable the yarn version specified in package.json
1. Run `yarn install` to install any modules
1. Run `yarn start` to start the application