import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MaterialModuleModule } from '../../../../material-module/material-module.module';
import { SharedModule } from '../../../../shared/shared.module';
import { FlatpickrDefaults, FlatpickrModule } from 'angularx-flatpickr';
import { SpkFlatpickrComponent } from '../../../../@spk/spk-flatpickr/spk-flatpickr.component';

@Component({
    selector: 'app-datetimepicker',
    imports: [SharedModule, MaterialModuleModule, FormsModule, ReactiveFormsModule, MatDatepickerModule, FlatpickrModule, SpkFlatpickrComponent],
    providers: [FlatpickrDefaults],
    templateUrl: './datetimepicker.component.html',
    styleUrl: './datetimepicker.component.scss'
})
export class DatetimepickerComponent {
// timepicker
basicDemoValue = '2024-01-01';
modelValueAsDate: Date = new Date();
dateTimeValue: Date = new Date();
multiDates: Date[] = [new Date(), (new Date() as any)['fp_incr'](10)];
rangeValue: { from: Date; to: Date } = {
  from: new Date(),
  to: (new Date() as any)['fp_incr'](10)
};
inlineDatePicker: Date = new Date();
timePicker: Date | null = null;
timePicker1: Date | null = null;
timePicker2: Date | null = null;
timePicker3: Date | null = null;
timePicker4: Date | null = null;


min='16:00 pm';
max='22:00 pm';
min1='04:00';
max1='10:00';
basicDemoValue1= '10:00';
}