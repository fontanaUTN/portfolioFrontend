import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/services/s-experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
  expe: Experience[] = [];

  constructor(private sExperience: SExperienceService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.chargeExperience();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  chargeExperience():void {
    this.sExperience.lista().subscribe( data => { this.expe = data; });
  }

  delete(id?: number){
    if(id != undefined) {
      this.sExperience.delete(id).subscribe(
        data => {
          this.chargeExperience();
        }, err => {
          alert("no se ha podido eliminar");
        }
      )
    }
  }
}
