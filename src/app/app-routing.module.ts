import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { HomeComponent } from './components/home/home.component';
import { EditMainComponent } from './components/main/edit-main.component';
import { EditPortfolioComponent } from './components/portfolio/edit-portfolio.component';
import { NewPortfolioComponent } from './components/portfolio/new-portfolio.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'newportfolio', component: NewPortfolioComponent },
  { path: 'editportfolio/:id', component: EditPortfolioComponent },
  { path: 'editmain/:id', component: EditMainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
