from config import MONGO_HOST, MONGO_PASSWORD, MONGO_USERNAME
from pymongo import MongoClient

db_client = MongoClient(MONGO_HOST, username=MONGO_USERNAME, password=MONGO_PASSWORD)


def db_session():
    """
    Generate a MongoDB session.
    """
    with db_client.start_session(causal_consistency=True) as session:
        try:
            yield session
        finally:
            session.end_session()
