import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { people } from 'src/app/model/people.model';
import { ImageService } from 'src/app/services/image.service';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent implements OnInit {

  people: people = null;

  constructor(private activatedRouter: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router,
    public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.peopleService.details(id).subscribe(
      data => {
        this.people = data;
      }, err => {
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpload(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.people.image = this.imageService.url;
    this.peopleService.update(id, this.people).subscribe(
      data => {
        alert("error al modificar");
        this.router.navigate(['']);
      }, err => {
        alert("error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any) {
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "perfil" + id;
    this.imageService.uploadImage($event, name);
  }

}
