
const { DataTypes } = require('sequelize');

const GameModel = {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
    },

    image: {
        type: DataTypes.BLOB,
        allowNull: false,
        unique: false,
    }
};

module.exports = {

    initialise: (sequelize) => {
        this.model = sequelize.define("game", GameModel);
    },
    
    createGame: (user) => {
        return this.model.create(user);
    },
    
    getGame: (query) => {
        return this.model.findOne({
        where: query,
        });
    },
    
    getAllGames: (query) => {
        return this.model.findAll({
        where: query
        });
    },
    
    updateGame: (query, updatedValue) => {
        return this.model.update(updatedValue, {
        where: query,
        });
    },
    
    deleteGame: (query) => {
        return this.model.destroy({ where: query });
    }
};


// TODO: FINISH THIS API
// REST API EXAMPLE
// https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/
// github https://github.com/postmanlabs/e-commerce-store-express


