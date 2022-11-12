from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return 'Hello World'

@app.route('/odd/<int:n>')
def odd(n):
    if n%2 == 0:
        result = {
            "Number": n,
            "odd": False
        }
    else:
        result = {
            "Number": n,
            "odd": True
        }
    return jsonify(result)

if __name__ == "__main__":
    app.run(debug=True)