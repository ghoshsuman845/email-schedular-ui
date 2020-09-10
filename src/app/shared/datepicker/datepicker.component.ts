import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  @Input() emailDetails: any = {};
  @Output() selectedDate = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  submitDate() {

    this.selectedDate.emit(this.emailDetails);
    
  }
}
