import { IWorkout } from "./IWorkout";

export class CricketCoach implements IWorkout {



    getDailyWorkout(): string {
        return "Practice spin bowling technique.";
    }

}