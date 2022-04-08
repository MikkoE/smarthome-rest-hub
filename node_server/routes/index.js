//index file for the i3 routesa
const express = require('express');
const router  = express.Router();

let request = require('request')

router.get('/:scene', (req,res)=>{
    console.log('request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'application/json'});
    
    var screne = req.params.scene;
    switch (scene) {
        case 1: // wohnzimmer decke an
            var body = {"on": true}
            // url values /api/-kft5OkDjuXXzojboZxroWDrwkyNqP57cSm6PJhl/groups/1/action
            request.put()
            
            break;
        case 2: //(Wohnzimmer decke aus

            break;

        default:
            break;
    }
    res.sendStatus(200)
})

module.exports = router; 