import { Component, OnInit } from '@angular/core';
import { ChargescriptsService } from 'src/app/services/chargescripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private _chargeScripts:ChargescriptsService) {
    _chargeScripts.charge(["index"]);
   }

  ngOnInit(): void {
  }

}
