import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rst-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = 'Resume Develop!';

  constructor() { }

  ngOnInit() {}

  searchResume(no: number){
    console.log(`search: ${no}`);
  }
}
