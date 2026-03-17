const customerController = require('../Controllers/customer.controllers.js');

const customerRouter = ( app ) => {
        // Customer signup
        app.post('/cb/v1/api/customers/signup', customerController.signUp);

        // Get all customers
        app.get('/cb/v1/api/customers', customerController.getAllCustomers);

        // Get a customer by Id
        app.get('/cb/v1/api/customers/:id', customerController.getCustomerById);

        // Get all coupons of a customer
        app.get('/cb/v1/api/customers/:id/coupons', customerController.getCouponsByCustomerId);

        // Update a customer by Id
        app.put('/cb/v1/api/customers/:id', customerController.updateCustomerById);

        // Delete a customer by Id
        app.delete('/cb/v1/api/customers/:id', customerController.deleteCustomerById);
}

module.exports = customerRouter;