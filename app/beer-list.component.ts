import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <div class="beers">
    <div class="beer" *ngFor="let currentKeg of childKegs">
      <div class="name">
        <h3>{{currentKeg.description}}</h3>
      </div>
      <div class="details">
        <ul>
          <li>%{{currentKeg.alcContent}} alcohol content</li>
          <li>{{currentKeg.price}} dollar(s)</li>
          <!--commented out from third li:  [class]="fullnessColor(currentKeg)"-->
          <li>there are {{currentKeg.pintsLeft}} pints left</li>
        </ul>
      </div>
      <div class="buttons">
        <button (click)="sellButtonHasBeenClicked(currentKeg)">Sell the pint!</button>
        <!--when user clicks this button, it runs the method editButtonHasBeenClicked on the keg object that corresponds to iteration of the loop associated with that <li>-->
        <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
      </div>
    </div>
  </div>
  `
})

export class BeerListComponent {
  @Input() childKegs: Keg[]; //this receives data down from the parent
  @Output() kegToEdit = new EventEmitter(); //this pushes the current keg object up to the parent
  @Output() kegToSell = new EventEmitter();

  //tasktoEdit paramater is fed a Keg object argument based on the iteration of the ngFor loop in this component's template
  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.kegToEdit.emit(kegToEdit);
  }

  sellButtonHasBeenClicked(kegToSell: Keg) {
    this.kegToSell.emit(kegToSell);
  }
}
