import { IWorkout } from "./IWorkout";

export class Gymer implements IWorkout {

    getDailyWorkout(): string {
        return "Push up 100 time."
    }

}