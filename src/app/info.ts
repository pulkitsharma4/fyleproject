export class Info {
  name: string;
  workouts: { type: string; minutes: number }[];

  constructor(name: string, workouts: { type: string; minutes: number }[]) {
    this.name = name;
    this.workouts = workouts;
  }
}