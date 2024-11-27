const dbConfig = require('../config/dbConfig.js');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

sequelize.authenticate()
.then(()=>{
    console.log('Conexión exitosa a la base de datos.');
    console.log('connected...')
})
.catch(err => {
    console.error('error'+ err)
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

const User = require('./User')(sequelize);
const Gender = require('./Gender')(sequelize);
const Role = require('./Role')(sequelize);

// Relaciones
User.belongsTo(Gender, { foreignKey: 'genderID', as: 'gender' });
User.belongsTo(Role, { foreignKey: 'roleID', as: 'role' });

// Creación de Tablas primarias
db.Gender = Gender;
db.Role = Role;
db.User = User;

// Función para insertar datos predeterminados
const insertDefaultData = async () => {
    try {
        // Insertar Genders
        const genders = ['Masculino', 'Femenino', 'Otro'];
        for (const gender of genders) {
            await Gender.findOrCreate({ where: { name: gender } });
        }

        // Insertar Roles
        const roles = ['user', 'admin', 'business'];
        for (const role of roles) {
            await Role.findOrCreate({ where: { name: role } });
        }

        console.log('Datos predeterminados insertados en Gender y Role.');
    } catch (error) {
        console.error('Error insertando datos predeterminados:', error);
    }
};



db.sequelize.sync({ force: false })
    .then(async () => {
        console.log('Base de datos sincronizada.');
        await insertDefaultData(); // Insertar datos predeterminados
    })
    .catch((err) => {
        console.error('Error sincronizando la base de datos:', err);
    });

module.exports = { sequelize, User, Gender, Role };
