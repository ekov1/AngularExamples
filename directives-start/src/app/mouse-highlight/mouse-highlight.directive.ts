import { Directive, OnInit, Renderer2, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[mouseBetterHighlight]'
})
export class MouseHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseover(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'dodgerblue');
  }

  @HostListener('mouseleave') mouseleave(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }
}