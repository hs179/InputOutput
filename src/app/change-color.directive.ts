import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appChangeColor]',
  standalone: true
})
export class ChangeColorDirective implements OnInit {
  @Input() appChangeColor: string = 'black';  // ✔️ match the selector

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.style.color = this.appChangeColor;
  }
}
