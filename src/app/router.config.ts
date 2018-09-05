import { Routes } from '@angular/router'
import { PatientsListComponent } from './patients-list/patients-list.component'
import { DashboardComponent} from './dashboard/dashboard.component'

import { AuthGuard } from './services/auth.guardService'
import { LoginComponent } from './login/login.component';
// import { PatientGuard } from './services/patient.guard';
// import { AdminGuard } from './services/admin.guard'

export const routes: Routes = [
   
   
    {
        path: 'patients/:id',
        component: PatientsListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    // { path: '**', component: NotFoundComponent },
];
