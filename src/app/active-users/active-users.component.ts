import { Component,  OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
   users : string[];

  constructor(private usersService: UsersService){
    this.usersService.usersChanged
    .subscribe(
      ()=> this.loadUsers());
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(){
    this.users = this.usersService.getActiveUsers();
  }

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

}
