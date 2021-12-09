from flask import Flask, render_template

app = Flask(__name__)
app.secret_key = "COMBINING FLASK AND REACTJS PRACTICE...!"

@app.route('/')
def index() :
    return "<h1>Hello from Prajwal Sharma...!</h1>"

if __name__ == "__main__" :
    app.run(debug=True)