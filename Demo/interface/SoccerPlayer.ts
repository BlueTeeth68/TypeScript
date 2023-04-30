import { IWorkout } from "./IWorkout";

export class SoccerPlayer implements IWorkout {

    getDailyWorkout(): string {
        return "Practice penalty kick skill.";
    }

}