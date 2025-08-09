import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
  {
    path: 'tables',
    children: [
      {
        path: 'tables',
        loadComponent: () =>
          import('./tables/tables.component').then((m) => m.TablesComponent),
          title: 'Zynix - Tables'
      },
      {
        path: 'angular-material-tables',
        loadComponent: () =>
          import(
            './angular-material-tables/angular-material-tables.component'
          ).then((m) => m.AngularMaterialTablesComponent),
          title: 'Zynix - Angular Material Tables'
      },
      {
        path: 'ngx-easy-table',
        loadComponent: () =>
          import('./ngx-easy-table/ngx-easy-table.component').then(
            (m) => m.NgxEasyTableComponent
          ),
          title: 'Zynix - Ngx Easy Table'
      },
      
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class tablesRoutingModule {
  static routes = admin;
}
