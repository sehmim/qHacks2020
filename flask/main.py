from flask import Flask, request, jsonify
from sklearn.neighbors import NearestNeighbors
import numpy as np
import pandas as pd
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "Hello World!"


def predict(data):
    # do ml and shit
    result = {
        "1": {
            "name": "TD BANK",
            "confidence": "93",
            "quote": "436.25"
        },
        "2": {
            "name": "AVIVA",
            "confidence": "75",
            "quote": "436.25"
        },
        "3": {
            "name": "SCOTIABANK",
            "confidence": "84",
            "quote": "436.25"
        },
        "4": {
            "name": "SUNLIFE",
            "confidence": "65",
            "quote": "436.25"
        },
        "5": {
            "name": "INTACT",
            "confidence": "83",
            "quote": "436.25"
        }
    }
    return result


# a = [np.ones(5) *2]
# a

# df = pd.DataFrame(a)
# df




@app.route('/postjson', methods=['POST'])
def postJsonHandler():
    print(request.is_json)
    content = request.get_json(force=True)
    gender = content["gender"]
    # if (content['gender'][0] == 'm'):
    #     gender = '1'
    # else:
    #     gender = '0'
    age = content['age']
    city = content['city'].lower()
    year = content['year']
    make = content['make']
    model = content['model']
    dist = content['dist']
    new_used = content['new_used']
    # arr = np.array([gender, age, city, year, make, model, dist, new_used])


    # city names
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
    
    
    print(zero_list)
    print(len(zero_list))


    # string = predict(arr)
    # string = "You are a " + age + " year old " + content['gender'] + " who drives a " + new_used + " " + \
    #     year + " " + make + " " + model + " for " + \
    #     dist + " km every year in " + city + "."
    print(jsonify(content))

    # name - TD BANK, AVIVA, SCOTIABANK, SUNLIFE, INTACT
    # confidence - #
    # quote - #

    return jsonify(predict(content))


app.run(host='0.0.0.0', port=8090)

# if __name__=='__main__':
#     app.run(debug=True)
