
## Welcome to UpSwing! 

An app that allows users to search for stock data. Our goal was to make an easy and engaging way of tracking various companies and its current/future trends. There's a lot of features that are being planned for future implementation (ex. mobile support) so expect updates! And on the behalf of our team, thank you for your support.



https://user-images.githubusercontent.com/88508812/169675363-1f0ef3eb-4ef9-40db-b9e5-e68511387112.mov



## Getting Started 

1. Clone the repository through your CLI or through Github Desktop.

2. Cd into the root folder and npm i to install all of the server-side dependencies.

3. Cd into the client folder and npm i to install all of the client-side dependencies.

4. Open your text editor and in the root folder, create a .env file following the env.example 

5. Set up your Alpha Vantage API key and put it into your env file where API_KEY= . The link to set one up is here:
    https://www.alphavantage.co/support/#api-key
6. Fill the rest of your env variables and move onto the next section.

## Setting up the database

1. We used Postgresql for our database so we reccommend the same however you are free to use
   the database source of your choice. These instructions infer you have Postgresql installed globally on your command line.
   Insert your preferences in place of () when following the instructions and do not enter the () in your postgresql commands
2. Open postgresql with the command 'psql'
3. Create your database with the sql command 'CREATE DATABASE (name of your choice);'
   Example: CREATE DATABASE movies;
4. Create a new user with the command 'CREATE USER (name of choice) WITH PASSWORD (password of choice);'
5. Turn the newly created user into a superuser with the command 'ALTER USER (insert user you just created) WITH SUPERUSER;'
6. Make the user you created the owner of the database you created earlier with the command 'ALTER DATABASE (database_name) OWNER TO (new_owner)'
7. Enter those in as your .env variables => DB_NAME= name of database you created
8. To test if it's connected, go to the root folder of the repository and enter 'npm run db:reset'
   This is the reset database command and if the database/user along .env variables have been inputed correctly 
   you should expect this outcome:
<img width="692" alt="Screen Shot 2022-05-21 at 9 57 39 PM" src="https://user-images.githubusercontent.com/88508812/169675139-41212225-d63e-470b-b30b-b52a470f1816.png">

   Now that both of those are taken care of, 1 terminal go into the root folder and enter:
   'npm run server' to power on the server

   On a seoncd terminal, enter 'npm run client' to power the client and that's it!
   Enjoy UpSwing!
