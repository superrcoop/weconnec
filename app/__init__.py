from flask import Flask
from flask_wtf.csrf import CSRFProtect

app = Flask(__name__)
app.config.from_object(__name__)
csrf = CSRFProtect(app)
app.config['SECRET_KEY'] = '\xb1\xd3\xfd\xf1S\x97\xab\xb5<vC\xae'
app.config['TOKEN_SECRET'] = '\xa2@\x0b\x97\xf8\xba\x90\x1fE\xa0\x87/'

from app import views
