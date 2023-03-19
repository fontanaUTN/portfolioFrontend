import { Component, OnInit } from '@angular/core';
import { Knowledge } from 'src/app/model/knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  knowledge : Knowledge[] = [];

  constructor(private knowledgeS: KnowledgeService, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.chargeKnowledge();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  chargeKnowledge(): void {
    this.knowledgeS.list().subscribe(data => {
      this.knowledge = data;
    })
  }

  delete(id?: number){
    if(id != undefined){
      this.knowledgeS.delete(id).subscribe(data => {
        this.chargeKnowledge();
      }, err => {
        alert("no se pudo eliminar");
      })
    }
  }
}
