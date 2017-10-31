import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {GiveConsentComponent} from './give-consent/give-consent.component';
import {ConsentsComponent} from './consents/consents.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import {routing} from './app.routing';
import { ShowErrorsComponent } from './errors/show-errors.component';
import {ExampleDatabase} from './consents/service/data';
import {
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule
   
} from '@angular/material';
import {

    MatStepperModule,


} from '@angular/material';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
        AppComponent,
        GiveConsentComponent,
        ConsentsComponent,
        ShowErrorsComponent
    ],
    imports: [
        routing,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatStepperModule,
        MatTableModule,
        MatPaginatorModule
    ], providers: [
    ExampleDatabase,
        { provide: APP_BASE_HREF, useValue : '/' }
    ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));




});
