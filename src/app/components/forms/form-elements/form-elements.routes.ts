import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms/form-elements',children:[ {
  path: 'inputs',
  loadComponent: () =>
    import('./inputs/inputs.component').then((m) => m.InputsComponent),
    title: 'Zynix - Inputs'
},
{
  path: 'checks-radios',
  loadComponent: () =>
    import('./checksradios/checksradios.component').then(
      (m) => m.ChecksradiosComponent
    ),
    title: 'Zynix - Checks-radios'
},
{
  path: 'inputgroup',
  loadComponent: () =>
    import('./inputgroup/inputgroup.component').then(
      (m) => m.InputgroupComponent
    ),
    title: 'Zynix - Input group'
},
{
    path: 'formselect',
    loadComponent: () =>
      import('./formselect/formselect.component').then(
        (m) => m.FormselectComponent
      ),
      title: 'Zynix - Formselect'
  },
  {
    path: 'file-uploads',
    loadComponent: () =>
      import('./fileuploads/fileuploads.component').then(
        (m) => m.FileuploadsComponent
      ),
      title: 'Zynix - File uploads'
  },
  
  {
    path: 'date&timepicker',
    loadComponent: () =>
      import('./datetimepicker/datetimepicker.component').then(
        (m) => m.DatetimepickerComponent
      ),
      title: 'Zynix - Date & timepicker'
  },
  {
    path: 'color-pickers',
    loadComponent: () =>
      import('./colorpicker/colorpicker.component').then(
        (m) => m.ColorpickerComponent
      ),
      title: 'Zynix - Color Pickers'
  },
  {
    path: 'inputs',
    loadComponent: () =>
      import('./inputs/inputs.component').then(
        (m) => m.InputsComponent
      ),
      title: 'Zynix - Inputs'
  },
  {
    path: 'range-slider',
    loadComponent: () =>
      import('./rangeslider/rangeslider.component').then(
        (m) => m.RangesliderComponent
      ),
      title: 'Zynix - Range Slider'
  },
  {
    path: 'inputmask',
    loadComponent: () =>
      import('./input-mask/input-mask.component').then(
        (m) => m.InputMaskComponent
      ),
      title: 'Zynix - Range Slider'
  },
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formelementsRoutingModule {
  static routes = admin;
}