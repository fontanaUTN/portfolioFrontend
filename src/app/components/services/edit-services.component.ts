import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Knowledge } from 'src/app/model/knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-edit-services',
  templateUrl: './edit-services.component.html',
  styleUrls: ['./edit-services.component.css']
})
export class EditServicesComponent implements OnInit {
  knowledge: Knowledge = null;

  constructor(
    private knowledgeS: KnowledgeService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.knowledgeS.details(id).subscribe(data => {
      this.knowledge = data;
    }, err => {
      alert("error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.knowledgeS.update(id, this.knowledge).subscribe( data => {
      alert("success edit");
      this.router.navigate(['']);
    }, err => {
      alert("error al editar");
      this.router.navigate(['']);
    })
  }

}
