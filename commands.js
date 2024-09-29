const program = require('commander');
const { addCustomer, findCustomer, init } = require('./index'); 
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
    //   console.info('Customer found:', );
    } catch (error) {
      console.error('Error finding customer:', error.message);
    }
  });

program.parse(process.argv);
