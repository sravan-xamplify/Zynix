import { Routes } from '@angular/router';
import { dashboardRoutingModule } from '../../components/dashboards/dashboard.routes';
import { salesRoutingModule } from '../../components/dashboards/sales/salesdashboard.routes';
import { appsRoutingModule } from '../../components/apps/apps.routes';
import { pagesRoutingModule } from '../../components/pages/pages.routes';
import { blogRoutingModule } from '../../components/pages/blog/blog.routes';
import { mailRoutingModule } from '../../components/pages/email/email.routes';
import { invoiceRoutingModule } from '../../components/pages/invoice/invoice.routes';
import { formsRoutingModule } from '../../components/forms/forms.routes';
import { formelementsRoutingModule } from '../../components/forms/form-elements/form-elements.routes';
import { uielementsRoutingModule } from '../../components/uielements/uielements.routes';
import { advanceduiRoutingModule } from '../../components/advancedui/advancedui.routes';
import { utilitiesRoutingModule } from '../../components/utilities/utilities.routes';
import { widgetsRoutingModule } from '../../components/widgets/widgets.routes';
import { mapsRoutingModule } from '../../components/maps/maps.routes';
import { iconsRoutingModule } from '../../components/icons/icons.routes';
import { chartsRoutingModule } from '../../components/charts/charts.routes';
import { apexchartsRoutingModule } from '../../components/charts/apexcharts/apex.routes';
import { tablesRoutingModule } from '../../components/tables/tables.routes';

export const content: Routes = [
  {
    path: '',
    children: [
      ...dashboardRoutingModule.routes,
      ...salesRoutingModule.routes,
      ...appsRoutingModule.routes,
      ...pagesRoutingModule.routes,
      ...blogRoutingModule.routes,
      ...mailRoutingModule.routes,
      ...invoiceRoutingModule.routes,
      ...formsRoutingModule.routes,
      ...formelementsRoutingModule.routes,
      ...uielementsRoutingModule.routes,
      ...advanceduiRoutingModule.routes,
      ...utilitiesRoutingModule.routes,
      ...widgetsRoutingModule.routes,
      ...mapsRoutingModule.routes,
      ...iconsRoutingModule.routes,
      ...chartsRoutingModule.routes,
      ...apexchartsRoutingModule.routes,
      ...tablesRoutingModule.routes
    ],
  },
];
