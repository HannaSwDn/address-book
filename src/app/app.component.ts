import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  contact: any;

  constructor() {
    this.contact = {
      name: ``,
      email: ``,
      company: ``,
      role: ``,
      twitter: ``,
      location: ``,
      notes: ``
    }
  }

  title = 'address-book';

  createNewContact() {
    console.log('Someone clicked me!!!')
  }
}
