Connect 4.
Alex Hong

Extensions added:
bootstrap (looks pretty)
express (its dope)
mongoose(databse stuff)
passport(authentication)
morgan(express middleware)
socket.io(for that sweet multiplayer ebic gameplay experience)
popper.js(looks pretty)
bcrypt(hashing. for auth);

Instructions.
OpenStack creds:
ssh student@134.117.132.185 
passwd: connect4isfun



I have cloned the project into the instance and installed all dependencies (I think) 

mongod -dbpath ./connect4spin/database

npm start to start express and node and stuff.
in app.js, there's a flag (app.testing).
there's a corresponding flag in c4.handlebars that disables/enables the button
It's set to true which allows the game to be started with only one player connected and play with only themselves.


 