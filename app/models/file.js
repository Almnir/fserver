// Example model


module.exports = function(sequelize, DataTypes) {

  var File = sequelize.define('File', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: DataTypes.STRING,
    fullpath: DataTypes.STRING,
    size: DataTypes.BIGINT,
    crc: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
    transfertime: DataTypes.DATE,
    clienttime: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // example on how to add relations
        // File.hasMany(models.Comments);
      }
    }
  });

  return File;
};
