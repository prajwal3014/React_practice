from flask import Flask, jsonify, request
from db import get_todos, save_todos

app = Flask(__name__)
app.secret_key = "PRACTICE FOR REACT-FLASK APP"

@app.route('/api', methods = ['GET'])
def index() :
    todos_list = get_todos()
    return jsonify(todos_list)

@app.route('/delete', methods = ['GET', 'POST'])
def delete() :
    todo_sno = request.form.get('delete-btn')
    return jsonify(todo_sno)

if __name__ == "__main__" :
    app.run(debug=True)