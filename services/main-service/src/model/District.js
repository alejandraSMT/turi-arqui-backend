const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const District = sequelize.define('District', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        district_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        tableName: 'district',
        freezeTableName: true,
        timestamps: false,
        quoteIdentifiers: false, 
    });

    return District;
};
