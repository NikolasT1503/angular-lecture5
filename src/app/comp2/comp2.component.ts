import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  fontSize = '13px';
  fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
  fontStyle = 'italic';

  verdanaStyle = {'font-size': this.fontSize, 'font-family': this.fontFamily, 'font-style': this.fontStyle};
  
  constructor() { }

  ngOnInit(): void {
  }

}
