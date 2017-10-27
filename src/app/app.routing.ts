import {Routes, RouterModule} from '@angular/router';
import {GiveConsentComponent} from './give-consent/give-consent.component';
import {ConsentsComponent} from './consents/consents.component';

const appRoutes: Routes = [
    {
        path: 'consents',
        component: GiveConsentComponent
    },
    {
        path: 'give-consent',
        component: ConsentsComponent
    },
    {
        path: '**',
        redirectTo: 'give-consent'
    }
];

export const routing = RouterModule.forRoot(appRoutes);