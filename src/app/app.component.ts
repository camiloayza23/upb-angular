import { Component, OnInit, HostListener } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'curso-angular';

  sw = true;
  numbers = [1,2,3,4,5,6,7,8,9,10];
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

  @HostListener('window:resize',['$event']) onResize(event){
    console.log('WINDOWS RESIZE ',event.target.innerWidth);
  }

  auxNumber : number = 2;
  auxExpo : number = 3;

  ngOnInit(){


    //Convertir datos a observables
    /*const array = from([1,2,3,4,5,6]);

    array.subscribe(s => console.log('item', s));

    //Convertir eventos en observables
    const aux = fromEvent(document, 'mousemove');

    aux.subscribe((s:any) => console.log('event: ', s.clientX + ', ' +s.clientY));*/

    console.log('PURA '+this.suma(2,2));
    console.log('IMPURA '+this.impura(2,2))
  }
  saveClickChild(event){
    console.log('EVENT CHILD: ', event);
  }

  saveJInfo(event){
    console.log('EVENT JSON: ', event);
  }
  
  suma(a:number,b:number){
    return a+b;
    // Va a tener la misma salida siempre
    //FUNCION PURA
  }

  impura(a:number,b:number){
    return a+b + Math.random();
    // Va a tener la misma salida siempre
    //FUNCION PURA
  }

}
