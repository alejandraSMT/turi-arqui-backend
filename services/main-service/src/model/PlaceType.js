const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const PlaceType = sequelize.define('PlaceType', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        place_type_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        tableName: 'placetype',
        freezeTableName: true,
        timestamps: false,
        quoteIdentifiers: false, 
    });

    return PlaceType;
};
