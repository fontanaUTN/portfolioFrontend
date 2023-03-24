import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {

  about: About = null;

  constructor(
    private aboutS: AboutService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.aboutS.details(id).subscribe(data => {
      this.about = data;
    }, err => {
      alert("error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.aboutS.update(id, this.about).subscribe( data => {
      alert("success edit");
      this.router.navigate(['']);
    }, err => {
      alert("error al editar");
      this.router.navigate(['']);
    })
  }
}
