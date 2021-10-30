from flask import Flask, render_template, jsonify, redirect, request
import pickle
import numpy as np
import pymongo
from password import password
import certifi


ca=certifi.where()
conn = f'mongodb+srv://aarvin:{password}@cluster0.j8pgj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
client = pymongo.MongoClient(conn, tlsCAFile=ca)
db = client.fifadb

with open('models/clr0.sav', 'rb') as f: 
	rfr=pickle.load(f)

with open('models/scaler.sav', 'rb') as f: 
	scaler=pickle.load(f)

with open('models/clr1.sav', 'rb') as f: 
	rfr_value=pickle.load(f)

with open('models/clr2.sav', 'rb') as f: 
	rfr_wage=pickle.load(f)

with open('models/clr3.sav', 'rb') as f: 
	rfr_release=pickle.load(f)

#try your actual code here

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/fetch')
def fetch():
    data=db.fifa.find_one()
    result_json={key:value for (key,value) in data.items() if key!='_id'}
    return jsonify(result_json)


@app.route('/player_stats/<fullname>')
def fetch_player(fullname):
    return_obj={}
    data=db.fifa.find_one()
    for idx, value in data['FullName'].items(): 
        if value==fullname: 
            break
    for each_attr in data.keys(): 
        if each_attr !='_id': 
            return_obj[each_attr]=data[each_attr][idx]
    return jsonify(return_obj)


def fetch_player(fullname):
    return_obj={}
    data=db.fifa.find_one({'FullName': fullname})
    for idx, value in data['FullName'].items(): 
        if value==fullname: 
            break
    for each_attr in data.keys(): 
        if each_attr !='_id': 
            return_obj[each_attr]=data[each_attr][idx]
    return return_obj

@app.route('/predict/<input_string>', methods=['GET', 'POST'])
def predict(input_string):


    input_array=[int(n) for n in input_string.split(',')]
    input_scaled=scaler.transform([input_array])
    prediction=rfr.predict(input_scaled)
    prediction1=rfr_value.predict(input_scaled)
    prediction2=rfr_wage.predict(input_scaled)
    prediction3=rfr_release.predict(input_scaled)


    # return jsonify({"input" : input_array, 'output': round(prediction[0], 2)})
    #                 # {"input1" : input_array, 'output1': round(prediction1[0], 2)},
    #                 # {"input2" : input_array, 'output2': round(prediction2[0], 2)},
    #                 # {"input3" : input_array, 'output3': round(prediction3[0], 2)}
    #                 # )
    return jsonify({'output': round(prediction[0], 2), 'output1': round(prediction1[0], 2), 'output2': round(prediction2[0], 2), 'output3': round(prediction3[0], 2)})


if __name__=='__main__':
    app.run()