import { Component, OnInit } from '@angular/core';
import { Test } from '../test';
import { TEST } from '../mock-test';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  test: Test = {
    id: 1,
    name: 'HI'
  };
  constructor() { }
  
  ngOnInit() {
    
  }
   test2 = TEST;
   selectedHero: Test;

onSelect(test: Test): void {
  this.selectedHero = test;
}
}
