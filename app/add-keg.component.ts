import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'add-keg',
  template: `
  <h3>Add keg:</h3>
  <label>Enter Burr Name:</label>
  <input #newBeerName><br>
  <label>Enter Alcohol Content:</label>
  <input #newAlcoholContent><br>
  <label>Enter Pint Price:</label>
  <input #newPintPrice><br>
  <button (click)="submitForm(newBeerName.value, newPintPrice.value, newAlcoholContent.value)">Add</button>
  `
})

export class AddKegComponent {
  @Output() addKegOutput = new EventEmitter();

  submitForm(beerName: string, pintPrice: number, alcoholContent: number) {
    var newTaskToAdd: Keg = new Keg(beerName, pintPrice, alcoholContent);
    this.addKegOutput.emit(newTaskToAdd);
  }
}
