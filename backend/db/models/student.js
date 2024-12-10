const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;
const dbConnector = require("./../dbConnector")

const fields = {}
fields["id"] = {type: DataTypes.BIGINT, allowNull: false, primaryKey: true, autoIncrement: true}
fields["name"] = {type : Sequelize.DataTypes.STRING, allowNull: false};
fields["email"] = {type : Sequelize.DataTypes.STRING, allowNull: true};
fields["gender"] = {type : Sequelize.DataTypes.ENUM('M', 'F', 'O'), allowNull: true};

module.exports = dbConnector.define("student", fields)