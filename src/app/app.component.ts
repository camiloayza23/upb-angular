import { Component, OnInit, HostListener, DoCheck } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, DoCheck{
  voter:boolean = false;
  i:number = 0;
  pedidos = [
    {nombre: "khao soi ", stock:1, precio: 20, tipo: "internacional"},
    {nombre: "sajta", stock: 2, precio: 42, tipo: "nacional"},
    {nombre: "semla", stock: 0, precio: 52, tipo: "internacional"},
    {nombre: "silpancho", stock: 45, precio: 5, tipo: "nacional"},
    {nombre: "pulao", stock: 20, precio: 41, tipo: "internacional"},
    {nombre: "saice", stock: 1, precio: 7, tipo: "nacional"},
    {nombre: "poutine", stock: 4, precio: 10, tipo: "internacional"},
    {nombre: "chicharron", stock: 0, precio: 4, tipo: "nacional"},
    {nombre: "fricase", stock: 33, precio: 47, tipo: "nacional"},
    {nombre: "sushi", stock: 75, precio: 5, tipo: "internacional"}
  ]
  


  ngOnInit(){

  }

  ngDoCheck(){

  }
}
