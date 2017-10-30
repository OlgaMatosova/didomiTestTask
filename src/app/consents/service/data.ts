import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../../interfaces/user';
export class ExampleDatabase {
  /** Stream that emits whenever the data has been modified. */
    dataChange: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
    get data(): User[] {
        return [
          {name: 'Hydrogen', email: 'bojack@horseman.com', consent: ['Receive newsletter', 'Be shown targeted ads']},
          {name: 'Helium', email: 'princess@manager.com', consent: ['Receive newsletter']},
          {name: 'Lithium', email: 'geremyceoud@fins.com', consent: ['Receive newsletter', 'Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Beryllium', email: 'operation@synx.com', consent: ['Receive newsletter', 'Contribute to anonymous visit statistics']},
          {name: 'Boron', email: 'continental@gmail.com', consent: ['Contribute to anonymous visit statistics']},
          {name: 'Carbon', email: 'analitics@midow.com', consent: ['Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Nitrogen', email: 'terrrible@horror.com', consent: ['Receive newsletter', 'Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Oxygen', email: 'princess@manager.com', consent: ['Receive newsletter']},
          {name: 'Fluorine', email: 'operation@synx.com', consent: ['Contribute to anonymous visit statistics']},
          {name: 'Neon', email: 'bojack@horseman.com', consent: ['Receive newsletter', 'Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Sodium', email: 'geremyceoud@fins.com', consent: ['Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Magnesium', email: 'billi@mail.com' , consent: ['Receive newsletter', 'Be shown targeted ads']},
          {name: 'Aluminum', email: 'princess@manager.com', consent: ['Contribute to anonymous visit statistics']},
          {name: 'Silicon', email: 'analitics@midow.com', consent: ['Contribute to anonymous visit statistics']},
          {name: 'Phosphorus', email: 'continental@gmail.com', consent: ['Receive newsletter', 'Contribute to anonymous visit statistics']},
          {name: 'Sulfur', email: 'bojack@horseman.com', consent: ['Be shown targeted ads', 'Contribute to anonymous visit statistics']},
          {name: 'Chlorine', email: 'geremyceoud@fins.com', consent: ['Receive newsletter', 'Be shown targeted ads']},
          {name: 'Argon', email: 'bojack@horseman.com', consent: ['Be shown targeted ads']},
          {name: 'Potassium', email: 'operation@synx.com', consent: ['Contribute to anonymous visit statistics']},
          {name: 'Calcium', email: 'princess@manager.com', consent: ['Receive newsletter']},
        ];
    }

    constructor() {
      // Fill up the database with 100 users.

    }
}