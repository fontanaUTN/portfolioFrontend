import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/model/about';
import { people } from 'src/app/model/people.model';
import { AboutService } from 'src/app/services/about.service';
import { PeopleService } from 'src/app/services/people.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  about: About[] = [];
  About: any;
  people: people = new people("","","","");

  constructor(public peopleService: PeopleService,private aboutS: AboutService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.chargerPeople();
    // this.peopleService.getPeople().subscribe(data => {this.people = data});
    this.chargeAbout();
    
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  chargeAbout(): void {
    this.aboutS.list().subscribe(data => {
      this.about = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.aboutS.delete(id).subscribe(data => {
        this.chargeAbout();
      }, err => {
        alert("no se pudo eliminar");
      })
    }
  }

  public chargerPeople(){
    this.peopleService.details(1).subscribe((data) => { this.people = data })
  } 

}
