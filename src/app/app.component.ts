import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedEmail: any = {};
  selectedEmailIndex = 0;
  title = 'email-schedular';
  emails = [
    { subject: '1 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '2 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '3 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '4 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '5 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '6 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '7 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '8 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
    { subject: '9 Lorem ipsum dolor sit amet.', date: new Date(), desc: '' },
  ];
  constructor() {
    this.selectedEmail = this.emails[0];
  }

  selectedEmailDetails(event, index) {
    this.selectedEmail = event;
    this.selectedEmailIndex = index;
  }
  updatedEmailDetails(val) {
    console.log(val);


  }
}
