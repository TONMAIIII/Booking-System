from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import base64

app = Flask(__name__)
cors = CORS(app, supports_credentials=True)

with open('users.json', 'r') as file:
    users_data = json.load(file)
    users = users_data.get('users', [])

def decode_user(encoded_username, encoded_password):
    decoded_username = base64.b64decode(encoded_username).decode()
    decoded_password = base64.b64decode(encoded_password).decode()
    return {"username": decoded_username, "password": decoded_password}

@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.json
        username = data.get('username')
        password = data.get('password')

        for user in users:
            decoded_user = decode_user(user['username'], user['password'])
            if decoded_user['username'] == username and decoded_user['password'] == password:
                return jsonify({'success': True}), 200, {'Access-Control-Allow-Credentials': 'true'}
        
        return jsonify({'success': False}), 401, {'Access-Control-Allow-Credentials': 'true'}

    except Exception as e:
        print(e)
        return jsonify({'success': False, 'error': 'Internal Server Error'}), 500, {'Access-Control-Allow-Credentials': 'true'}

if __name__ == '__main__':
    app.run(port=5000, debug=True)