import sqlite3
conn = sqlite3.connect('test.db')
sql = '''create table  subjects (id int,username text,password text)'''
cur = conn.cursor()
cur.execute(sql)
cur.execute("insert into subjects values(1,'user1','1234')")
conn.commit()
cur.execute("select * from subjects where username='user1'")
a=cur.fetchall()
print(a)