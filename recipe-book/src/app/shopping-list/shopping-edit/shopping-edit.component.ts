import { Component, ElementRef, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @Output() ingeredientAdded = new EventEmitter<{ name: string, amount: number }>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem() {
    const ingedientName = this.nameInputRef.nativeElement.value;
    const ingedientAmount = this.amountInputRef.nativeElement.value;
    const newIngerdient = new Ingredient(ingedientName, ingedientAmount);
    this.ingeredientAdded.emit(newIngerdient);
  }
}
