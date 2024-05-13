// Je recup ma connexion dans la variable sequilize
// et mes types de champs SQL dans DataTypes
export default (sequelize, DataTypes) => {

    sequelize.define(
        'User',
        {
            // Model attributes are defined here
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: true }
    );
}