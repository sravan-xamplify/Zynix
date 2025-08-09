import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const admin: Routes = [
 {path:'advanced-ui',children:[ {
  path: 'accordions',
  loadComponent: () =>
    import('./accordions/accordions.component').then((m) => m.AccordionsComponent),
    title: 'Zynix - Accordions'
},
{
  path: 'carousel',
  loadComponent: () =>
    import('./carousel/carousel.component').then(
      (m) => m.CarouselComponent
    ),
    title: 'Zynix - Carousel'
},
{
  path: 'draggable-cards',
  loadComponent: () =>
    import('./draggable-cards/draggable-cards.component').then(
      (m) => m.DraggableCardsComponent
    ),
    title: 'Zynix - Draggable Cards'
},
{
  path: 'media-player',
  loadComponent: () =>
    import('./media-player/media-player.component').then(
      (m) => m.MediaPlayerComponent
    ),
    title: 'Zynix - Media Player'
},
{
  path: 'modals-closes', 
  loadComponent: () =>
    import('../advancedui/modals-closes/modals-closes.component').then(
      (m) => m.ModalsClosesComponent
    ),    
    title: 'Zynix - Modals Closes'
},
{
  path: 'placeholders',
  loadComponent: () =>
    import('../advancedui/placeholders/placeholders.component').then(
      (m) => m.PlaceholdersComponent
    ),
    title: 'Zynix - Placeholders'
},
{
  path: 'navbar',
  loadComponent: () =>
    import('./navbar/navbar.component').then((m) => m.NavbarComponent),
    title: 'Zynix - Navbar'
},
{
  path: 'offcanvas',
  loadComponent: () =>
    import('./offcanvas/offcanvas.component').then((m) => m.OffcanvasComponent),
    title: 'Zynix - Offcanvas'
},
{
  path: 'ratings',
  loadComponent: () =>
    import('./ratings/ratings.component').then((m) => m.RatingsComponent),
    title: 'Zynix - Ratings'
},
{
  path: 'ribbons',
  loadComponent: () =>
    import('./ribbons/ribbons.component').then((m) => m.RibbonsComponent),
    title: 'Zynix - Ribbons'
},
{
  path: 'scrollspy',
  loadComponent: () =>
    import('./scrollspy/scrollspy.component').then((m) => m.ScrollspyComponent),
    title: 'Zynix - Scrollspy'
},
{
  path: 'sortable-js',
  loadComponent: () =>
    import('./sortable-js/sortable-js.component').then((m) => m.SortableJsComponent),
    title: 'Zynix - Sortable JS'
},
{
  path: 'swiperjs',  
  loadComponent: () =>
    import('./swiperjs/swiperjs.component').then((m) => m.SwiperjsComponent),
    title: 'Zynix - Swiperjs'
},
{
  path: 'tour', 
  loadComponent: () =>
    import('./tour/tour.component').then((m) => m.TourComponent),
    title: 'Zynix - Tour'
}, 
{
  path: 'treeview', 
  loadComponent: () =>
    import('./treeview/treeview.component').then((m) => m.TreeviewComponent),
    title: 'Zynix - treeview'
}, 
]}
]; 
@NgModule({
  imports: [RouterModule.forChild(admin)],
  exports: [RouterModule],
})
export class advanceduiRoutingModule {
  static routes = admin;
}