import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { SExperienceService } from 'src/app/services/s-experience.service';

@Component({
  selector: 'app-edit-portfolio',
  templateUrl: './edit-portfolio.component.html',
  styleUrls: ['./edit-portfolio.component.css']
})

export class EditPortfolioComponent implements OnInit {
  expLab: Experience = null;

  constructor(private sExperience: SExperienceService, private activedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.sExperience.details(id).subscribe(
      data => {
        this.expLab = data;
      }, err => {
        alert("error al  modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpload(): void {
    const id = this.activedRouter.snapshot.params['id'];
    this.sExperience.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }
}
