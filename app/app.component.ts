import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
      <div class="hero">
        <h1>BEER</h1>
      </div>
      <div class="container">
        <h1 id="title">{{currentFocus}}</h1>
        <!--[childKegs]="kegs" sends kegs array from this file to @Input() childKegs-->
        <!--(clickSender="editBeer($event)" takes keg object from @Output() clickSender within beer-list.component.ts and passes it into editBeer method in the class description below.-->
        <keg-list [childKegs]="kegs" (kegToEdit)="editKeg($event)" (kegToSell)="sellPint($event)"></keg-list>
        <div class="flex-mom">
          <!--square brackets is the output in the child file, round brackets is the input-->
          <add-keg (addKegOutput)="addKeg($event)"></add-keg>
          <edit-keg [editKegSelector]="selectedKeg"></edit-keg>
        </div>
     </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Klippkroog Scandinavian TapRoom';
  kegs: Keg[] = [
    new Keg('Forelskaet', 1, 5.2),
    new Keg('Morfar, Farmor', 2, 6),
    new Keg('Ogooglebar IPA', 2, 7)
    ];

  selectedKeg: Keg = this.kegs[0];

  //we need parameters from the add keg component to feed into this method
  addKeg(newKegFromChild: Keg) {
    this.kegs.push(newKegFromChild);
  }

  editKeg(currentKeg) {
    // makes whichever keg the user clicked the button on become stored in the selected keg variable.
    this.selectedKeg = currentKeg;
  }

  sellPint(clickedKeg: Keg) {
    clickedKeg.pintsLeft -= 1;
  }

  fullnessColor(currentKeg) {
    if (currentKeg.pintsLeft <= 10) {
      return "bg-danger";
    }
    if (currentKeg.pintsLeft <= 55) {
      return "bg-warning";
    } else {
      return "bg-info";
    }

  }

}
