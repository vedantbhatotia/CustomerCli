#!/usr/bin/env node
const program = require('commander');
const { addCustomer, findCustomer, init,UpdateCustomer,RemoveCustomer} = require('./index'); 
program
  .version('1.0.0')
  .description('Customer Management System');

program
  .command('add <firstname> <lastname> <phone> <email>')
  .alias('a')
  .description('Add a customer')
  .action(async (firstname, lastname, phone, email) => {
    try {
        await init();
      await addCustomer({ firstname, lastname, phone, email });
      console.info('Customer added successfully!');
    } catch (error) {
      console.error('Error adding customer:', error.message);
    }
  });

program
  .command('find <name>')
  .alias('f')
  .description('Find a customer')
  .action(async (name) => {
    try {
        await init();
      const customers = await findCustomer(name);
    } catch (error) {
      console.error('Error finding customer:', error.message);
    }
  });
program.command('update <_id> <firstname> <lastname> <phone> <email>').alias('u').description('Update a customer').action(async (_id, firstname, lastname, phone, email) => {
    try {
      await init();
      await UpdateCustomer(_id, { firstname, lastname, phone, email });
      console.info('Customer updated successfully!');
    } catch (error) {
      console.error('Error updating customer:', error.message);
    }
});

program.command('remove <_id>').alias('r').description('Remove a customer').action(async (_id) => {
    try {
      await init();
      await RemoveCustomer(_id);
      console.info('Customer removed successfully!');
    } catch (error) {
      console.error('Error removing customer:', error.message);
    }
});

program.parse(process.argv);
