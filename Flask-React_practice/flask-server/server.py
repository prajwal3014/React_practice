from flask import Flask, jsonify

app = Flask(__name__)
app.secret_key = "COMBINING FLASK AND REACTJS PRACTICE...!"

@app.route('/hello')
def index() :
    return jsonify("Hello from Prajwal Sharma...!")

@app.route('/add', methods = ['GET', 'POST'])
def add_item() :
    return jsonify("Item is Added...!")

if __name__ == "__main__" :
    app.run(debug=True)