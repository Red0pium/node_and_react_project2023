import {Model, Column, Table, DataType, ForeignKey,BelongsTo } from 'sequelize-typescript';
import sequelize from "../sequelize";
import LearningPackageTable from "./LearningPackageTable";

@Table({ tableName: 'LearningFact' })
class LearningFactTable extends Model<LearningFactTable> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    ID!: number;

    @ForeignKey(() => LearningPackageTable)
    @Column({ type: DataType.INTEGER }) // Define the data type for LearningPackageID
    LearningPackageID!: number;

    @BelongsTo(() => LearningPackageTable)
    learningPackage!: LearningPackageTable;

    @Column({ type: DataType.TEXT, allowNull: false })
    recto!: string;

    @Column({ type: DataType.TEXT, allowNull: false })
    verso!: string;

    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    disable!: boolean;
}

sequelize.addModels([LearningFactTable]);

export default LearningFactTable;