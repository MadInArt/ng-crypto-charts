import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/users.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];
  deleteData: User;

  constructor(private usersService: UserServiceService) { }

  ngOnInit(): void {
    this.usersService.getUsers();
    this.usersService.getUsersList().subscribe(userList => {
      this.users = userList;
    });
}
onDeleteClick(data){
  this.deleteData = data;
  this.onUserDelete(data)
}
onUserDelete(user){
  this.usersService.deleteUser(user)
}
}
