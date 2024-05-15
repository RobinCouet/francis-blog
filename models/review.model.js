// Je recup ma connexion dans la variable sequilize
// et mes types de champs SQL dans DataTypes
export default (connection, DataTypes) => {
    connection.define(
        'Review',
        {
            // Model attributes are defined here
            comment: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            rating: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            date: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            }
        },
        { timestamps: true }
    );
}