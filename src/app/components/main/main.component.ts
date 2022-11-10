import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import { people } from 'src/app/model/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { TokenService } from 'src/app/services/token.service';

declare let particlesJS: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people: people = null;
  constructor(public peopleService: PeopleService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.invokeParticles();
    this.chargerPeople();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {})
  }

  public chargerPeople(){
    this.peopleService.details(1).subscribe((data) => { this.people = data })
  }
 
}
