import { TestBed, async } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, ContactComponent
      ],
      imports: [
        FormsModule,
        ContactComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'address-book'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('address-book');
  });
  
  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to address-book!');
  });

  it('createContact should add contact to contacts', async(() => {
    const contact = {
      name: 'John Doe',
      email: 'john@craftacademy.se',
      company: 'Craft Academy',
      role: 'Tester',
      twitter: '@tester',
      location: 'Stockholm',
      notes: 'There are no notes on this guy'
    }; // We create a object we can use to test
  
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
  
    app.contact = contact;  // here we are passing the contact variable we created into the app.contact variable
    app.createNewContact();  // then we run the createNewContact function which will push the contact object into contacts array
  
    expect(app.contacts[app.contacts.length -1]).toEqual(contact);  // here we expect that the last object of the contacts array is the contact object
  }));
});