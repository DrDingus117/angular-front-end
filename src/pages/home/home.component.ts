import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { TableComponent } from '../../components/table/table.component';
import { FormFieldComponent } from '../../components/form-field/form-field.component';

@Component({
  selector: 'app-home',   // <-- Change this
  standalone: true,
  imports: [
    CardComponent,
    TableComponent,
    FormFieldComponent
  ],
  templateUrl: './home.template.html',
  styleUrl: './home.styles.css'
})
export class HomePage {}
