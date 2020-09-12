const expressRoute = require("express");
const appRoute = expressRoute.Router();
var user;

export {appRoute as routes};

appRoute.get('/', (req, res) => res.send('Welcome to LiteDash'));
appRoute.get('/users', (req, res) => res.send([]));
appRoute.post('/users',  function(req, res) { 
    user = req.body;
    console.log(user);
    res.send(req.body)}
);