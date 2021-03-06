var express = require('express');
var contributors = require('./../modules/contributors/contributors');
var config = require('./../env.json')[process.env.NODE_ENV || 'dev'];
var router = express.Router();
var routes = {};

routes.index = router.get('/', function(req, res) {
    res.json({ message: 'Welcome! This is an API to know the top list of GitHub contributors by number of repositories' });   
});

routes.contributors = router.get(['/contributors', '/contributors/:location', '/contributors/:location/:limit'], function(req, res) {
    if (req.get('X-myAPI-Token') === config.token) {
        contributors.get(req.params.location, req.params.limit)
            .then(function(data) {
                res.json(data); 
            })
            .catch(function(err) {
                res.json(err);
            })
        ;  
    } else {
        res.json({ message: 'Access denied' });
    }
});

module.exports = routes;
