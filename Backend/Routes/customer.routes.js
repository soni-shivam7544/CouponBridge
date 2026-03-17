const customerController = require('../Controllers/customer.controllers.js');

const customerRouter = ( app ) => {
        // Customer signup
        app.post('/cb/v1/api/customers/signup', customerController.signUp);

        // Get all customers
        app.get('/cb/v1/api/customers', customerController.getAllCustomers);

        // Get a customer by Id
        app.get('/cb/v1/api/customers/:id', customerController.getCustomerById);
}

module.exports = customerRouter;