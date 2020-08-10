import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <p> TEST </p>

  <input type="text" [(ngModel)] = "name">
  <p> VALOR: {{name}}</p>`
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {



@Input () name: number;
@Output () clickAge = new EventEmitter();
  constructor() { }

  ngOnInit(){
    console.log("ON INIT");
  }

  ngOnChanges() {
    console.log("ON CHANGES");
  }

  ngDoCheck(){
    console.log("DO CHECK");
  }

  ngAfterContentInit(){
    console.log("Content Init");
  }

  ngAfterContentChecked(){
    console.log("Content Checked");
  }

  ngAfterViewInit(){
    console.log("AFTER VIEW INIT")
  }

  ngAfterViewChecked(){
    console.log("AFTER VIEW CHECKED")
  }
  
  ngOnDestroy(){
    console.log("Destroy");
  }

  /*onClickSave(){
    this.clickAge.emit('Hiciste click');
  }*/
}
