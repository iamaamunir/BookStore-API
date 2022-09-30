module.exports = (sequelize, DataTypes) => {
  const bookModel = sequelize.define(
    "bookModel",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.INTEGER,
        allowNull: false,
        msg: "Title must be a string and cannot be empty",
      },
      isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year_of_publication: {
        type: DataTypes.INTEGER,
        allowNull: false,
        max: 4,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "books",
    }
  );
  return bookModel;
};
