import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';

import {MatDatepickerModule} from '@angular/material/datepicker';



@NgModule({
  declarations: [],
  providers: [ {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3000}}], 
  imports: [
    CommonModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule, 
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDatepickerModule
  ]
})

export class AngularMaterialModule { }
