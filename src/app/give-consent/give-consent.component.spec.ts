import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ExampleDatabase} from '../consents/service/data';
import {GiveConsentComponent} from './give-consent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConsentsComponent} from '../consents/consents.component';
import {APP_BASE_HREF} from '@angular/common';

import {
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule

} from '@angular/material';
import { MatStepper } from '@angular/material';
import {routing} from '../app.routing';
import {ShowErrorsComponent} from '../errors/show-errors.component';

describe('GiveConsentComponent', () => {
    let component: GiveConsentComponent;
    let fixture: ComponentFixture<GiveConsentComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
                MatFormFieldModule,
                MatCardModule,
                MatCheckboxModule,
                MatInputModule,
                MatMenuModule,
                MatButtonModule,
                routing,
                MatTableModule,
                MatPaginatorModule],
            providers: [
                ExampleDatabase,
               
                {provide: APP_BASE_HREF, useValue: '/'}
            ],
            declarations: [
                GiveConsentComponent,
                ShowErrorsComponent,
                ConsentsComponent,
                MatStepper
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GiveConsentComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.form.valid).toBeFalsy();
    });

    it('name field validity', () => {
        let name = component.form.controls['name'];
        expect(name.valid).toBeFalsy();
        let errors = {};

        errors = name.errors || {};
        expect(errors['required']).toBeTruthy();
    });

    it('email field validity', () => {
        let email = component.form.controls['email'];
        expect(email.valid).toBeFalsy();
        let errors = {};
        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();
    });

    it('consents field validity', () => {
        let consents = component.form.controls['consents'];
        expect(consents.valid).toBeFalsy();
        let errors = {};
    });

    it('submitting a form emits', () => {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['email'].setValue("test@test.com");
        component.form.controls['name'].setValue("dfg");
        component.form.controls['consents'].setValue([true, false, false]);
        expect(component.form.valid).toBeTruthy();
        component.onSubmit(component.form.value);

    });

    it('should be add data', () => {
        component.form.controls['email'].setValue("test@test.com");
        component.form.controls['name'].setValue("dfg");
        component.form.controls['consents'].setValue([true, false, false]);
        component.onSubmit(component.form.value);

        let data = component.exampleDatabase.data;
        expect(component.form.value.name).toEqual(data[0].name);
    });

    it('should be data exist', () => {
        let data = component.exampleDatabase.getData();
        expect(data).toBeTruthy();
    });


});
