import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';
import {GiveConsentComponent} from './give-consent/give-consent.component';
import {ConsentsComponent} from './consents/consents.component';
import { ShowErrorsComponent } from './errors/show-errors.component';
import {ExampleDatabase} from './consents/service/data';
import {APP_BASE_HREF} from '@angular/common';
import {
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule,
    MatStepperModule,
    MatTableModule,
    MatPaginatorModule
   
} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        GiveConsentComponent,
        ConsentsComponent,
        ShowErrorsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        routing,
        HttpModule,
        JsonpModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonModule,
        MatStepperModule,
        MatTableModule,
        MatPaginatorModule
    ],
    providers: [
        ExampleDatabase,
        {provide: APP_BASE_HREF, useValue : '/'}],
        bootstrap: [AppComponent],
       schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {}
