import os
import tempfile
from flask import request, jsonify
import pytest

from app import app


@pytest.fixture
def client():
    db_fd, app.config['DATABASE_URL'] = tempfile.mkstemp()
    app.config['TESTING'] = True
    client = app.test_client()

    with app.app_context():
        app.init_db()

    yield client

    os.close(db_fd)
    os.unlink(app.config['DATABASE_URL'])

def login(client, username, password):
    return client.post('/api/auth/login', data=dict(
        username=username,
        password=password
    ), follow_redirects=True)


def logout(client):
    return client.get('/api/auth/logout', follow_redirects=True)

""" API ROUTE TEST

@app.route('/api/auth')
def auth():
    json_data = request.get_json()
    email = json_data['email']
    password = json_data['password']
    return jsonify(token=generate_token(email, password))

with app.test_client() as c:
    rv = c.post('/api/auth', json={
        'username': 'flask', 'password': 'secret'
    })
    json_data = rv.get_json()
    assert verify_token(email, json_data['token'])
"""