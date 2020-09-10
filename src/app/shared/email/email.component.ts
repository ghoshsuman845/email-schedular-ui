import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() email: any;
  @Output() sentEmail = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  dateChange(email) {
    this.email = email;
    console.log(email);

  }
  send() {
    this.sentEmail.emit(this.email);
  }
}
