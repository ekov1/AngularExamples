import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { MouseHighlightDirective } from './mouse-highlight/mouse-highlight.directive';
import { MouseHighlightHostBindingDirective } from './mouse-highlight/mouse-highlight-hostbinding.directive';
import { MouseHighlightpropertyBindingDirective } from './mouse-highlight/mouse-highlight-propertybinding.directive';
import { MouseHighlightAliasBindingDirective } from './mouse-highlight/mouse-highlight-aliasbinding.directive';
import { UnlessDirective } from './custom-structural-directive/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    MouseHighlightDirective,
    MouseHighlightHostBindingDirective,
    MouseHighlightpropertyBindingDirective,
    MouseHighlightAliasBindingDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }