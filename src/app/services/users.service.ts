import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User, Users } from '../shared/models/user';
import { ApiService } from './api.service';



@Injectable({
  providedIn: 'root'
})
const __usersUrl = 'https://reqres.in/api'
export class UserServiceService {

  constructor(private apiService : ApiService) { }
  
    usersList: User[] = [];
    private usersListSub: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    currentData = this.usersListSub.asObservable();
 
    private formStatusSub: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    currentFormStatus = this.formStatusSub.asObservable();

    getUsersList(): BehaviorSubject<User[]>{
      return this.usersListSub;
    }

  getUsers(): void{
    this.apiService.get(`${__usersUrl}/users?page=2`).pipe(tap(data =>{ 
      this.usersListSub.next(data.data)
    })).subscribe()
  }

  deleteUsers(user: User): void{
    this.apiService.delete(`${__usersUrl}/users/${user.id}`).pipe(tap((delUser: User) =>{ 
      let newUserList = this.usersListSub.getValue();
      newUserList = newUserList.filter(u => u.id !== user.id);
      this.usersListSub.next(newUserList)
      console.log("userService delete", delUser)
    })).subscribe()
  }

  postUsers(data: User): void{
    this.apiService.post(`${__usersUrl}/users?page=2`, data).pipe(tap((newUser: User) =>{ 
      const newUserList = this.usersListSub.getValue();
      newUserList.push(newUser) 
      this.usersListSub.next(newUserList)
      console.log("userService post", newUser)
  })).subscribe()

  }
  updateUsers(updatedUserData: User): void{
    this.apiService.put(`${__usersUrl}users?page=2`, updatedUserData).pipe(tap((updatedUser: User) =>{ 
      let newUserList = this.usersListSub.getValue();
      let foundIndex = newUserList.findIndex(u=>u.id == updatedUserData.id);
      newUserList[foundIndex] = updatedUser;
      this.usersListSub.next(newUserList)
      console.log("userService update", updatedUser)
    })).subscribe()

  }
  formStatus(data : Users): void{
    this.formStatusSub.next(data.data)
  }
 
}
