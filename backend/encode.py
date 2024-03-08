import json
import base64

def encode_credentials(username, password):
    # Create a dictionary with the provided username and password
    credentials = {"username": username, "password": password}
    
    # Encode the dictionary to base64
    encoded_credentials = {
        "username": base64.b64encode(username.encode('utf-8')).decode('utf-8'),
        "password": base64.b64encode(password.encode('utf-8')).decode('utf-8')
    }

    return encoded_credentials

# Input username and password from the terminal
username = input("Enter username: ")
password = input("Enter password: ")

# Encode the provided username and password
new_encoded_credentials = encode_credentials(username, password)


# Read the existing users from users.json
with open('users.json', 'r') as file:
    users_data = json.load(file)
    users = users_data.get('users', [])

    # Append the new user with encoded credentials
    new_user = {"username": new_encoded_credentials["username"], "password": new_encoded_credentials["password"]}
    users.append(new_user)

# Update the users.json file with the new user
with open('users.json', 'w') as file:
    users_data['users'] = users
    json.dump(users_data, file, indent=2)
