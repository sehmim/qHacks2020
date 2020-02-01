from flask import Flask, request, jsonify
from sklearn.neighbors import NearestNeighbors
import numpy as np


app = Flask(__name__)


@app.route("/")
def hello():
    return "Hello World!"


def predict(data):
    X = np.array([[-1, -1], [-2, -1], [-3, -2], [1, 1], [2, 1], [3, 2]])
    nbrs = NearestNeighbors(n_neighbors=2, algorithm='ball_tree').fit(X)
    distances, indices = nbrs.kneighbors(X)
    for n in indices:
        print(n)
    for n in distances:
        print(n)
    return data


@app.route('/postjson', methods=['POST'])
def postJsonHandler():
    print(request.is_json)
    content = request.get_json(force=True)
    gender = content['gender']
    age = content['age']
    city = content['city']
    year = content['year']
    make = content['make']
    model = content['model']
    dist = content['dist']
    new_used = content['new_used']
    arr = np.array([gender, age, city, year, make, model, dist, new_used])
    # string = predict(arr)
    string = "You are a " + age + " year old " + gender + " who drives a " + new_used + " " + \
        year + " " + make + " " + model + " for " + \
        dist + " km every year in " + city + "."
    print(jsonify(content))
    return string


app.run(host='0.0.0.0', port=8090)

# if __name__=='__main__':
#     app.run(debug=True)
