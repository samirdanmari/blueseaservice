import { Component } from '@angular/core';
import { Ifreevacant } from './ifreevacant';
@Component({
  selector: 'app-freevacant',
  templateUrl: './freevacant.component.html',
  styleUrls: ['./freevacant.component.scss']
})
export class FreevacantComponent {

  vacant: Ifreevacant[]=[
    {
      "LGA": "Dala",
      "HouseNo": "Gdutse",
      "ImageUrl": "",
      "HouseType": "flat",
      "HouseCondition": "Excellent",
  },
  {
      "LGA": "Gwale",
      "HouseNo": "234",
      "ImageUrl": "",
      "HouseType": "duplex",
      "HouseCondition": "Good",
 
  },
  {
      "LGA": "Nasarawa",
      "HouseNo": "masama12",
      "ImageUrl": "",
      "HouseType": "duplex",
      "HouseCondition": "Excellent",
     
  },
  {
      "LGA": "Fagge",
      "HouseNo": "darma12",
      "ImageUrl": "",
      "HouseType": "flat",
      "HouseCondition": "Good",

  },
  {
      "LGA": "Dala",
      "HouseNo": "maiduwa23",
      "ImageUrl": "",
      "HouseType": "duplex",
      "HouseCondition": "Excellent",
     
  },
  {
    "LGA": "Nassara",
    "HouseNo": "Mudbubawa43",
    "ImageUrl": "",
    "HouseType": "flat",
    "HouseCondition": "Neat",
   
}
]

}
