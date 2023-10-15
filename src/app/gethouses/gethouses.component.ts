import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ihouses } from '../addhouse/ihouse';

@Component({
  selector: 'app-gethouses',
  templateUrl: './gethouses.component.html',
  styleUrls: ['./gethouses.component.scss'],
})
export class GethousesComponent {
    house: Ihouses[]=[
            {
                "LGA": "Munincipal",
                "HouseNo": "sahrifai93",
                "ImageUrl": "",
                "HouseType": "duplex",
                "Sell_rent": false,
                "Price": 50000,
                "FullName": "Ahlan usman",
                "ContactNo": "0902132445",
                "ContactAddress": "yamadawa,190",
                "NextOfKin": "sunusi",
                "HouseCondition": "good",
                "AskingPrice": 70000
            },
            {
                "LGA": "Ungoggo",
                "HouseNo": "kaiagma193",
                "ImageUrl": "",
                "HouseType": "duplex",
                "Sell_rent": false,
                "Price": 350000,
                "FullName": "Mubarak-musa",
                "ContactNo": "0902132445",
                "ContactAddress": "gwale,190",
                "NextOfKin": "Musbahu",
                "HouseCondition": "Neat",
                "AskingPrice": 40000
            },
            {
                "LGA": "Fagge",
                "HouseNo": "darma12",
                "ImageUrl": "",
                "HouseType": "flat",
                "Sell_rent": false,
                "Price": 250000,
                "FullName": "kamilu bashir",
                "ContactNo": "0902132445",
                "ContactAddress": "fagge34",
                "NextOfKin": "Isa_musa",
                "HouseCondition": "Excellent",
                "AskingPrice": 600000
            },
            {
                "LGA": "Fagge",
                "HouseNo": "darma12",
                "ImageUrl": "",
                "HouseType": "flat",
                "Sell_rent": false,
                "Price": 400000,
                "FullName": "Nasir-kunle",
                "ContactNo": "0902132445",
                "ContactAddress": "fagge34",
                "NextOfKin": "Isa_musa",
                "HouseCondition": "Good",
                "AskingPrice": 320000
            },
            {
                "LGA": "Dala",
                "HouseNo": "maiduwa23",
                "ImageUrl": "",
                "HouseType": "duplex",
                "Sell_rent": false,
                "Price": 111000,
                "FullName": "isa ibrahim",
                "ContactNo": "0922132445",
                "ContactAddress": "Dala34",
                "NextOfKin": "khalil ibrahim",
                "HouseCondition": "Excellent",
                "AskingPrice": 111000
            }
    ]
}