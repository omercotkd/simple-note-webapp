from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route("/api/get-notes")
def home_page():
    return jsonify({
        "notes":[
            {
            "title": "test", 
            "content": "test"
            },
            {
            "title": "test1", 
            "content": "test1"
            },
            {
            "title": "test2", 
            "content": "test2"  
            }         
        ]
    })

if __name__ == "__main__":
    app.run(debug=True)
