import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="animal-list">
    <select (change)="onChange($event.target.value)">
      <option value="allAnimals">All Tasks</option>
      <option value="youngAnimals">Animals younger than 2</option>
      <option value="matureAnimals" selected="selected">Animals 2 and older</option>
    </select>
    <div class="animal" *ngFor="let currentAnimal of childAnimals | animalFilter:filterByAge">
      <div class="name">
        <h3>{{currentAnimal.name}}</h3>
      </div>
      <div class="details">
        <ul>
          <li>Species: {{currentAnimal.species}}</li>
          <li>Diet: {{currentAnimal.diet}}</li>
          <li>Location inside Zoo: {{currentAnimal.location}}</li>
          <li>Number of Care Takers Needed: {{currentAnimal.careTakers}}</li>
          <li>Sex: {{currentAnimal.sex}}</li>
          <li>This animal likes: {{currentAnimal.likes}}</li>
          <li>This animal fucking hates: {{currentAnimal.dislikes}}</li>
          <li>Age: {{currentAnimal.age}}</li>

        </ul>
      </div>
      <div class="buttons">
        <!--when user clicks this button, it runs the method editButtonHasBeenClicked on the animal object that corresponds to iteration of the loop associated with that <li>-->
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
      </div>
    </div>
  </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimals: Animal[]; //this receives data down from the parent
  @Output() animalToEdit = new EventEmitter(); //this pushes the current animal object up to the parent
  // @Output() animalToSell = new EventEmitter();

  filterByAge: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  //tasktoEdit paramater is fed a Animal object argument based on the iteration of the ngFor loop in this component's template
  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.animalToEdit.emit(animalToEdit);
  }


}
