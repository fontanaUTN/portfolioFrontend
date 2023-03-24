import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { About } from 'src/app/model/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  text: string;
  extra: string;

  constructor(private aboutS: AboutService, private router: Router ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const about = new About(this.text, this.extra);
    this.aboutS.save(about).subscribe( data => {
      alert("service aggred");
      this.router.navigate(['']);
    }, err => {
      alert("something is wrong");
      this.router.navigate(['']);
    })
  }
}
