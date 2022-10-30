import { Component, OnInit } from '@angular/core';
import { ParticlesConfig } from './particles-config';
import { people } from 'src/app/model/people.model';
import { PeopleService } from 'src/app/services/people.service';

declare let particlesJS: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  people: people = new people("","","");
  constructor(public peopleService: PeopleService) { }

  ngOnInit(): void {
    this.invokeParticles();
    this.peopleService.getPeople().subscribe(data => { this.people = data });
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {})
  }
 
}
