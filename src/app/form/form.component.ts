import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileType } from '../../models/file.item.model';
import { ItemsAvatarsComponent } from './items-avatars/items-avatars.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ItemsAvatarsComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  @Output() onNewItem = new EventEmitter<FileItem>();
  FileType = FileType;
  oFileIten: FileItem = {
    id: '',
    name: '',
    creation: new Date(),
    owners: [],
    type: FileType.FILE,
    parentId: undefined,
  };
  sendForm(form: NgForm) {
    if (form.valid) {
      this.oFileIten.name = form.value.name;
      this.oFileIten.creation = form.value.creation;
      this.onNewItem.emit(this.oFileIten);
      console.log(form.value)

      if (form.value.type) {
        form.value.type === 'FILE'
          ? (this.oFileIten.type = FileType.FILE)
          : (this.oFileIten.type = FileType.FOLDER);
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
