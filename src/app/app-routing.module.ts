import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent, SignUpComponent } from './login';
import { DashboardComponent } from './dashboard';
import { RegisterComponent } from './register';
import { RequestComponent } from './request';


const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignUpComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'request/:id', component: RequestComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}