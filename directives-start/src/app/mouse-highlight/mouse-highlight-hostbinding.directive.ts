import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[mouseBetterHighlightHostBinding]'
})
export class MouseHighlightHostBindingDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundcolor: string = 'transparent';

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
    }

    @HostListener('mouseenter') mouseover() {
        this.backgroundcolor = 'dodgerblue';
    }

    @HostListener('mouseleave') mouseleave() {
        this.backgroundcolor = 'transparent';
    }
}