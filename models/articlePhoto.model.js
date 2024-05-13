// Je recup ma connexion dans la variable sequilize
// et mes types de champs SQL dans DataTypes
export default (connection, DataTypes) => {
    connection.define(
        'ArticlePhoto',
        {
            // Model attributes are defined here
            picture: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        { timestamps: true }
    );
}