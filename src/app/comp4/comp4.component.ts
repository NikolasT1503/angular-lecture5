import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

}
