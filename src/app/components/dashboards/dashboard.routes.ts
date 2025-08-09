import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'dashboards',children:[ {
  path: 'crm',
  loadComponent: () =>
    import('./crm/crm.component').then((m) => m.CrmComponent),
    title: 'Zynix - Crm'
},
{
  path: 'analytics',
  loadComponent: () =>
    import('./analytics/analytics.component').then(
      (m) => m.AnalyticsComponent
    ),
    title: 'Zynix - Analytics'
},
{
  path: 'ecommerce',
  loadComponent: () =>
    import('./ecommerce/ecommerce.component').then(
      (m) => m.EcommerceComponent
    ),
    title: 'Zynix - Ecommerce'
},
{
  path: 'hrm',
  loadComponent: () =>
    import('./hrm/hrm.component').then((m) => m.HrmComponent),
    title: 'Zynix - HRM'
},
{
  path: 'nft',
  loadComponent: () =>
    import('./nft/nft.component').then((m) => m.NftComponent),
    title: 'Zynix - NFT'
},
{
  path: 'crypto',
  loadComponent: () =>
    import('./crypto/crypto.component').then((m) => m.CryptoComponent),
    title: 'Zynix - Crypto'
},
{
  path: 'jobs',
  loadComponent: () =>
    import('./jobs/jobs.component').then((m) => m.JobsComponent),
    title: 'Zynix - Jobs'
},
{
  path: 'projects',
  loadComponent: () =>
    import('./projects/projects.component').then((m) => m.ProjectsComponent),
    title: 'Zynix - Projects'
},
{
  path: 'courses',
  loadComponent: () =>
    import('./courses/courses.component').then((m) => m.CoursesComponent),
    title: 'Zynix - Courses'
},
{
  path: 'stocks',
  loadComponent: () =>
    import('./stocks/stocks.component').then((m) => m.StocksComponent),
    title: 'Zynix - Stocks'
},
{
  path: 'medical',
  loadComponent: () =>
    import('./medical/medical.component').then((m) => m.MedicalComponent),
    title: 'Zynix - Medical'
},
{
  path: 'pos-system',
  loadComponent: () =>
    import('./pos-system/pos-system.component').then((m) => m.PosSystemComponent),
    title: 'Zynix - Pos System'
},
{
  path: 'podcast',
  loadComponent: () =>
    import('./podcast/podcast.component').then((m) => m.PodcastComponent),
    title: 'Zynix - Podcast'
},
{
  path: 'school',
  loadComponent: () =>
    import('./school/school.component').then((m) => m.SchoolComponent),
    title: 'Zynix - School'
},
{
  path: 'social-media',
  loadComponent: () =>
    import('./social-media/social-media.component').then((m) => m.SocialMediaComponent),
    title: 'Zynix - Social Media'
},
]}
];
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class dashboardRoutingModule {  
  static routes = admin;
}