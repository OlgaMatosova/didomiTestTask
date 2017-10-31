import {Component, Output,  EventEmitter } from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';
import {User} from '../interfaces/user';
import {ExampleDatabase} from '../consents/service/data';
import {Router} from '@angular/router';


@Component({
    selector: 'give-consent',
    templateUrl: 'give-consent.component.html',
    styleUrls: ['./give-consent.component.scss']
})

export class GiveConsentComponent {
    user = {
        consents: [
            {name: 'Recive newsletter', selected: false},
            {name: 'Be shown targeted ads', selected: false},
            {name: 'Contribute to anonymous visit statistics', selected: false},
        ]
    }
    form: FormGroup;
    @Output() onHide = new EventEmitter<boolean>();

    constructor(private fb: FormBuilder, public exampleDatabase: ExampleDatabase, private router: Router) {
        this.createForm();

    }

    createForm() {
        this.form = this.fb.group({
            name: ['', Validators.required],
            consents: this.buildSkills(),
            email: ['', Validators.required],
        });
    }

    get consents(): FormArray {
        return this.form.get('consents') as FormArray;
    };

    buildSkills() {
        const arr = this.user.consents.map(s => {
            return this.fb.control(s.selected);
        })

        return this.fb.array(arr, this.validateConsent);
    }

    onSubmit(value) {
        this.onHide.emit(!this.form.valid);
        const f: User = Object.assign({}, value, {
            consents: value.consents.map((s, i) => {
                if (s) {
                    return this.user.consents[i].name
                }
                else {
                    return '';
                }
            })
        });

        this.router.navigate(['/consents']);
        this.exampleDatabase.setData(f);
    }

    private validateConsent(formGroup: FormGroup) {

        for (let key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                let control: FormControl = <FormControl> formGroup.controls[key];

                if (control.value) {
                    return null;
                }
            }
        }

        return {
            validateConsent: {
                valid: false
            }
        };
    }
}