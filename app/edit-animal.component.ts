import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="edit-animal">
    <h3>Edit Beer</h3>
    <label>Enter Beer Name:</label>
    <input [(ngModel)]="editAnimalSelector.species"><br>
    <label>Enter Beer Price:</label>
    <input [(ngModel)]="editAnimalSelector.name"><br>
    <label>Enter Alcohol Content:</label>
    <input [(ngModel)]="editAnimalSelector.diet"><br>
    <input [(ngModel)]="editAnimalSelector.location"><br>
    <input [(ngModel)]="editAnimalSelector.caretakers"><br>
    <input [(ngModel)]="editAnimalSelector.sex"><br>
    <input [(ngModel)]="editAnimalSelector.likes"><br>
    <input [(ngModel)]="editAnimalSelector.dislikes"><br>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() editAnimalSelector: Animal;
}
