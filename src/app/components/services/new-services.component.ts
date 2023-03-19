import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Knowledge } from 'src/app/model/knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-new-services',
  templateUrl: './new-services.component.html',
  styleUrls: ['./new-services.component.css']
})
export class NewServicesComponent implements OnInit {
  nameK: string;
  descriptionK: string;
  imageK: string;
  skillK: string;

  constructor(private knowledgeS: KnowledgeService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const knowledge = new Knowledge(this.nameK, this.descriptionK, this.imageK, this.skillK);
    this.knowledgeS.save(knowledge).subscribe( data => {
      alert("service aggred");
      this.router.navigate(['']);
    }, err => {
      alert("something is wrong");
      this.router.navigate(['']);
    })
  }

}
