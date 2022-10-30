import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/services/s-experience.service';

@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.css']
})

export class NewPortfolioComponent implements OnInit {
  
  nameE: string = '';
  descriptionE: string = '';
  imageE: string = '';

  constructor(private sExperience: SExperienceService, private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void {
    const expe = new Experience(this.nameE, this.descriptionE, this.imageE);
    this.sExperience.save(expe).subscribe(
      data => {
        alert("experiencia agregada");
        this.router.navigate(['']);
      }, err => {
        alert("falla inesperada");
        this.router.navigate(['']);
      }
    )
  }
}
