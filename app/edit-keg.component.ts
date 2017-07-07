import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
  <h3>Edit Beer</h3>
  <label>Enter Beer Name:</label>
  <input [(ngModel)]="editKegSelector.description"><br>
  <label>Enter Beer Price:</label>
  <input [(ngModel)]="editKegSelector.price"><br>
  <label>Enter Alcohol Content:</label>
  <input [(ngModel)]="editKegSelector.alcContent"><br>
  `
})

export class EditKegComponent {
  @Input() editKegSelector: Keg;
}
