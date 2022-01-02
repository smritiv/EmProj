from flask import Flask,render_template
app = Flask(__name__, static_url_path='/static')
@app.route('/')
def index():
    return render_template('EmProj.html')

@app.route('/write', methods=['POST'])
def writenotes():
    return render_template('write.html')