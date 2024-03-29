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
  Knowledge: any;

  constructor(private knowledgeS: KnowledgeService, private tokenService: TokenService) { }
  isLogged = false;

  skill1(skill: string): boolean {
    if(Number(skill) >= 1) { return true; }
    else { return false; }
  }

  skill2(skill: string): boolean {
    if(Number(skill) >= 2) { return true; }
    else { return false; }
  }

  skill3(skill: string): boolean {
    if(Number(skill) >= 3) { return true; }
    else { return false; }
  }

  skill4(skill: string): boolean {
    if(Number(skill) >= 4) { return true; }
    else { return false; }
  }

  skill5(skill: string): boolean {
    if(Number(skill) >= 5) { return true; }
    else { return false; }
  }

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
