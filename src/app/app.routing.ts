import {Routes, RouterModule} from '@angular/router';
import {GiveConsentComponent} from './give-consent/give-consent.component';
import {ConsentsComponent} from './consents/consents.component';

const appRoutes: Routes = [
    {
        path: 'consents',
        component: ConsentsComponent
    },
    {
        path: 'give-consent',
        component: GiveConsentComponent
    },
    {
        path: '**',
        redirectTo: 'give-consent'
    }
];

export const routing = RouterModule.forRoot(appRoutes);