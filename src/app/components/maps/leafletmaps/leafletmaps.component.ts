import { Component } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';
import { SpkLeafletMapComponent } from '../../../@spk/spk-leaflet-map/spk-leaflet-map.component';
@Component({
    selector: 'app-leafletmaps',
    imports: [SharedModule, HttpClientModule, SpkLeafletMapComponent],
    templateUrl: './leafletmaps.component.html',
    styleUrl: './leafletmaps.component.scss'
})
export class LeafletmapsComponent {

}
