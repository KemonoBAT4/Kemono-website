
const { DataTypes } = require('sequelize');
//const { roles } = require('');

const UserModel = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    phone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    }
};

module.exports = {

    initialise: (sequelize) => {
        this.model = sequelize.define("user", UserModel);
    },
    
    createUser: (user) => {
        return this.model.create(user);
    },
    
    getUser: (query) => {
        return this.model.findOne({
        where: query,
        });
    },
    
    updateUser: (query, updatedValue) => {
        return this.model.update(updatedValue, {
        where: query,
        });
    },
    
    getAllUsers: (query) => {
        return this.model.findAll({
        where: query
        });
    },
    
    deleteUser: (query) => {
        return this.model.destroy({ where: query });
    }
};


// TODO: FINISH THIS API
// REST API EXAMPLE
// https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
// github https://github.com/postmanlabs/e-commerce-store-express


