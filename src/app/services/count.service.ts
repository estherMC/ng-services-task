import { Injectable, EventEmitter } from "@angular/core";

Injectable()
export class CountService {

  count: number = 0;

  incrementCounter(status: string){
    this.count ++;
    console.log("S'ha fet switch a status " + status + ", total times: " + this.count);
  }

}
