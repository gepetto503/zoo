import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { BeerListComponent } from './beer-list.component';
import { AddKegComponent } from './add-keg.component';
import { EditKegComponent } from './edit-keg.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BeerListComponent, AddKegComponent, EditKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
