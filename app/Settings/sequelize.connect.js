const Sequelize= require('sequelize');
const test = new Sequelize('API','root','kouakouf',{
    host:'localhost',
    dialect:'mysql',
});

const connection= ()=>{
    test.authenticate()
    .then(() => {
    console.log('Connection has been established successfully.');
    })
    .catch(err => {
    console.error('Unable to connect to the database:',err);
    });
     
}

module.exports={test,connection};