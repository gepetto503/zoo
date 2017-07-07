import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class="edit-animal">
    <h3>Edit Animal Info</h3>
    <label>Name:</label>
    <input [(ngModel)]="editAnimalSelector.name"><br>
    <label>Species:</label>
    <input [(ngModel)]="editAnimalSelector.species"><br>
    <label> Diet:</label>
    <input [(ngModel)]="editAnimalSelector.diet"><br>
    <label> Location:</label>
    <input [(ngModel)]="editAnimalSelector.location"><br>
    <label> Number of Caretakers Needed:</label>
    <input [(ngModel)]="editAnimalSelector.careTakers"><br>
    <label> Sex:</label>
    <input [(ngModel)]="editAnimalSelector.sex"><br>
    <label> This animal likes:</label>
    <input [(ngModel)]="editAnimalSelector.likes"><br>
    <label> This animal doesn't like:</label>
    <input [(ngModel)]="editAnimalSelector.dislikes"><br>
    <label> Age:</label>
    <input [(ngModel)]="editAnimalSelector.age"><br>
  </div>
  `
})

export class EditAnimalComponent {
  @Input() editAnimalSelector: Animal;
}
