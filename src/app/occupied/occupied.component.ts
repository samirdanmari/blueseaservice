import { Component } from '@angular/core';
import { Ioccupied } from '../occupied/ioccupied';

@Component({
  selector: 'app-occupied',
  templateUrl: './occupied.component.html',
  styleUrls: ['./occupied.component.scss']
})
export class OccupiedComponent {
  Occupied:any;
  occupied: Ioccupied[]=[
    {
        "LGA": "Munincipal",
        "HouseNo": "sahrifai93",
        "ImageUrl": "",
        "HouseType": "duplex",
        "FullName": "Ahlan usman",
        "ContactNo": "0904256356",
    },
    {
        "LGA": "Ungoggo",
        "HouseNo": "kaiagma193",
        "ImageUrl": "",
        "HouseType": "duplex",
        "FullName": "Mubarak-musa",
        "ContactNo": "0816363775",
   
    },
    {
        "LGA": "Nasarawa",
        "HouseNo": "masama12",
        "ImageUrl": "",
        "HouseType": "duplex",
        "FullName": "aisha abubakar",
        "ContactNo": "0902132445",
       
    },
    {
        "LGA": "Fagge",
        "HouseNo": "darma12",
        "ImageUrl": "",
        "HouseType": "flat",
        "FullName": "Nasir-kunle",
        "ContactNo": "0702132445",
  
    },
    {
        "LGA": "Dala",
        "HouseNo": "maiduwa23",
        "ImageUrl": "",
        "HouseType": "duplex",
        "FullName": "sulamain ibrahim",
        "ContactNo": "081132445",
       
    }
]

}
