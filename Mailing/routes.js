const express = require('express');
const controllers = require('./controllers');

const routes = (app) => {
    app.post('/cb/v1/api/services/mail',controllers.composeNewMail);
}

module.exports = routes;