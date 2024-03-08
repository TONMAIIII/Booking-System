from flask import Flask, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configuration
app.config['MYSQL_HOST'] = '45.88.108.162'
app.config['MYSQL_USER'] = 'db_175167'
app.config['MYSQL_PASSWORD'] = 'yzBADMgmdQeNZIRYfqyo'
app.config['MYSQL_DB'] = 'db_175167'

mysql = MySQL(app)

def get_users_from_database():
    try:
        # Establish a connection to the database
        connection = mysql.connection
        cursor = connection.cursor()

        # Example query to select all users from a 'users' table
        cursor.execute("SELECT * FROM user")
        users_from_db = cursor.fetchall()

        # Transform the result into a list of dictionaries
        users = [{"id": user[0], "name": user[1], "email": user[2]} for user in users_from_db]

        return users

    except Exception as e:
        print(e)
        return []

@app.route('/api/user', methods=['GET'])
def get_user_data():
    users_from_database = get_users_from_database()
    return jsonify({"users": users_from_database})

if __name__ == '__main__':
    app.run(port=5003, debug=True)
