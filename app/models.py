import uuid , datetime , random , os ,errno
from bcrypt import hashpw, gensalt ,checkpw
from . import db ,UPLOAD_FOLDER
from flask_login import UserMixin

def get_newlike_id():
    return int(str(uuid.uuid4().int)[:8])

def get_newpost_id():
    return str(uuid.uuid4())[:6]

def get_new_id():
    return int(str(uuid.uuid4().int)[:8])


def get_date():
    return datetime.date.today()

def generate_file_URI(post_id=None):
    if post_id:      
        URI=UPLOAD_FOLDER+'/resources/'+str(uuid.uuid4().get_hex()[0:6])+'/'
    else:
        URI=UPLOAD_FOLDER+'/prof_photo/'+str(uuid.uuid4().get_hex()[0:9])+'/'
    if not os.path.exists(URI):
        try:
            os.makedirs(URI)
        except OSError as e:
            if e.errno != errno.EEXIST:
                raise
    return URI

class Users(db.Model,UserMixin):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(80),unique=True)
    password = db.Column(db.String(255),nullable=False)
    first_name = db.Column(db.String(80))
    last_name = db.Column(db.String(80))
    email= db.Column(db.String(80),unique=True,nullable=False)
    biography = db.Column(db.String(300)) 
    profile_photo=db.Column(db.String(80))
    joined_on = db.Column(db.Date,nullable=False)
    uploads=db.relationship("Resources",backref='users')
    follows=db.relationship("Follows",backref='users')

    def __init__(self,user_name,plain_password,first_name,last_name,email):
        self.id=get_new_id()
        self.user_name = user_name
        self.password = hashpw(plain_password.encode('utf-8'),gensalt())
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.profile_photo=generate_file_URI()
        self.joined_on=get_date()
    
    def is_correct_password(self, plain_password):
        return checkpw(plain_password.encode('utf-8'),self.password.encode('utf-8'))

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        try:
            return unicode(self.id)  # python 2 support
        except NameError:
            return str(self.id)  # python 3 support

    def __repr__(self):
        return '<Users %r>' % (self.username)
        
class Resources(db.Model):
    __tablename__ = 'resources'
    id = db.Column(db.String(10), primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'),nullable=False)
    URI = db.Column(db.String(80))
    tags = db.Column(db.String(120))
    description = db.Column(db.String(120))
    created_on =db.Column(db.Date,nullable=False)

    def __init__(self,user_id,description,tags,image_URI=None):
        self.id=get_newpost_id()
        self.user_id=user_id
        self.URI= generate_file_URI(id)
        self.description=description
        self.tags=tags
        self.created_on=get_date()

    def __repr__(self):
        return '<Posts %r>' % (self.id)

class Follows(db.Model):
    __tablename__ = 'follows'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer,db.ForeignKey('users.id'),nullable=False)
    follower_id = db.Column(db.Integer,nullable=False)

    def __init__(self,user_id,follower_id):
        id=get_new_id()
        self.user_id=user_id
        self.follower_id=follower_id

    