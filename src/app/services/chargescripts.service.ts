import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChargescriptsService {

  constructor() { }

  charge(files:string[])
  {
    for(let file of files)
    {
      let script = document.createElement("script");
      script.src = "./../assets/scripts/" + file + ".js";

      let body = document.getElementsByTagName("body")[0];
      body.appendChild(script);
    }
  }
}
