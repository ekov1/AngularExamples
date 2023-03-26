import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[mouseHighlightAliasBindingDirective]'
})
export class MouseHighlightAliasBindingDirective implements OnInit {
    @Input() defaultColor:string = 'transparent';
    @Input('mouseHighlightAliasBindingDirective') highlighttColor:string = 'dodgerblue';

    @HostBinding('style.backgroundColor') backgroundcolor: string;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        this.backgroundcolor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover() {
        this.backgroundcolor = this.highlighttColor;
    }

    @HostListener('mouseleave') mouseleave() {
        this.backgroundcolor = this.defaultColor;
    }
}