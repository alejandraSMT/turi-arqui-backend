const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Gender', {
        name: { type: DataTypes.STRING, allowNull: false, unique: true },
    });
};
