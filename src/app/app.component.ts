import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    isLinear = true;
    form = {
        invalid: true
    }

    onHide(val: boolean) {
        this.form.invalid = val;
    }
}
