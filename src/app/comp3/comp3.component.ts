import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
  ngIfcondition: boolean = true;
  items = ['Toyota', 'Mercedes', 'Bmw', 'Audi', 'Volkswagen'];
  
  constructor() { }

  toggleCondition(){
    this.ngIfcondition=!this.ngIfcondition;
  }

}
