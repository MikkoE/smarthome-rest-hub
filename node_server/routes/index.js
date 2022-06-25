//index file for the i3 routesa
const express = require('express');
const router  = express.Router();
const https = require('https')

const axios = require('axios');


router.get('/:scene', (req,res)=>{
    console.log('request was made: ' + req.url)
    //res.writeHead(200, {'Content-Type': 'application/json'});
    
    var scene = parseInt(req.params.scene);
    console.log(typeof(scene));
    switch (scene) {
        case 1: // küche an
            console.log("turning kitchen lights on")
            var body = {"on": true}

            axios.put('http://192.168.178.136/api/-kft5OkDjuXXzojboZxroWDrwkyNqP57cSm6PJhl/groups/1/action', body)
                .then((res) => {
                    console.log(`Status: ${res.status}`);
                    console.log('Body: ', res.data);
                }).catch((err) => {
                    console.error(err);
                });

            break;
        case 2: // küche aus
            console.log("turning kitchen lights on")
            var body = {"on": false}

            axios.put('http://192.168.178.136/api/-kft5OkDjuXXzojboZxroWDrwkyNqP57cSm6PJhl/groups/1/action', body)
                .then((res) => {
                    console.log(`Status: ${res.status}`);
                    console.log('Body: ', res.data);
                }).catch((err) => {
                    console.error(err);
                });

            break;

        default:
            console.log("default case")
            break;
    }
    res.sendStatus(200)
})

module.exports = router; 