# Cloning the backend repo

> keep in mind the following commands are for linux systems
```
git clone git@github.com:MarlonAnacona/WeedWeb.git
cd WeedWeb/ApiweedWeb
````
Setting up the virtual enviroment
```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```
<br>

# Create data base

Creating the DB
```
$ sudo -u postgres psql
```
```
postgres=# CREATE DATABASE weedWeb;
postgres=# CREATE USER weed WITH PASSWORD 'root';
```
```
postgres=# ALTER ROLE weed SET client_encoding TO 'utf8';
postgres=# ALTER ROLE weed SET default_transaction_isolation TO 'read committed';
postgres=# ALTER ROLE weed SET timezone TO 'UTC';
```
```
postgres=# GRANT ALL PRIVILEGES ON DATABASE weedWeb TO weed;
```
```
postgres=# \q
```

<br>

<!-- 
Making the migrations
```
(venv)$ python manage.py makemigrations
(venv)$ python manage.py migrate
```
After this you should see the default tables that django creates 
-->

<br>


# Create enviroment variables for DB

create a .env file in the django root folder (WeedWeb/ApiweedWeb/backend_weed_web)

```
touch .env
```

enter the file add the following 

```
DB_NAME=db_name
DB_USER=db_username
DB_PASSWORD=db_password
DB_HOST=127.0.0.1
DB_PORT=5432
```
