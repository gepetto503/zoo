import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'add-animal',
  template: `
  <div class="add-animal">
    <h3>Add animal:</h3>
    <label>Species:</label>
    <input #newSpecies><br>
    <label>Enter Name:</label>
    <input #newName><br>
    <label>Enter Diet:</label>
    <input #newDiet><br>
    <label>Enter Location:</label>
    <input #newLocation><br>
    <label>Enter CareTakers:</label>
    <input #newCareTakers><br>
    <label>Enter Sex:</label>
    <input #newSex><br>
    <label>Enter Likes:</label>
    <input #newLikes><br>
    <label>Enter Dislikes:</label>
    <input #newDislikes><br>
    <label>Enter Age:</label>
    <input #newAge><br>
    <button (click)="submitForm(newSpecies.value, newName.value, newDiet.value, newLocation.value, newCareTakers.value, newSex.value, newLikes.value, newDislikes.value, newAge.value)">Add</button>
  </div>
  `
})

export class AddAnimalComponent {
  @Output() addAnimalOutput = new EventEmitter();

  submitForm(species: string, name: string, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string, age: number) {
    var newAnimalToAdd: Animal = new Animal(species, name, diet, location, caretakers, sex, likes, dislikes, age);
    this.addAnimalOutput.emit(newAnimalToAdd);
  }
}
