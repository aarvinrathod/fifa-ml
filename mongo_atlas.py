# from typing import Collection
import pymongo
# from pymongo import collection
from password import password
import json
import certifi

ca=certifi.where()
# conn = f'mongodb+srv://aarvin:{password}@cluster0.j8pgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
# conn = f'mongodb+srv://aarvin:{password}@cluster0.j8pgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
conn = f'mongodb+srv://aarvin:{password}@cluster0.j8pgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client = pymongo.MongoClient(conn, tlsCAFile=ca)

# print(client.server_info())
db = client.fifadb

# print())
collection = db.fifa

# print(collection.find_one())
collection.drop()

with open("Resources/FIFA_random_sample.json") as file:
    file_data = json.load(file)

collection.insert_one(file_data)