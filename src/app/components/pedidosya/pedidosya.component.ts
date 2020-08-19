import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pedidosya',
  templateUrl: './pedidosya.component.html',
  styleUrls: ['./pedidosya.component.css']
})
export class PedidosyaComponent implements OnInit {

  constructor() { }

  @Input () nombre:string;
  @Input () stock:number;
  @Input () precio:number;
  @Input () tipo:string;

  ngOnInit() {
  }

}