import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CryptoItem } from 'src/app/shared/models/cryptos';

@Component({
  selector: 'app-cryptos-table',
  templateUrl: './cryptos-table.component.html',
  styleUrls: ['./cryptos-table.component.scss']
})
export class CryptosTableComponent implements OnChanges {
 
  displayedColumns: string[] = ['rank', 'name', 'priceUsd', 'marketCapUsd', 'vwap24Hr', 'supply', 'volumeUsd24Hr', 'changePercent24Hr'];
  dataSource: MatTableDataSource<CryptoItem>;

  @Input() cryptos: CryptoItem [] = []
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }


  ngOnChanges(): void {
      this.dataSource = new MatTableDataSource(this.cryptos);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
