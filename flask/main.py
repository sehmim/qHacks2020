from flask import Flask, request, jsonify
import numpy as np
import pandas as pd
from flask_cors import CORS


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
    print(request.is_json)
    content = request.get_json(force=True)
    gender = content['gender'].lower()
    age = int(content['age'])
    city = content['city'].lower()
    year = int(content['year'])
    make = content['make'].lower()
    model = content['model'].lower()
    dist = int(content['dist'])
    new_used = content['new_used'].lower()

    if gender[0] == 'm':
        gender = 1
    else:
        gender = 0

    age  # how to turn this into 1s and 0s???

    canada_cities = pd.read_csv(
        'list-of-cities-in-canada-csv.csv', names=['city'])
    l = list(pd.get_dummies(canada_cities, drop_first=True).columns)
    l.sort()
    k = {}
    for i in enumerate(l):
        k[i[1].split('_')[1].lower()] = i[0]
    zero_list = list(np.zeros(len(k)))

    for c in k:
        if (city == c):
            zero_list[k[c]-1] = 1

    zero_list.insert(0, (year/2020.0))
    zero_list.insert(0, (dist/25000.0))
    zero_list.insert(0, (age/100.0))
    zero_list.append(gender)

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

    print(zero_list)
    print(len(zero_list))

    return predict(zero_list) + "\n\n" + jsonify(zero_list)


# app.run(host='0.0.0.0', port=8090)

# if __name__=='__main__':
#     app.run(debug=True)


# WORKING CODE:
# @app.route('/postjson', methods=['POST'])
# def postJsonHandler():
#     print(request.is_json)
#     content = request.get_json(force=True)
#     gender = content['gender']
#     age = content['age']
#     city = content['city']
#     year = content['year']
#     make = content['make']
#     model = content['model']
#     dist = content['dist']
#     new_used = content['new_used']
#     string = "You are a " + age + " year old " + gender + " who drives a " + \
#         new_used + " " + year + " " + make + " " + model + " for " + \
#         dist + " km every year in " + city + "."
#     print(jsonify(content))

#     lst = []
#     lst.append({'id': '1', 'name': 'TD BANK', 'confidence': '93', 'quote': '436.25'})
#     lst.append({'id': '2', 'name': 'AVIVA', 'confidence': '75', 'quote': '436.25'})
#     lst.append({'id': '3', 'name': 'SCOTIABANK', 'confidence': '84', 'quote': '436.25'})
#     lst.append({'id': '4', 'name': 'SUNLIFE', 'confidence': '65', 'quote': '436.25'})
#     lst.append({'id': '5', 'name': 'INTACT', 'confidence': '83', 'quote': '436.25'})

#     return jsonify(lst)
