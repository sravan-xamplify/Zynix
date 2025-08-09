import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'pages',children:[ {
  path: 'landing-page',
  loadComponent: () => 
    import('./landing-page/landing-page.component').then((m) => m.LandingPageComponent),
    title: 'Zydash - Landing'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class landingRoutingModule {
  static routes = admin;
}  