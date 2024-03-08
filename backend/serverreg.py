import random
from flask import Flask, request, jsonify, session
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
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

def validate_input(email, password, username):
    email_pattern = re.compile(r'^[^@\s]+@[^@\s]+\.[^@\s]+$')  # Email validation pattern
    username_pattern = re.compile(r'^[a-zA-Z0-9_-]+$')  # Username validation pattern

    if not email_pattern.match(email):
        return False

    if not username_pattern.match(username):
        return False

    # Additional checks for password (you can customize this based on your requirements)
    if len(password) < 8:
        return False

    return True

@app.route('/api/register', methods=['POST'])
def register():
    try:
        connection = get_mysql_connection()
        if connection is None:
            return jsonify({'success': False, 'error': 'Unable to connect to MySQL'}), 500, {'Access-Control-Allow-Credentials': 'true'}

        data = request.json
        username = data.get('username')
        password = data.get('password')
        email = data.get('email')

        # Validate input
        if not validate_input(email, password, username):
            return jsonify({'success': False, 'error': 'Invalid input'}), 400, {'Access-Control-Allow-Credentials': 'true'}

        # Generate a random user ID with 5 digits
        user_id = random.randint(10000, 99999)

        cursor = connection.cursor()
        cursor.execute('INSERT INTO user (userid, name, password, email) VALUES (%s, %s, %s, %s)', (user_id, username, password, email))
        connection.commit()

        return jsonify({'success': True, 'message': 'Registration successful!'}), 200, {'Access-Control-Allow-Credentials': 'true'}

    except Exception as e:
        print(e)
        return jsonify({'success': False, 'error': 'Internal Server Error'}), 500, {'Access-Control-Allow-Credentials': 'true'}

if __name__ == '__main__':
    app.run(port=5001, debug=True)
