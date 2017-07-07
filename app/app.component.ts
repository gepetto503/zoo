import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
      <div class="hero">
      </div>
      <div class="container">
        <!--[childAnimals]="animals" sends animals array from this file to @Input() childAnimals-->
        <!--(clickSender="editBeer($event)" takes animal object from @Output() clickSender within beer-list.component.ts and passes it into editBeer method in the class description below.-->
        <animal-list [childAnimals]="animals" (animalToEdit)="editAnimal($event)">
        </animal-list>
        <div class="flex-mom">
          <!--square brackets is the output in the child file, round brackets is the input-->
          <edit-animal [editAnimalSelector]="selectedAnimal">
          </edit-animal>
          <add-animal (addAnimalOutput)="addAnimal($event)">
          </add-animal>
        </div>
     </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 'Carnivore', 'Northern Trail', 5, 'Female', 'Cool Shade', 'Loud Noises', 1),
    new Animal('Hound Dog', 'Bong The Dog', 'Carnivore', 'you know, around', 2, 'Male', 'Cool Shades', 'Cops', 4),
    ];

  selectedAnimal: Animal = this.animals[0];

  //we need parameters from the add animal component to feed into this method
  addAnimal(newAnimalFromChild: Animal) {
    this.animals.push(newAnimalFromChild);
  }

  editAnimal(currentAnimal) {
    // makes whichever animal the user clicked the button on become stored in the selected animal variable.
    this.selectedAnimal = currentAnimal;
  }


}
