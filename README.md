# Full Stack (React+Django)
This project is a single page application that allows users to view their contacts, add contacts, and delete contacts. It is built using Django and React.

## Setup
Clone this repository to your computer. Navigate to the root folder. 
Switch to the repository root folder:
```bash 
git checkout starting-point
```
For the front end:
Navigate to ```front``` folder using the terminal.
Install the required dependencies using ```yarn install```
```yarn add axios react-router-dom react-bootstrap bootstrap```

For the back end:
Navigate to the ```BackEnd``` folder using another window of the terminal.
Activate the virtual envornment: 
```
$ source venv/bin/activate
```
Install the required dependencies:
```
$ pip install -r requirements.txt
```
and 
```
$ pip install djangorestframework
```
and 
```
$ python3 -m pip install django-cors-headers
```
Now, you need to migrate the models in the project to the database
```
$ python3 manage.py makemigrations
```
Then
```
$ python3 manage.py migrate
```

Start the web server
```
$ python3 manage.py runserver
```
Go to [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/) to see the django database. 

Get everything started:
```yarn start``` in your other terminal window where you are still in the ```front``` directory.
A tab in your browser should open up at [http://locahost:3000](http://locahost:3000) where you can now see the project. 


[Here](https://www.youtube.com/watch?v=jv8G4kfjn4w) is the tutorial that helped me a lot with this project.

## Requirements
You need Python 3 on your device. 

## Questions
Email johann.leidenfrost.20@ucl.ac.uk for questions. 