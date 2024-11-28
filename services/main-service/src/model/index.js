const sequelize = require('../sequelize');
const District = require('./District')(sequelize);
const ParentCategory = require('./ParentCategory')(sequelize);
const Category = require('./Category')(sequelize);
const PlaceType = require('./PlaceType')(sequelize);
const Place = require('./Place')(sequelize);
const PlaceCategory = require('./PlaceCategory')(sequelize);

// Relaciones
Category.belongsTo(ParentCategory, { foreignKey: 'parent_category_id' });
Place.belongsTo(District, { foreignKey: 'district_id' });
Place.belongsTo(PlaceType, { foreignKey: 'place_type_id' });
// Relación muchos-a-muchos
Place.belongsToMany(Category, {
    through: PlaceCategory,
    foreignKey: 'place_id',
    otherKey: 'category_id',
    as: 'categories',
});

Category.belongsToMany(Place, {
    through: PlaceCategory,
    foreignKey: 'category_id',
    otherKey: 'place_id',
    as: 'places',
});

// Sincroniza tablas
sequelize
    .sync({ alter: false })
    .then(() => console.log('Tablas sincronizadas con éxito.'))
    .catch((error) => console.error('Error al sincronizar tablas:', error));

// Exporta los modelos y Sequelize
module.exports = {
    sequelize,
    District,
    ParentCategory,
    Category,
    PlaceType,
    Place,
    PlaceCategory
};
