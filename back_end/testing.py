import json
from flask_cors import CORS, cross_origin
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

CORS(app, resources={
    r"/*": {"origins": "*"}
})

@app.route('/',methods=['GET'])
def welcome():
    return render_template('test.html')

@app.route('/test',methods=['POST'])
def test():
    if request.method == "POST":
        # name = request.form['naming']
        Data = json.loads(request.get_data())
        ReturnString = "Entry Recorded"
        # name = inputData.messageClient
        # return "Hello " + name
        # resp = {"msg" : "Hello "+Data['messageClient']}
        resp = {"msg" : ReturnString}
        # print resp
        return jsonify(resp)
app.run(debug=True)
