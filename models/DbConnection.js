const { Sequelize, DataTypes } = require("sequelize");
const CONFIG = require("../config/dbConfig");
const bookModel = require("./bookModel");

const sequelize = new Sequelize(
  CONFIG.DB_NAME,
  CONFIG.DB_USER,
  CONFIG.DB_PASSWORD,
  {
    host: CONFIG.DB_HOST,
    dialect: CONFIG.DB_DIALECT,
  }
);


  sequelize.authenticate().then(()=>{
    console.log("Connection is successfull");
  }).catch((error) =>{
  console.log("Unable to connect successfully", error);
})

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.books = bookModel(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Tables sync successfully");
  })
  .catch((error) => {
    console.log("Unable to sync tables", error);
  });

module.exports = db;
