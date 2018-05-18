from flask import Flask
from flask_sqlalchemy  import SQLAlchemy
import os , psycopg2
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
app.config.from_object(__name__)
csrf = CSRFProtect(app)
app.config['SECRET_KEY'] = '\xb1\xd3\xfd\xf1S\x97\xab\xb5<vC\xae'
app.config['TOKEN_SECRET'] = '\xa2@\x0b\x97\xf8\xba\x90\x1fE\xa0\x87/'

UPLOAD_FOLDER = './app/static/uploads'
DATABASE_URL = os.environ['DATABASE_URL'] #'postgresql://user[:password]@localhost/weconnec'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] 	= True

conn = psycopg2.connect(DATABASE_URL)
db = SQLAlchemy(app)

from app import views
