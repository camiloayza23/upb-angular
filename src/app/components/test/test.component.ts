import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <p> TEST </p>

  <p> VALOR: {{lastName}}</p>
  <p> VALOR: {{name}}</p>`
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

intermediaria:string;

@Input () lastName:string;
@Input () 
get name(){
  return this.intermediaria;
} 
set name(name:string){
  this.intermediaria = 'aaaa '+name;
}
@Output () clickAge = new EventEmitter();
  constructor() { }

  ngOnInit(){
    console.log("ON INIT", this.name);
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes && changes.lastName && changes.lastName.currentValue){
    console.log("ON CHANGES",changes.lastName.currentValue);
      const aux = 'AAAAA'+ changes.lastName.currentValue;
      this.lastName = aux;
    }
  }

  ngDoCheck(){
    //console.log("DO CHECK");
  }

  ngAfterContentInit(){
    //console.log("Content Init");
  }

  ngAfterContentChecked(){
    //console.log("Content Checked");
  }

  ngAfterViewInit(){
    //console.log("AFTER VIEW INIT")
  }

  ngAfterViewChecked(){
    //console.log("AFTER VIEW CHECKED")
  }
  
  ngOnDestroy(){
    //console.log("Destroy");
  }

  /*onClickSave(){
    this.clickAge.emit('Hiciste click');
  }*/
}
