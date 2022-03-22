import { UUIDV4 , DataTypes, Model, Optional} from "sequelize";
import sequelize from '.';
export interface categoryAttributes {
    id: string,
    name: string
}

//This is for input data
export interface categoryBody extends Optional<categoryAttributes, 'id'> {}

class Category extends Model<categoryAttributes, categoryBody> implements categoryAttributes {
    declare id: string;
    declare name: string;
}
Category.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { sequelize, timestamps: true, modelName: "Category" })

export default Category