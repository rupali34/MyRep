import { Component, OnInit, Input} from '@angular/core';
import { Test } from '../test';

@Component({
  selector: 'app-text-detail',
  templateUrl: './text-detail.component.html',
  styleUrls: ['./text-detail.component.css']
})
export class TextDetailComponent implements OnInit {

  constructor() { }
  @Input() test: Test;
  ngOnInit() {
  }

}
