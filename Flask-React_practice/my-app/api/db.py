import sqlite3

connection = sqlite3.connect("practice.db", check_same_thread=False)
obj = connection.cursor()
print("Connection Created...!")

obj.execute(""" create table if not exists todos (
                sno integer primary key autoincrement,
                title varchar(255)
            ) """)
connection.commit()
# print("Table Created...!")

# obj.execute(""" insert into todos (title) values('Practice for Python...!') """)
# connection.commit()
# obj.execute(""" insert into todos (title) values('Practice for ReactJS...!') """)
# connection.commit()
# obj.execute(""" insert into todos (title) values('Practice for Java...!') """)
# connection.commit()

def save_todos(title) :
    obj.execute(""" insert into todos (title) values('{0}') """.format(title))
    connection.commit()

def get_todos() :
    todos_list = []
    query = obj.execute(""" select * from todos """)
    lst = query.fetchall()
    for todo in lst :
        todo = list(todo)
        sample_dict = {"title" : todo[1], "sno" : todo[0]}
        todos_list.append(sample_dict)

    return todos_list
print(get_todos())
# obj.execute(""" drop table todos """)
# connection.commit()