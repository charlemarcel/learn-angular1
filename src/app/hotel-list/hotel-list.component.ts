import { CommonModule } from "@angular/common";
import { Component, NgModule, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms"; //formsModule permet d'utiliser ngModel pour des formes comme une barre de recherche,filtre etc.
import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";

registerLocaleData(localeFr, 'fr');
import { IHotel } from "./hotel"; //ici, on importe l'interface IHotel du fichier hotel.ts
import { ReplaceComma } from "../shared/pipes/replace-comma.pipe";

@Component({
      selector: 'app-hotel-list',
      standalone: true,
      imports: [CommonModule, FormsModule, ReplaceComma, NgModule ],

      templateUrl: './hotel-list.component.html',
      styleUrls: ['./hotel-list.component.css'] //import du fichier externe css du composant
      
})


export class HotelListComponent implements OnInit {
      public title = 'Liste hotels'; // title sera utilisé dans hotel-list.componrnt .html pour l'interpolation


      public hotels: IHotel[] = [ //cette propriété concerne la liste des hotels
            {
                  "hotelId": 1,
                  "hotelName": "Buea sweet life",
                  "description": "Belle vue au bord de la mer",
                  "price": 230.5,
                  "alt": "hotel Buea",
                  "imageUrl": "assets/img/hotel-room.jpg",
                  "rating": 3.5
            },
            {
                  "hotelId": 2,
                  "hotelName": "Marakech",
                  "description": "Profitez de la vue sur les montagnes",
                  "price": 145.5,
                  "alt": "hotel Marakech",
                  "imageUrl": "assets/img/the-interior.jpg",
                  "rating": 5
            },
            {
                  "hotelId": 3,
                  "hotelName": "Abudja new look palace",
                  "description": "Séjour complet avec service de voitures",
                  "price": 120.12,
                  "alt": "hotel Abudja",
                  "imageUrl": "assets/img/indoors.jpg",
                  "rating": 4
            },
            {
                  "hotelId": 4,
                  "hotelName": "Cape town city",
                  "description": "Magnifique cadre pour votre séjour",
                  "price": 135.12,
                  "alt": "hotel Cape Town",
                  "imageUrl": "assets/img/window.jpg",
                  "rating": 2.5
            }

      ];

      //cette propriété ci-dessous et la methode permettront de gerer L'etat d'affichage de notre badge

      public showBadge: boolean = true;

      private _hotelFilter = 'mot';

      public filteredHotels: IHotel[] = [];

      ngOnInit() {
            this.filteredHotels = this.hotels;
            this.hotelFilter= 'mot';
      }

      public toogleIsNewBadge(): void {
            this.showBadge = !this.showBadge;
      }

      public get hotelFilter(): string {
            return this._hotelFilter;
      }

      public set hotelFilter(filter: string) {
            this._hotelFilter = filter;

            this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
      }
      private filterHotels(criteria: string): IHotel[] {
            criteria = criteria.toLocaleLowerCase();

            const res = this.hotels.filter(
                  (hotel: IHotel) => hotel.hotelName.toLocaleUpperCase().indexOf(criteria) !=-1);
            return res;
      }
}
