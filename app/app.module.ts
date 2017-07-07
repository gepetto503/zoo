import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AddAnimalComponent } from './add-animal.component';
import { EditAnimalComponent } from './edit-animal.component';
import { AnimalFilterPipe } from './animalFilter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, AddAnimalComponent, EditAnimalComponent, AnimalFilterPipe ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
