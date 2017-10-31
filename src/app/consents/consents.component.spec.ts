import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ExampleDatabase} from '../consents/service/data';
import {GiveConsentComponent} from '../give-consent/give-consent.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ConsentsComponent} from './consents.component';
import {APP_BASE_HREF} from '@angular/common';
import {HttpModule, JsonpModule} from '@angular/http';
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
import {routing} from '../app.routing';
import {ShowErrorsComponent} from '../errors/show-errors.component';

describe('ConsentsComponent', () => {
    let component: ConsentsComponent;
    let fixture: ComponentFixture<ConsentsComponent>;

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
                HttpModule, JsonpModule,
                MatPaginatorModule],
            providers: [
                ExampleDatabase,
                {provide: APP_BASE_HREF, useValue: '/'}
            ],
            declarations: [
                GiveConsentComponent,
                ShowErrorsComponent,
                ConsentsComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ConsentsComponent);
        component = fixture.componentInstance;
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should be data exist', () => {
     let data = component.exampleDatabase.getData();
        expect(data).toBeTruthy();
    });
});
