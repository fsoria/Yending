const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('subscription', {
      id: {
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       primaryKey: true,
       allowNull: false,
      },
      email: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
       isEmail: true,
       notNull: {
        msg: 'Correo obligatorio',
      },
      }
    },
  },
  )
}, {
  timestamps: false,
};

