FROM python:3.11.5-slim-bookworm

ENV PYTHONFAULTHANDLER=1 \
  PYTHONUNBUFFERED=1 \
  PYTHONHASHSEED=random \
  PIP_NO_CACHE_DIR=off \
  PIP_DISABLE_PIP_VERSION_CHECK=on \
  PIP_DEFAULT_TIMEOUT=100 \
  # Poetry's configuration:
  POETRY_NO_INTERACTION=1 \
  POETRY_VIRTUALENVS_CREATE=false \
  POETRY_CACHE_DIR='/var/cache/pypoetry' \
  POETRY_HOME='/usr/local' \
  POETRY_VERSION=1.7.1

# System dependencies
RUN apt-get update \
    && apt-get install curl -y \
    && curl -sSL https://install.python-poetry.org | python - --version ${POETRY_VERSION}

WORKDIR /app
COPY poetry.lock pyproject.toml /app/
RUN poetry install --no-interaction --no-ansi

COPY . .

EXPOSE 8000
CMD ["uvicorn", "app:app",  "--host", "0.0.0.0", "--port", "8000", "--reload"]