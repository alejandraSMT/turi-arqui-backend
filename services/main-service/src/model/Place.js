const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Place = sequelize.define('Place', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING(350),
        },
        rating: {
            type: DataTypes.DECIMAL(2, 1),
            allowNull: false,
            validate: {
                min: 0,
                max: 5,
            },
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING(15),
        },
        website_url: {
            type: DataTypes.STRING(255),
        },
        opening_time: {
            type: DataTypes.TIME,
        },
        closing_time: {
            type: DataTypes.TIME,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
        },
        district_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        place_type_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        banner_photo: {
            type: DataTypes.STRING(350),
        },
    }, {
        tableName: 'place',
        freezeTableName: true,
        timestamps: false,
        quoteIdentifiers: false, 
    });

    return Place;
};
