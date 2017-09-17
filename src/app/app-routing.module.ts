import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register.component';
import { DashboardComponent } from './dashboard.component';
import { RequestComponent } from './request.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'request/:id', component: RequestComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}