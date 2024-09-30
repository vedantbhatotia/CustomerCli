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
const UpdateCustomer = async (_id, customer) => {
    try {
        const updatedCustomer = await Customer.findOneAndUpdate(
            { _id: _id },
            {
                firstname: customer.firstname,
                lastname: customer.lastname,
                phone: customer.phone,
                email: customer.email
            },
            { new: true }
        );
        console.info('Customer updated:', updatedCustomer);
    } catch (error) {
        console.error('Error updating customer:', error);
    }
};
const RemoveCustomer = async (_id) => {
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(_id);
        if (deletedCustomer) {
            console.info('Customer removed:', deletedCustomer);
        } else {
            console.info('Customer not found');
        }
    } catch (error) {
        console.error('Error removing customer:', error);
    }
};


const init = async () => {
    await connectDB();
};
module.exports = {
    init,
    addCustomer,
    findCustomer,
    UpdateCustomer,
    RemoveCustomer
};
