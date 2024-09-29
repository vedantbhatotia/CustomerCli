const mongoose = require('mongoose');
const Customer = require('./models/customer');
mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://localhost:27017/customercli',{
    useMongoClient: true
});
// function  to add customer
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New Customer Added');
        db.close();
    });
}
// function to find customer
const FindCustomer = (name) => {
    // lowercase and uppercase doesnot matter
    const search = new RegExp(name, 'i');
    Customer.find({$or: [{firstname: search}, {lastname: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        db.close();
    });
}
module.exports = {
    addCustomer,
    FindCustomer
}