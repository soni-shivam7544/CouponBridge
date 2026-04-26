const express = require('express');
const controllers = require('./controllers');

const routes = (app) => {
    app.post('/cb/v1/api/services/mailings',controllers.composeNewMail);
}

module.exports = routes;