import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ihouses } from './ihouse';

@Component({
  selector: 'app-addhouse',
  templateUrl: './addhouse.component.html',
  styleUrls: ['./addhouse.component.scss']
})
export class AddhouseComponent {
  @Input() addhouse: Ihouses | null = null;
  @Output() edit = new EventEmitter<Ihouses>()

}
