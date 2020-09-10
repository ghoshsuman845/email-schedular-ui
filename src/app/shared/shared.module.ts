import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms';

const sharedComponent = [CardComponent, SidbarComponent, DatepickerComponent, EmailComponent];
@NgModule({
  declarations: [...sharedComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [...sharedComponent],
})
export class SharedModule { }
