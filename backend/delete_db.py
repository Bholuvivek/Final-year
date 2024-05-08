# delete_database.py

import mysql.connector

# Connect to MySQL server (change the parameters accordingly)
connection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",  # Enter your MySQL password here
    database="mysql"  # This is the default database, you can change it
)

# Function to drop a database
def drop_database(cursor, database_name):
    try:
        cursor.execute("DROP DATABASE {}".format(database_name))
        print("Database '{}' dropped successfully.".format(database_name))
    except mysql.connector.Error as err:
        print("Error dropping database: {}".format(err))

# Create a cursor object
cursor = connection.cursor()

# Drop the database (change the database name as needed)
drop_database(cursor, "eduparknew")

# Close the cursor and connection
cursor.close()
connection.close()
