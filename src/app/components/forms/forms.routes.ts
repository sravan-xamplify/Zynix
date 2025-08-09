import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'forms',children:[ 
  {
    path: 'form-advanced',
    loadComponent: () =>
      import('./form-advanced/form-advanced.component').then((m) => m.FormAdvancedComponent),
      title: 'Zynix - Form Advanced'
  },
  {
  path: 'form-layouts',
  loadComponent: () =>
    import('./form-layouts/form-layouts.component').then((m) => m.FormLayoutsComponent),
    title: 'Zynix - Form Layouts'
},
{
  path: 'form-editor',
  loadComponent: () =>
    import('./form-editor/form-editor.component').then((m) => m.FormEditorComponent),
},
{
  path: 'form-wizards',
  loadComponent: () =>
    import('./form-wizards/form-wizards.component').then((m) => m.FormWizardsComponent),
},
{
  path: 'floating-labels',
  loadComponent: () =>
    import('./floating-labels/floating-labels.component').then((m) => m.FloatingLabelsComponent),
    title: 'Zynix - Floating Labels'
},
{
  path: 'validation',
  loadComponent: () =>
    import('./validation/validation.component').then(
      (m) => m.ValidationComponent
    ),
    title: 'Zynix - Validation'
},
{
  path: 'select2',
  loadComponent: () =>
    import('./select2/select2.component').then(
      (m) => m.Select2Component
    ),
    title: 'Zynix - Select2'
},

]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class formsRoutingModule {
  static routes = admin;
}