const { DataTypes } = require('sequelize');
//const { roles } = require('');

const NewsModel = {

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

    description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },

    autor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true,
    }

}

// TODO: FINISH THIS API
// REST API EXAMPLE
// https://blog.postman.com/how-to-create-a-rest-api-with-node-js-and-express/