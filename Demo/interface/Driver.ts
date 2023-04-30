import { CricketCoach } from "./CricketCoach";
import { Gymer } from "./Gymer";
import { IWorkout } from "./IWorkout";
import { SoccerPlayer } from "./SoccerPlayer";

let gymer = new Gymer();
let soccerPlayer = new SoccerPlayer();
let cricketCoach = new CricketCoach();

let array: IWorkout[] = [];
array.push(gymer);
array.push(soccerPlayer);
array.push(cricketCoach);

for (let arr of array) {
    console.log(arr.getDailyWorkout());
}
