import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Scripts
import { ChargescriptsService } from './services/chargescripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MessageComponent } from './components/message/message.component';
import { FooterComponent } from './components/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { interceptorProvider } from './services/interceptor-service';
import { NewPortfolioComponent } from './components/portfolio/new-portfolio.component';
import { EditPortfolioComponent } from './components/portfolio/edit-portfolio.component';
import { EditMainComponent } from './components/main/edit-main.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NewServicesComponent } from './components/services/new-services.component';
import { EditServicesComponent } from './components/services/edit-services.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me.component';
import { NewAboutMeComponent } from './components/about-me/new-about-me.component';

import { CorsModule } from 'cors';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainComponent,
    AboutMeComponent,
    ServicesComponent,
    ContactComponent,
    PortfolioComponent,
    MessageComponent,
    FooterComponent,
    HomeComponent,
    AdminLoginComponent,
    NewPortfolioComponent,
    EditPortfolioComponent,
    EditMainComponent,
    NewServicesComponent,
    EditServicesComponent,
    EditAboutMeComponent,
    NewAboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CorsModule.forRoot({
      origin: 'https://fontana.progresodigital.net' // Reemplaza con el origen permitido
    })
  ],
  providers: [
    ChargescriptsService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
