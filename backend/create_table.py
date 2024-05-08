# create_tables.py

import mysql.connector

# Connect to MySQL server (change the parameters accordingly)
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",  # Enter your MySQL password here
    database="edupark"  # Change to your database name
)

# Function to create the student table
def create_student_table(cursor):
    try:
        cursor.execute("""
            CREATE TABLE student (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                class VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL,
                confirm_password VARCHAR(255) NOT NULL
            )
        """)
        print("Table 'student' created successfully.")
    except mysql.connector.Error as err:
        print("Error creating 'student' table: {}".format(err))

# Function to create the teacher table
def create_teacher_table(cursor):
    try:
        cursor.execute("""
            CREATE TABLE teacher (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                mobile VARCHAR(20) NOT NULL,
                designation VARCHAR(100) NOT NULL,
                subject VARCHAR(100) NOT NULL,
                joining_date DATE NOT NULL,
                leaving_date DATE
            )
        """)
        print("Table 'teacher' created successfully.")
    except mysql.connector.Error as err:
        print("Error creating 'teacher' table: {}".format(err))

# Create a cursor object
cursor = connection.cursor()

# Create the student table
create_student_table(cursor)

# Create the teacher table
create_teacher_table(cursor)

# Commit the changes and close the cursor and connection
connection.commit()
cursor.close()
connection.close()
