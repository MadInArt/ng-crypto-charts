import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent implements OnChanges {

  @Input() users;
  @Output() onDeleteClick = new EventEmitter<User>();
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email', 'deltebtn'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor() { }

  ngOnChanges(): void {
    this.dataSource = new MatTableDataSource(this.users);
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  __onDeleteClick(user){
     this.onDeleteClick.emit(user);
  }

}
// import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { TableDataSource, ValidatorService } from 'angular4-material-table';


// export class Person {
//   name: string;
//   age: number;
// }

// import { User } from 'src/app/shared/models/user';
// export class PersonValidatorService implements ValidatorService {
//   getRowValidator(): FormGroup {
//     return new FormGroup({
//       'name': new FormControl(null, Validators.required),
//       'age': new FormControl(),
//       });
//   }
// }

// @Component({
//   selector: 'app-users-table',
//     templateUrl: './users-table.component.html',
//     providers: [
//       {provide: ValidatorService, useClass:
//          PersonValidatorService 
//         }
//     ],
//     styleUrls: ['../../../assets/styles/components/users-table.component.scss']
// })
// export class UsersTableComponent implements OnInit {

//   constructor(private personValidator: ValidatorService) { }

//   displayedColumns = ['name', 'age', 'actionsColumn'];

//   @Input() personList = [ 
//     { name: 'Mark', age: 15 },
//     { name: 'Brad', age: 50 },
//     ] ;
//   @Output() personListChange = new EventEmitter<Person[]>();

//   dataSource: TableDataSource<any>;


//   ngOnInit() {
//     this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);

//     this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
//   }
// }