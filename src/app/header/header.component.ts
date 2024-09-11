import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() onSelectActionEmiter = new EventEmitter<string|null>();

  onSelectAction(event: Event) {
    const selectElement = event.target as HTMLSelectElement; 
    if (selectElement) {
      this.onSelectActionEmiter.emit(selectElement.value); 
    }
  }
}
