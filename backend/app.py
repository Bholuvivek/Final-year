from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/register', methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        # Get form data from the request
        data = request.json

        # Connect to MySQL database
        connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",  # Enter your MySQL password here
            database="edupark"  # Change to your database name
        )
        cursor = connection.cursor()

        # Insert data into the student table
        cursor.execute("""
            INSERT INTO student (name, email, phone, class, password, confirm_password)
            VALUES (%s, %s, %s, %s, %s, %s)
        """, (
            data['fullName'],
            data['email'],
            data['countryCode'] + data['phoneNumber'],
            data['jobType'],
            data['password'],
            data['repeatPassword']
        ))
        connection.commit()
        connection.close()

        return jsonify({'message': 'Registration successful'})
    elif request.method == 'GET':
        return jsonify({'message': 'Method Not Allowed'}), 405

if __name__ == '__main__':
    app.run(debug=True)
