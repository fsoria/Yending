const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('message', {
      idMsg: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // 36 Caracteres
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Nombre obligatorio",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          notNull: {
            msg: "Correo obligatorio",
          },
        },
      },
      message: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Mensaje obligatorio",
          },
        },
      },
    },
    {
    timestamps: false,
    }
  );
};