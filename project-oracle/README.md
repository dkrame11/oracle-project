# django-react-webapp
Web Application based on Django back-end and React front-end

All commands should be typed inside `project` repo.

`cd project`

1. Installing packages for frontend using npm
```
npm install
```

2. Constructing virtual environment for backend (need to install python3 first, perhaps through `conda`)

```
virtualenv -p python3 venv
```

3. Activating virtualenv

```
source activate venv/bin/activate
```

4. Installing packages for the virtualenv

```
pip install -r requirements
```

5. Running Frontend

```
npm run watch
```

6. Running Backend

```
(activate virtualenv first at (3))
python manage.py runserver
```

7. Access webapp through localhost

```
localhost:8000
```
