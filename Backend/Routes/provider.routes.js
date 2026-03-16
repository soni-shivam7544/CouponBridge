const providerController = require('../Controllers/provider.controllers.js');

const providerRoutes = ( app ) => {

    app.post('/cb/v1/api/providers/signup', providerController.signUp);
    app.get('/cb/v1/api/providers', providerController.getAllProviders);
    app.get('/cb/v1/api/providers/:id', providerController.getProviderById);
} 

module.exports = providerRoutes;