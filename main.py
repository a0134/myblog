from flask import Flask, render_template
import os

app = Flask(__name__, static_url_path="/")


@app.route("/")
def index():
    return render_template("index/index.html")


@app.route("/content")
def content_page():
    return render_template("index/content_page.html")


@app.route("/login")
def login():
    return render_template("sign/login.html")


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=os.getenv("PORT", default=5000), debug=True)
