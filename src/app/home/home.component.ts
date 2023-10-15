import { Component} from '@angular/core';
import { first } from 'rxjs';
import { Iclient} from '../clients/iclient';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  clients: Iclient[]=[
    {
      "fullName": "Mubarak-musa",
      "houseNo": 193,
      "houseAddress": "Dala",
      "Price": 350000,
      "AmountPaid": 200000,
      "Balance": 150000,
      "Duration": "1year"
  },
  {
    "fullName": "Zainaba Sani",
    "houseNo": 13,
    "houseAddress": "Gwale",
    "Price": 400000,
    "AmountPaid": 400000,
    "Balance": 0,
    "Duration": "1year"
  },
  {
    "fullName": "ABubakar ishaq",
    "houseNo": 433,
    "houseAddress": "Nassarawa",
    "Price": 350000,
    "AmountPaid": 250000,
    "Balance": 50000,
    "Duration": "2year"
  },
  {
    "fullName": "Bashir sani",
    "houseNo": 20123,
    "houseAddress": "MAAUN",
    "Price": 270000,
    "AmountPaid": 270000,
    "Balance": 0,
    "Duration": "1year"
  },
   
  ]
fullname: any;
houseNo: any;
houseAddress: any;
price: any;
amountPaid: any;
balance: any;
duration: any;
}

