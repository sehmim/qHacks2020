from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route('/postjson', methods = ['POST'])
def postJsonHandler():
    print (request.is_json)
    content = request.get_json(force=True)
    gender = content['gender']
    age = content['age']
    city = content['city']
    year = content['year']
    make = content['make']
    model = content['model']
    print (content)
    return content['model']
    
  
app.run(host='0.0.0.0', port= 8090)

# if __name__=='__main__':
#     app.run(debug=True)