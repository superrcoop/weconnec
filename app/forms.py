from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField
from wtforms.validators import Required, Email,Length, EqualTo, DataRequired
from flask_wtf.file import FileField, FileAllowed, FileRequired

ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg','docx','pdf','ppt','txt','odf','doc'])

class LoginForm(FlaskForm):

	username = StringField('Username', validators = [DataRequired('Please provide an email address')])
	plain_password = PasswordField('Password', validators = [DataRequired('Enter your password')])

class RegistrationForm(FlaskForm):
	first_name = StringField('First Name', validators=[Length(min=1,max=40,message=('First Name does not satisfy condition ( 1 < name.length <= 40 )')),DataRequired('Please provide a First Name')])
	last_name = StringField('Last Name', validators=[Length(min=1,max=40,message=('Last Name does not satisfy condition ( 1 < name.length <= 40 )')),DataRequired('Please provide a Last Name')])
	username = StringField('Username', validators=[Length(min=1,max=40,message=('Username does not satisfy condition ( 1 < name.length <= 40 )')),DataRequired('Please provide a username')])
	email = StringField('Email Address', validators=[Email(message='Email not Valid'),DataRequired('Please provide an email address')])
	plain_password = PasswordField('Enter Password',validators=[DataRequired('Enter a Password'),EqualTo('conf_password',message=('Passwords must Match'))])
	conf_password=PasswordField('Repeat Password',validators=[DataRequired('Re-enter password')])

class SearchForm(FlaskForm):
	search=	StringField('Search', validators = [DataRequired('Search something...')])

class UploadForm(FlaskForm):
	description=StringField('Description', validators = [DataRequired('Add a description')])
	tags=StringField('Tags', validators=[Length(max=40,message=('Why so many tags bruh? '))])
	file=FileField('file', validators=[FileAllowed(ALLOWED_EXTENSIONS, 'File not allowed')])
	

