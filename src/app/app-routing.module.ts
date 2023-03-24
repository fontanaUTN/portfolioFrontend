import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';
import { NewAboutMeComponent } from './components/about-me/new-about-me.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { EditMainComponent } from './components/main/edit-main.component';
import { EditPortfolioComponent } from './components/portfolio/edit-portfolio.component';
import { NewPortfolioComponent } from './components/portfolio/new-portfolio.component';
import { EditServicesComponent } from './components/services/edit-services.component';
import { NewServicesComponent } from './components/services/new-services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'newportfolio', component: NewPortfolioComponent },
  { path: 'editportfolio/:id', component: EditPortfolioComponent },
  { path: 'editmain/:id', component: EditMainComponent },
  { path: 'newservice', component: NewServicesComponent },
  { path: 'editservice/:id', component: EditServicesComponent },
  { path: 'newabout', component: NewAboutMeComponent },
  { path: 'editabout/:id', component: EditAboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
