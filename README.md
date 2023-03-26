#### debugging - add / remove from list
## =================================================
#### cmp-databinding-start OnInit,
####  OnChanges,
####  DoCheck,
####  AfterContentInit,
####  AfterContentChecked,
####  AfterViewInit,
####  AfterViewChecked,
####  OnDestroy,
####  ViewChild,
####  ContentChild
## =================================================
#### more-databinding
#### databinding with a timeout interval
## =================================================
#### directives-start
<div class="container">
  <div class="row">
    <div class="col-xs-12">
      <button class="btn btn-primary" (click)="onlyOdd = !onlyOdd">Only show odd numbers</button>
      <br>
      <br>
      <ul class="list-group">
        <div *ngIf="onlyOdd">
          <li class="list-group-item" 
          *ngFor="let number of oddNumbers" 
          [ngClass]="{odd: number % 2 !== 0}" 
          [ngStyle]="{backgroundColor: number % 2 !== 0 ? 'yellow' : 'transperant'}">{{ number }}</li>
        </div>
        <div *ngIf="!onlyOdd">
          <li class="list-group-item" *ngFor="let number of evennumbers" 
           [ngClass]="{odd: number % 2 !== 0}"
           [ngStyle]="{backgroundColor: number % 2 !== 0 ? 'yellow' : 'transperant'}">{{ number }}</li>
        </div>
        <ng-template [ngIf]="!onlyOdd">
          <p>with ng-template</p>
          <li class="list-group-item" *ngFor="let number of evennumbers" 
           [ngClass]="{odd: number % 2 !== 0}"
           [ngStyle]="{backgroundColor: number % 2 !== 0 ? 'yellow' : 'transperant'}">{{ number }}</li>
        </ng-template>
        <div *appUnless="onlyOdd">
          <p>with custom structural directive</p>
          <li class="list-group-item" *ngFor="let number of evennumbers" 
           [ngClass]="{odd: number % 2 !== 0}"
           [ngStyle]="{backgroundColor: number % 2 !== 0 ? 'yellow' : 'transperant'}">{{ number }}</li>
        </div>
      </ul>
      <p appBasicHighlight>Style me with basic directive!</p>
      <p appBetterHighlight>Style me with better directive!</p>
      <p mouseBetterHighlight>Style me with better directive!</p>
      <p mouseBetterHighlightHostBinding>Style me with HostBinding directive!</p>
      <p mouseBetterHighlightPropertyBinding>Style me with PropertyBinding directive!</p>
      <p mouseBetterHighlightPropertyBinding [defaultColor]="'yellow'" [highlighttColor]="'red'" >Style me with PropertyBinding directive!</p>
      <p [defaultColor]="'yellow'" [mouseHighlightAliasBindingDirective]="'red'" >Style me with PropertyBinding with Alias directive!</p>
      <p defaultColor='yellow' [mouseHighlightAliasBindingDirective]="'red'" >Style me with PropertyBinding with Alias directive! diferent html syntax</p>
      <p>ngSwitch values = (5, 10, 100, '')</p>
      <input type="text" [(ngModel)]="value">
      <div [ngSwitch]="value">
        <p *ngSwitchCase="5">Value is 5</p>
        <p *ngSwitchCase="10">Value is 10</p>
        <p *ngSwitchCase="100">Value is 100</p>
        <p *ngSwitchDefault="">Value is Default</p>
      </div>
    </div>
  </div>
</div>