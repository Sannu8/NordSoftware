Deployed application: https://nordcontactdetails.herokuapp.com/

Application for Storing Contact Details

This application is for managing the contact details by adding and deleting contacts, editing the details and sorting the columns in ascending or descending order. 


Installation:

This application was created in Mac Operating System with node version 8.9.1 

In order to create a new application, type the following commands in terminal if you have Node >= 6 on your machine.

npm install -g create-react-app

create-react-app my-app

cd my-app

npm start

You can now run the app you just created on localhost http://localhost:3000/ 

In order to install lodash that is required to  import orderBy used in this Application type the following commands in the terminal : 

npm install lodash
npm start

Deployment:

This application has been deployed in heroku. The process to deploy react app in heroku is as follows:

npm install -g create-react-app
create-react-app my-app
cd my-app
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open

(The application will now automatically run on a new browser.)



