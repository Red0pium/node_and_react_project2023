import { Model, Column, Table, DataType } from 'sequelize-typescript';
import sequelize from "../sequelize";

@Table({ tableName: 'LearningPackage' })
class LearningPackageTable extends Model<LearningPackageTable> {
    @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
    LearningPackageID!: number;

    @Column({ type: DataType.STRING, allowNull: false })
    Title!: string;

    @Column({ type: DataType.TEXT, allowNull: true })
    Description?: string;

    @Column({ type: DataType.STRING, allowNull: false })
    Category!: string;

    @Column({ type: DataType.STRING, allowNull: false })
    TargetAudience!: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    DifficultyLevel!: number;
}
sequelize.addModels([LearningPackageTable]);

export default LearningPackageTable;