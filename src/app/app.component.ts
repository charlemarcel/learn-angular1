import { Component } from "@angular/core";
import { HotelListComponent } from './hotel-list/hotel-list.component';

@Component({
  selector: 'app-root',
   standalone: true,
  imports: [HotelListComponent], // vu que le app.module.ts n'existe plus, cette class doit etre importer explicitement
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'Gestionnaire des hotels';
}
