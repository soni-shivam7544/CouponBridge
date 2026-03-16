const providerController = require('../Controllers/provider.controllers.js');

const providerRoutes = ( app ) => {
    // Provider signup
    app.post('/cb/v1/api/providers/signup', providerController.signUp);

    // Get all providers and provider by id
    app.get('/cb/v1/api/providers', providerController.getAllProviders);
    app.get('/cb/v1/api/providers/:id', providerController.getProviderById);

    // Update provider
    app.put('/cb/v1/api/providers/:id', providerController.updateProviderById);

    // Delete provider
    app.delete('/cb/v1/api/providers/:id', providerController.deleteProvider);
} 

module.exports = providerRoutes;