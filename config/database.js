const { Sequelize } = require("sequelize");

module.exports = new Sequelize("nodejs_codegigs", "root", "", {
  host: "localhost",
  dialect: "mysql",
});