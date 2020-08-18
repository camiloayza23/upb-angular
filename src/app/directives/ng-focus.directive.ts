import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appNgFocus]'
})
export class NgFocusDirective {
  @Output() appNgFocus = new EventEmitter();

  @HostListener('document:click', ['$event','$event.target']) clickOutside(event,eventTarget){
    console.log('CLCLCLCL',this.el.nativeElement.contains(eventTarget));

    const aux = this.el.nativeElement.contains(eventTarget);
    if(!aux){
      this.appNgFocus.emit('Se hizo click afueras')
    }
    
  }

  constructor(private el:ElementRef) { }

}