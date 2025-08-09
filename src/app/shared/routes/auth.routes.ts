import { Routes } from '@angular/router';
import { errorRoutingModule } from '../../components/error/error.routes';
import { authenticationRoutingModule } from '../../components/authentication/authentication.routes';

export const authen: Routes = [
    { path: '', children: [
        ...authenticationRoutingModule.routes,
        ...errorRoutingModule.routes,
 ] },
]