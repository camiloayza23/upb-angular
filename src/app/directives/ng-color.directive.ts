import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input('appNgColor') color:string;
  @Input() secondcolor:string;

  @Output()

  @HostListener('mouseenter') onMouseEnter(){
    console.log('MOUSE ENTER');
    this.changeColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('MOUSE LEAVE');
    this.changeColor(this.secondcolor);
  }

  constructor( private el:ElementRef) { 
    console.log(el);
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  changeColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}