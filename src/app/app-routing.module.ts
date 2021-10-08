import { AllComponent } from './components/all/all.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { FindComponent } from './components/find/find.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'all', component: AllComponent},
  {path: 'find', component: FindComponent},
  {path: '**', redirectTo: 'main', pathMatch: 'full'}

];

// A module is a container for diff parts of your app like controller, services, directives
// The routes and other properties will be auto configured by npm
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
