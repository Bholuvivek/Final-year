# create_database.py

import mysql.connector

# Connect to MySQL server (change the parameters accordingly)
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",  # Enter your MySQL password here
    database="mysql"  # This is the default database, you can change it
)

# Create a new database
def create_database(cursor, database_name):
    try:
        cursor.execute("CREATE DATABASE {}".format(database_name))
        print("Database '{}' created successfully.".format(database_name))
    except mysql.connector.Error as err:
        print("Error creating database: {}".format(err))

# Create a cursor object
cursor = connection.cursor()

# Create your database (change the database name as needed)
create_database(cursor, "edupark")

# Close the cursor and connection
cursor.close()
connection.close()
