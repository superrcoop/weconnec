# **weconnec**

Description
-------------------

A web-based platform that grants users access to a library of documents as well as allow them to share documents with persons from their friend list after signing up for an account. Users have the option of making uploaded resources public or private. The platform's main function is to allow users to search through a large pool of documents return relevant information based on the query in a timely manner.

![](app/static/images/screenshots/results.png)

Getting Started !
-------------------

This Web app requires the latest version of [Python and Flask](http://flask.pocoo.org) and [Vuejs](https://vuejs.org/v2/guide/)

Clone the repository:

`$ git clone https://github.com/superrcoop/weconnec.git`

Go into the repository:

`$ cd weconnec`

Install dependencies:

`$ pip install -r requirements.txt`


Deploy
--------

To test locally,Ensure that [PostgreSQL](https://www.postgresql.org) is installed and running and configure the database URI located in `__init__.py`

Export database URL:

`$ export DATABASE_URL=<DATABASE_URL>`

Setup database: 

~~~
$ python flask-migrations.py db init
$ python flask-migrations.py db migrate
$ python flask-migrations.py db upgrade
~~~

Run:

`$ python run.py`

Running the tests
--------------------

The `pytest` framework makes it easy to write small tests, yet scales to support complex functional testing

~~~
$ pytest
================== test session starts ===============================
collected 1 items
tests/test_search_engine.py 

~~~

Contributing
-------------

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

1. Fork it (<https://github.com/your_name/your_project/fork>)
2. Create your feature branch (`git checkout -b feature/feature-name`)
3. Commit your changes (`git commit -am 'Add some feature description'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Create a new Pull Request

License
------------

This project is licensed under the [GNU General Public License v3.0](LICENSE)
