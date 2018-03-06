var _: require('lodash');
var express = require('express');
var request = require('request-promise');
var router = express.Router();

router.post('/', async (req, res, next) => {
    const {body} = req;

    const authentification = body.get('authentification');

	if(!body.id_user && !body.id_flight) {
        return res.status(400).send({message: 'Il manque des données'});
    }

    if(!authentification) {
        return res.status(401).send({message: 'Token manquant'});
    }

    return res.status(201).send({reference:'123'});
});

module.exports = router;
