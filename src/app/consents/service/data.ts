import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../../interfaces/user';
import {Injectable} from '@angular/core';

@Injectable()
export class ExampleDatabase {
    public dataArr = [
          {name: 'Hydrogen', email: 'bojack@horseman.com', consents: ['Receive newsletter', 'Be shown targeted ads']},
          {name: 'Helium', email: 'princess@manager.com', consents: ['Receive newsletter']},
          {name: 'Lithium', email: 'geremyceoud@fins.com', consents: ['Receive newsletter', 'Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Beryllium', email: 'operation@synx.com', consents: ['Receive newsletter', 'Contribute to anonymous visit statistics']},
          {name: 'Boron', email: 'continental@gmail.com', consents: ['Contribute to anonymous visit statistics']},
          {name: 'Carbon', email: 'analitics@midow.com', consents: ['Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Nitrogen', email: 'terrrible@horror.com', consents: ['Receive newsletter', 'Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Oxygen', email: 'princess@manager.com', consents: ['Receive newsletter']},
          {name: 'Fluorine', email: 'operation@synx.com', consents: ['Contribute to anonymous visit statistics']},
          {name: 'Neon', email: 'bojack@horseman.com', consents: ['Receive newsletter', 'Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Sodium', email: 'geremyceoud@fins.com', consents: ['Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Magnesium', email: 'billi@mail.com' , consents: ['Receive newsletter', 'Be shown targeted ads']},
          {name: 'Aluminum', email: 'princess@manager.com', consents: ['Contribute to anonymous visit statistics']},
          {name: 'Silicon', email: 'analitics@midow.com', consents: ['Contribute to anonymous visit statistics']},
          {name: 'Phosphorus', email: 'continental@gmail.com', consents: ['Receive newsletter', 'Contribute to anonymous visit statistics']},
          {name: 'Sulfur', email: 'bojack@horseman.com', consents: ['Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Chlorine', email: 'geremyceoud@fins.com', consents: ['Receive newsletter', 'Be shown targeted ads']},
          {name: 'Argon', email: 'bojack@horseman.com', consents: ['Be shown targeted ads']},
          {name: 'Potassium', email: 'operation@synx.com', consents: ['Contribute to anonymous visit statistics']},
          {name: 'Calcium', email: 'princess@manager.com', consents: ['Receive newsletter']},
        ];
  /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    get data(): User[] {
         return this.dataArr;
    }
    setData(item) {
        this.dataArr.unshift(item);
    }


    constructor() {
      // Fill up the database with 100 users.

    }
}