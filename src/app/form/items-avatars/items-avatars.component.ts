import { Component, Input } from '@angular/core';
import { FileOwner } from '../../../models/file.item.model';

@Component({
  selector: 'app-items-avatars',
  standalone: true,
  imports: [],
  templateUrl: './items-avatars.component.html',
  styleUrl: './items-avatars.component.css'
})
export class ItemsAvatarsComponent {
  @Input() ItemsAvatars:FileOwner[]=[]
}
