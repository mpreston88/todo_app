from typing import cast

from decouple import config

# Mongo connection information
MONGO_HOST: str = cast(str, config("MONGO_HOST", cast=str))
MONGO_USERNAME: str = cast(str, config("MONGO_USERNAME"))
MONGO_PASSWORD: str = cast(str, config("MONGO_PASSWORD"))
