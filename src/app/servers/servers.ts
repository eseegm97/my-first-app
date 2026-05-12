import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  standalone: false,
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrl: './servers.css',
})
export class Servers implements OnInit {
  
  constructor() { }
  
  ngOnInit() {

  }
  
}
