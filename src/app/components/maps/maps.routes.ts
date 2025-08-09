import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'maps',
 children:[ {
  path: 'leafletmaps',
  loadComponent: () =>
    import('./leafletmaps/leafletmaps.component').then((m) => m.LeafletmapsComponent),
    title: 'Zynix - Leaflet Map'
},
{
  path: 'google-map',
  loadComponent: () =>
    import('./google-map/google-map.component').then((m) => m.GoogleMapComponent),
    title: 'Zynix - Google Map'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class mapsRoutingModule {
  static routes = admin;
}