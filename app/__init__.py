from flask import Flask
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
app.config.from_object(__name__)
csrf = CSRFProtect(app)
app.config['SECRET_KEY'] = 's\x97\xc2y\x9f\xb2l6\x17\x0f\xf4\x00R\xe6\x16\xff\xccSl\xda\x93\xde]%'
app.config['TOKEN_SECRET'] = '\xff\xd4\xd5\xef<\xa4F\xcc\xff\xd7H\xa7?n\x1d\xbbtP\xdfj\xff\x8d\x90\xd7'

from app import views
