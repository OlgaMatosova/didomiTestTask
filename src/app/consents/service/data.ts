import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../../interfaces/user';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ExampleDatabase {
    public dataArr: User[];
  /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    get data(): User[] {
         return this.dataArr;
    }
    setData(item) {
        this.dataArr.unshift(item);
    }

    getData(){
        return this.http.get('assets/data.json');
    }
    constructor(private http: Http) {
        this.getData().map(res => res.json()).subscribe((data) => { this.dataArr = data});
    }
}