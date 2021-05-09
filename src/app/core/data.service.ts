import { Injectable } from '@angular/core';
export interface UserData {
  id: string;
  name: string;
  progress: string;
  amount: number;
}

@Injectable()
export class DataService {
  private  amount = [20, 20, 178, 199.5, 155.5, 35, 30
  ];
  
  private  names = [
    'Vehicle Type - TESLA-Model3',
    'Support plan - ENTERPRISE [ 29 * 7 access to dedicated Technical Account Manager ]',
    'Simulation Time - DAY',
    'Simulation Time - NIGHT',
    'Road Service Records Type - TRAFFIC HEAVY [ Total Simulation time * $ 0.5per min',
    'Maintenance Charges Per Month',
    'Violations Incurred'
  ];

  constructor() {}

  createNewUser(id: number, names: String): UserData {
      let uniqueKey = id + 1;
    return {
      id: uniqueKey.toString(),
      name: names.toString(),
      progress: Math.round(Math.random() * 100).toString(),
      amount: this.amount[this.getRandomArrayIndex(this.amount.length)]
    };
  }

  create100Users(): UserData[] {
    const users: UserData[] = [];
    for (let i = 0; i < this.names.length; i++) {
      users.push(this.createNewUser(i, this.names[i]));
    }
    return users;
  }

  private getRandomArrayIndex(length: number): number {
    return Math.round(Math.random() * (length - 1));
  }
}
