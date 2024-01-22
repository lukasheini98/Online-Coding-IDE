import subprocess
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/compile', methods=['POST'])
def compile_code():
    java_code = request.form.get('code-text')

    # Save the Java code to a temporary file
    with open('Main.java', 'w') as file:
        file.write(java_code)

    # Compile the Java code
    compilation_output = subprocess.getoutput('javac Main.java')
    runtime_output = subprocess.getoutput('java Main')

    return render_template('index.html', runtime_output=runtime_output)
