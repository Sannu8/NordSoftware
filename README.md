
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

Open the browser and go to:
https://devcenter.heroku.com/articles/heroku-cli

Click on MacOS installer.

A package will be downloaded. Open the package and install heroku. Agree to the license Agreement and the installation will be completed. 

In terminal, type the following commands:

heroku create (Application Name: in my case it was nordcontactdetails) -buildpack https://github.com/mars/create-react-app-buildpack.git

If you've not already logged in, you'll be asked for your login credentials in heroku.

Then, type:

git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open

(The application will now automatically run on a new browser.)



