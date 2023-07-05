import { CountService } from "./count.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable({providedIn: 'root'})
export class UsersService {

  usersChanged = new EventEmitter<void>();

  constructor(private countService : CountService){}

  private activeUsers = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];

  getActiveUsers(){
    return this.activeUsers.slice();
  }

  getInactiveUsers(){
    return this.inactiveUsers.slice();
  }

  setToActive(id: number) {
    this.countService.incrementCounter("active");
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.usersChanged.emit();
  }

  setToInactive(id: number) {
    this.countService.incrementCounter("inactive");
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.usersChanged.emit();
  }

}
