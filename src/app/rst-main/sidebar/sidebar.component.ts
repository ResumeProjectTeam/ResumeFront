// import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// export declare type SidebarMenu = 'not_selected' | 'profile' | 'certificate';
// @Component({
//   selector: 'rst-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent implements OnInit {
//   currentMenu: SidebarMenu;
//   @Output() changeMenu: EventEmitter<string> = new EventEmitter();

//   constructor() { }

//   ngOnInit() { }

//   clickedMenu(menu: SidebarMenu){
//     this.currentMenu = menu;
//     this.changeMenu.emit(menu);
//   }

// }
import { Component } from '@angular/core';

@Component({
  selector: 'rst-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent { }
