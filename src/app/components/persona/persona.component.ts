import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  @Input () name:string;
  @Input () lastname:string;
  @Input () age:number;
  @Input () enable:boolean;
  constructor() { }
  personas = [
    {
      name:"Isabel"

    }
  ]

  ngOnInit() {
  }

}