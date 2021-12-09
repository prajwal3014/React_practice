from flask import Flask, jsonify
from db import get_todos, save_todos

app = Flask(__name__)
app.secret_key = "PRACTICE FOR REACT-FLASK APP"

@app.route('/api', methods = ['GET'])
def index() :
    todos_list = get_todos()
    return jsonify(todos_list)

if __name__ == "__main__" :
    app.run(debug=True)