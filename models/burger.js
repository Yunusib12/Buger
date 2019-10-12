module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    });
    return Burger;
};