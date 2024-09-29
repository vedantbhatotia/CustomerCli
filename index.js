const mongoose = require('mongoose');
const Customer = require('./customer');
const connectDB = require('./db');
const addCustomer = async (customer) => {
    try {
        const newCustomer = await Customer.create(customer);
        console.info('New Customer Added:', newCustomer);
    } catch (error) {
        console.error('Error adding customer:', error);
    }
};

const findCustomer = async (name) => {
    const search = new RegExp(name, 'i');
    try {
        const customers = await Customer.find({
            $or: [{ firstname: search }, { lastname: search }]
        });
        console.info(customers);
        console.info(`${customers.length} matches found`);
    } catch (error) {
        console.error('Error finding customer:', error);
    }
};
const init = async () => {
    await connectDB();
};
module.exports = {
    init,
    addCustomer,
    findCustomer
};
