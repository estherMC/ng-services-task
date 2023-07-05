import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService){
    this.usersService.usersChanged
    .subscribe(
        ()=> this.loadUsers());
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  loadUsers(){
    this.users = this.usersService.getInactiveUsers();
  }
}
