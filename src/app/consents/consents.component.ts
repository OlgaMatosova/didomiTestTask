import {Component, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material';
import {User} from '../interfaces/user';
import {ExampleDatabase} from './service/data';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

/**
 * @title Table with pagination
 */
@Component({
    selector: 'consents',
    templateUrl: 'consents.component.html',
    styleUrls: ['./consents.component.scss']
})
export class ConsentsComponent {
    displayedColumns = ['userName', 'email', 'consent'];
    exampleDatabase = new ExampleDatabase();
    dataSource: ExampleDataSource | null;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    ngOnInit() {
       this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }
    
    getPages(): number[] {
        const pages: number[] = [];
        let pagesCount = this.paginator.length/this.paginator.pageSize;
         for(let i = 0; i<pagesCount; i++){
             pages.push(i+1);
         }
         return pages;
    }
    
    onPage(page){
        
        this.paginator.pageIndex = page - 1;
        this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    }
}


/** An example database that the data source uses to retrieve data for the table. */


/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<any> {
  constructor(private _exampleDatabase: ExampleDatabase, private _paginator: MatPaginator) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<User[]> {
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {

      const data = this._exampleDatabase.data.slice();

      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      return data.splice(startIndex, this._paginator.pageSize);
    });
  }

  disconnect() {}
}