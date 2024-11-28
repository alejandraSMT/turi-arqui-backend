const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ParentCategory = sequelize.define('ParentCategory', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        parent_category_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
    }, {
        tableName: 'parentcategory',
        freezeTableName: true,
        timestamps: false,
        quoteIdentifiers: false, 
    });

    return ParentCategory;
};
