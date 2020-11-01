const expressRoute = require("express");
const appRoute = expressRoute.Router();
var message;
var fs = require('fs');

export {appRoute as routes};

appRoute.get('/users', (req, res) => res.send([]));
appRoute.post('/users',  function(req, res) { 
    message = req.body;
    console.log(message);
    if(message.value != undefined) {
        checkBoxes(message.value)
    }
    if(message.score != undefined) {
        createJSON(message);
    }
    res.send(req.body)}
);

function checkBoxes(value) {
    console.log("The user pressed the " + value + " value.");
}

function createJSON(data) {

    var jsonData = JSON.stringify(data);

        if(JSON.stringify(data) != undefined) {

        fs.writeFile("../src/app/c-cjs-tensor-chart/config/f-chart-data/tensor-chart-data.json", jsonData, function(err, result) {
                if(err) console.log('error', err);
            });
    }

}