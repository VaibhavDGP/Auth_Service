const express = require('express');
const bodyParser = require('body-Parser');
const app = express();

const UserService = require('./services/user-Service');

const {PORT} = require('./config/serverConfig')
const ApiRoutes = require('./routes/index');
const setupAndStartServer = async () => {

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api' , ApiRoutes);

app.listen(PORT , () => {
console.log("server started on Port:",PORT); 

const service = new UserService();
// const newToken  = service.createToken({email: 'anubis@gmail.com' , id :'1'});
// console.log("New token is" , newToken); 

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFudWJpc0BnbWFpbC5jb20iLCJpZCI6IjEiLCJpYXQiOjE3Nzk1MTAxMzcsImV4cCI6MTc3OTUxMzczN30.4z-Ta1ii28QV0luO1wjOM9k0JZrJFfTCwsHnYiqaM80';
const response = service.verifyToken(token);
console.log(response);

});

}

setupAndStartServer();