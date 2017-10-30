import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule}    from '@angular/forms';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import {HttpModule, JsonpModule} from '@angular/http';
import {GiveConsentComponent} from './give-consent/give-consent.component';
import {ConsentsComponent} from './consents/consents.component';
import { ShowErrorsComponent } from './errors/show-errors.component';
import {
    MatFormFieldModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatButtonModule
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
        MatFormFieldModule,
        MatCheckboxModule,
        MatCardModule,
        MatInputModule,
        MatGridListModule,
        MatMenuModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
