import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../interfaces/user';
@Component({
    selector: 'give-consent',
    templateUrl: 'give-consent.component.html',
    styleUrls: ['./give-consent.component.scss']
})

export class GiveConsentComponent {
    consents = [
        "Recive newsletter",
        "Be shown targeted ads",
        "Contribute to anonymous visit statistics"
    ];

    model = new User();

    submitted = false;

    onSubmit() {this.submitted = true;}

}