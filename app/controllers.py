from __future__ import unicode_literals, print_function
import spacy
import os 
from .forms import ALLOWED_EXTENSIONS


nlp = spacy.load('en')


def form_errors(form):
    error_messages = []
    """Collects form errors"""
    for field, errors in form.errors.items():
        for error in errors:
            message = u"Error in the %s field - %s" % (
                    getattr(form, field).label.text,
                    error
                )
            error_messages.append(message)

    return error_messages

def resource_match(resource,searchterms):
    """
    implement apache lucene for and python spacy here for indexing tokenization and parsing on all files
    """
    return match

def split_tags(string):
    """
        split data from database ---> converted to array
    """
    return tags_as_array

def strip_tags(string):
    """
        string input from user converted to csv for db store
    """
    return tags_as_array

def get_resource(resource_uri):
    """
        retrive docment from URI
    """
    rootdir = os.getcwd()
    for subdir,dirs,files in os.walk(rootdir +URI[1:-1]):
        for file in files:
            ls=os.path.join(subdir,file).split('/')[-2:]
    return '/'.join(ls)

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


