import { Directive, ElementRef, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgColor]'
})
export class NgColorDirective {

  @Input()

  @Output()

  @HostListener('mouseenter') onMouseEnter(){
    console.log('MOUSE ENTER');
    this.changeColor('red');
  }

  @HostListener('mouseleave') onMouseLeave(){
    console.log('MOUSE LEAVE');
    this.changeColor('yell');
  }

  constructor( private el:ElementRef) { 
    console.log(el);
    el.nativeElement.style.backgroundColor = 'yellow';
  }

  changeColor(color:string){
    this.el.nativeElement.style.backgroundColor = color;
  }

}