import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  sw = true;
  persons = [
    {
      name:"Isabel",
      lastname:"Mercado",
      age:19,
      enable:true
    },
    {
      name:"Adriana",
      lastname:"Leyton",
      age:19,
      enable:false
    },
    {
      name:"Carla",
      lastname:"Cespedes",
      age:29,
      enable:true
    },
    {
      name:"Micaela",
      lastname:"Marin",
      age:22,
      enable:false
    }
  ]

  ngOnInit(){


    //Convertir datos a observables
    /*const array = from([1,2,3,4,5,6]);

    array.subscribe(s => console.log('item', s));

    //Convertir eventos en observables
    const aux = fromEvent(document, 'mousemove');

    aux.subscribe((s:any) => console.log('event: ', s.clientX + ', ' +s.clientY));*/
  }
  saveClickChild(event){
    console.log('EVENT CHILD: ', event);
  }

  saveJInfo(event){
    console.log('EVENT JSON: ', event);
  }
  

}
