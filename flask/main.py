from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from flask_cors import CORS
import tensorflow as tf


app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "Hello World!"


def predict(data):
    lst = []
    lst.append({'id': '1', 'name': 'TD BANK',
                'confidence': '93', 'quote': '436.25'})
    lst.append({'id': '2', 'name': 'AVIVA',
                'confidence': '75', 'quote': '436.25'})
    lst.append({'id': '3', 'name': 'SCOTIABANK',
                'confidence': '84', 'quote': '436.25'})
    lst.append({'id': '4', 'name': 'SUNLIFE',
                'confidence': '65', 'quote': '436.25'})
    lst.append({'id': '5', 'name': 'INTACT',
                'confidence': '83', 'quote': '436.25'})

    return jsonify(lst)


@app.route('/postjson', methods=['POST'])
def postJsonHandler():
    # print(request.is_json)
    content = request.get_json(force=True)
    gender = content['gender']
    age = content['age']
    city = content['city']
    year = content['year']
    make = content['make']
    model = content['model']
    dist = content['dist']
    new_used = content['new_used']
    # print(jsonify(content))

    canada_cities = pd.read_csv('list-of-cities-in-canada-csv.csv', names=['city'])
    l = list(pd.get_dummies(canada_cities, drop_first=True).columns)
    l.sort()
    k = {}
    for i in enumerate(l):
        k[i[1].split('_')[1].lower()] = i[0]
    zero_list = list(np.zeros(len(k)))

    for c in k:
        if (city == c):
            zero_list[k[c]-1] = 1

    if gender[0] == 'm':
        gender = 1
    else:
        gender = 0
    
    makes = [
        'audi',
        'bmw',
        'chevy',
        'ford',
        'gmc',
        'honda',
        'mercedes',
        'nissan',
        'tesla',
        'toyota'
    ]

    for m in makes:
        if (make == m):
            zero_list.append(1)
        else:
            zero_list.append(0)

    if (new_used[0] == 'u'):
        zero_list.append(1)
    else:
        zero_list.append(0)


    zero_list.insert(0, (float(year)/2020.0))
    zero_list.insert(0, (float(dist)/25000.0))
    zero_list.insert(0, (float(age)/100.0))
    zero_list.append(gender)

    # load models
    model_quote1 = tf.keras.models.load_model('company_1_model_quote.h5')
    model_conf1 = tf.keras.models.load_model('company_1_model_conf.h5')
    model_quote2 = tf.keras.models.load_model('company_2_model_quote.h5')
    model_conf2 = tf.keras.models.load_model('company_2_model_conf.h5')
    model_quote3 = tf.keras.models.load_model('company_3_model_quote.h5')
    model_conf3 = tf.keras.models.load_model('company_3_model_conf.h5')
    model_quote4 = tf.keras.models.load_model('company_4_model_quote.h5')
    model_conf4 = tf.keras.models.load_model('company_4_model_conf.h5')
    model_quote5 = tf.keras.models.load_model('company_5_model_quote.h5')
    model_conf5 = tf.keras.models.load_model('company_5_model_conf.h5')

    lst = []
    # test model on a value
    quote_prediction = model_quote1.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    confidence_prediction = model_conf1.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    lst.append({'id': '1', 'name': 'TD BANK', 'confidence': str((1 - confidence_prediction[0][0][0])), 'quote': str(quote_prediction[0][0][0])})
    
    quote_prediction = model_quote2.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    confidence_prediction = model_conf2.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    lst.append({'id': '2', 'name': 'AVIVA', 'confidence': str((1 - confidence_prediction[0][0][0])), 'quote': str(quote_prediction[0][0][0])})

    quote_prediction = model_quote3.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    confidence_prediction = model_conf3.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    lst.append({'id': '3', 'name': 'SCOTIABANK', 'confidence': str((1 - confidence_prediction[0][0][0])), 'quote': str(quote_prediction[0][0][0])})
    
    quote_prediction = model_quote4.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    confidence_prediction = model_conf4.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    lst.append({'id': '4', 'name': 'SUNLIFE', 'confidence': str((1 - confidence_prediction[0][0][0])), 'quote': str(quote_prediction[0][0][0])})
   
    quote_prediction = model_quote5.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    confidence_prediction = model_conf5.predict(np.reshape(np.array(zero_list), (1, 1, -1)))
    lst.append({'id': '5', 'name': 'INTACT', 'confidence': str((1 - confidence_prediction[0][0][0])), 'quote': str(quote_prediction[0][0][0])})

    return jsonify(lst)
 
