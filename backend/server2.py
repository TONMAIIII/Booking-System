from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
app.secret_key = 'ad35rredaf'
app.config['MYSQL_HOST'] = '45.88.108.162'
app.config['MYSQL_USER'] = 'db_175167'
app.config['MYSQL_PASSWORD'] = 'yzBADMgmdQeNZIRYfqyo'
app.config['MYSQL_DB'] = 'db_175167'
cors = CORS(app, supports_credentials=True)

mysql = MySQL(app)

def get_mysql_connection():
    try:
        connection = mysql.connection
        if connection is None:
            return None
        return connection
    except Exception as e:
        print(e)
        return None

@app.route('/api/login', methods=['OPTIONS'])
def options():
    return jsonify({'success': True}), 200, {'Access-Control-Allow-Credentials': 'true'}

@app.route('/api/login', methods=['POST'])
def login():
    try:
        connection = get_mysql_connection()
        if connection is None:
            return jsonify({'success': False, 'error': 'Unable to connect to MySQL'}), 500, {'Access-Control-Allow-Credentials': 'true'}

        data = request.json
        username = data.get('username')
        password = data.get('password')

        cursor = connection.cursor()
        cursor.execute('SELECT * FROM user WHERE email = %s AND password = %s', (username, password,))
        user = cursor.fetchone()

        if user:
            session['loggedin'] = True
            session['userid'] = user[0]
            session['name'] = user[1]
            session['email'] = user[2]
            return jsonify({'success': True}), 200, {'Access-Control-Allow-Credentials': 'true'}

        return jsonify({'success': False}), 401, {'Access-Control-Allow-Credentials': 'true'}

    except Exception as e:
        print(e)
        return jsonify({'success': False, 'error': 'Internal Server Error'}), 500, {'Access-Control-Allow-Credentials': 'true'}

if __name__ == '__main__':
    app.run(port=5000, debug=True)
