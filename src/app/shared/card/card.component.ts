import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() email: any;
  @Input() selected: boolean;
  @Output() emailDetailEmitter = new EventEmitter<any>();

  ngOnInit(): void {
  }
  selectedCard(): void {
    this.emailDetailEmitter.emit(this.email);
  }
}
