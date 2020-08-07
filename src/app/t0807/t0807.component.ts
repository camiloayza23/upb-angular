import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-t0807',
  templateUrl: './t0807.component.html',
  styleUrls: ['./t0807.component.css']
})
export class T0807Component implements OnInit {
  @Input () name: string;
  @Input () age: number;
  @Input () description: string;
  @Output () clickDes = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onClickSave(){
    this.clickDes.emit({
      name: this.name,
      age: this.age,
      description: this.description
    });
  }

}