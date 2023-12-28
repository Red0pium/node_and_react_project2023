import {LearningPackage} from "./LearningPackage";
import {User} from "./User";
export interface UserPackageLearning {
    ID: number;
    User: User;
    LearningPackage: LearningPackage;
    StartDate: Date;
    ExpectedEndDate: Date;
    MinutesPerDayObjective: number;
}