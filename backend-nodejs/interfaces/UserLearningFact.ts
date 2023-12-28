import {LearningFact} from "./LearningFact";
import {User} from "./User";
export interface UserLearningFact {
    ID: number;
    User: User;
    LearningFact: LearningFact;
    NumberOfReviews: number;
    ConfidenceLevel: string;
    LastReviewedDate: Date;
}