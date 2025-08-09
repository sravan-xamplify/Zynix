import { Component } from '@angular/core';

import flatpickr from 'flatpickr';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';
import { SpkNgSelectComponent } from '../../../../@spk/spk-ng-select/spk-ng-select.component';

@Component({
    selector: 'app-create-invoice',
    imports: [SharedModule, FlatpickrModule, FormsModule, ReactiveFormsModule, NgSelectModule, SpkNgSelectComponent, NgbModule, SpkFlatpickrComponent],
    providers: [FlatpickrDefaults],
    templateUrl: './create-invoice.component.html',
    styleUrl: './create-invoice.component.scss'
})
export class CreateInvoiceComponent {

  simpleItems = [
    'USD - (United States Dollar)',
    'BHD - (Bahraini Dinar)',
    'KWD - (Kuwaiti Dinar)',
    'CHF - (Swiss Franc)',
  ];

  handleSelectChange(value: any | any[]) {
  }
  ngOnInit() {
  
  }

  ngAfterViewInit() {
    const plus: any = document.querySelectorAll('.plus');
    const minus: any = document.querySelectorAll('.minus');
    function perfectChart() {
      plus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          parentDiv.children[0].children[1].value++;
        });
      });
      minus.forEach((element: any) => {
        let parentDiv = element.parentElement.parentElement;
        element.addEventListener('click', () => {
          if (parentDiv.children[0].children[1].value > 0) {
            parentDiv.children[0].children[1].value--;
          }
        });
      });
    }
    perfectChart();
  }
}
