import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule } from '@angular/router';
import { routes } from './router.config';
import { AuthGuard} from './services/auth.guardService'
import { PatientGuard } from './services/patient.guard'
import { AdminGuard } from './services/admin.guard';
import { LoginComponent } from './login/login.component';
import { ApiService } from './services/api.service';
import { StateManagerService } from './services/state-manager.service'
@NgModule({
  declarations: [
    AppComponent,
    PatientsListComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,

  ],
  providers: [AuthGuard, PatientGuard, AdminGuard, ApiService, StateManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
