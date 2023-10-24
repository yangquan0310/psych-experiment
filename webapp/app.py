from flask import  Flask,request,jsonify,render_template
from flask_cors import CORS
import sqlite3

app=Flask(__name__)
CORS(app)
@app.route('/')
def index():
    return render_template("index.html")  #加入变量传递
#登录
@app.route('/api/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        data=data.get("data")
        username = data.get('username')
        password = data.get('password')
        print(password)
        conn = sqlite3.connect('test.db')
        print(conn)
        cur = conn.cursor()
        print(cur)
        txt1= '''select * from  subjects where username="'''+username+'''"'''
        cur.execute(txt1)
        users = cur.fetchall()
        id,username_r,password_r=users[0]
        # 判断用户名是否存在
        if password == password_r:
            # 登录成功，返回登录成功的信息
            return jsonify({'success': True, 'message': '登录成功'})
        else:
            # 登录失败，返回登录失败的信息
            return jsonify({'success': False, 'message': '用户名或密码错误'})
    except Exception as e:
        return jsonify({'success': False, 'message': '登录失败，请稍后再试'}), 500

if __name__=="__main__":
    app.run(debug=True)