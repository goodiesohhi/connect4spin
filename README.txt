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
ssh: 134.117.132.185 
passwd: connect4isfun

I have cloned the project into the instance and installed all dependencies (I think) 
SET DEBUG=connect4 & npm start to start express and node and stuff.
in app.js, there's a flag (app.testing).
It's set to true which allows the game to be started with only one player connected and play with only themselves.

ToDo:
Make it prettier. Animations etc.

Implement that extra gimmick of letting players turn the board and have the pieces fall and then continue from there.
 