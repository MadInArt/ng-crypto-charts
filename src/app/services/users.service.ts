import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Snackbar } from '../components/snackbar/snackbar';
import { User, Users } from '../shared/models/user';
import { ApiService } from './api.service';




const __usersUrl = 'https://reqres.in/api'

@Injectable({
  providedIn: 'root'
})

export class UserServiceService {



  constructor(private apiService : ApiService, private snackBar : Snackbar) { }
  
    action = 'Got it'
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

  deleteUser(user: User): void{

    this.apiService.delete(`${__usersUrl}/users/${user.id}`).pipe(tap((delUser: User) =>{ 
      let newUserList = this.usersListSub.getValue();
      newUserList = newUserList.filter(u => u.id !== user.id);
      this.usersListSub.next(newUserList)
      
      const message = `User ${user.first_name} been deleted `
 
      this.snackBar.openSnackBar(message, this.action)

    })).subscribe()
  }
  
  updateUser(updatedUserData: User): void{
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
