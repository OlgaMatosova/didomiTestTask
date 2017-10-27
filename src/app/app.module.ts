import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {routing} from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { GiveConsentComponent } from './give-consent/give-consent.component';
import { ConsentsComponent } from './consents/consents.component';

@NgModule({
    declarations: [
        AppComponent,
        GiveConsentComponent,
        ConsentsComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
