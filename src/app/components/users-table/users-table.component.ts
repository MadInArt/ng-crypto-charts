import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['../../../assets/styles/components/users-table.component.scss']
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
