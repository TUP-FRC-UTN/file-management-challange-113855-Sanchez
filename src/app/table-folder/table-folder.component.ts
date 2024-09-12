import { Component, Input } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { FileItem, FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-table-folder',
  standalone: true,
  imports: [],
  templateUrl: './table-folder.component.html',
  styleUrl: './table-folder.component.css',
})
export class TableFolderComponent {
  @Input() FilesItems: FileItem[] = [];
  @Input() typeAction:string|null=""
  listItemsDelete: string[] = [];
  FileType = FileType;
  addListDelete(id: string) {
    this.listItemsDelete.push(id);
  }
  deleteListDelete(id: string) {
    this.listItemsDelete = this.listItemsDelete.filter((item) => item != id);
  }
  onChecked(id: string, event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.listItemsDelete.push(id);
    } else if (!isChecked) {
      this.listItemsDelete = this.listItemsDelete.filter((item) => item === id);
    }
    console.log(this.listItemsDelete);
  }
  onDeleteItems() {
    this.FilesItems = this.FilesItems.filter(
      (item) => !this.listItemsDelete.some((idItem) => idItem === item.id)
    );
  }
  onValidChecked(id: string) {
    return this.listItemsDelete.some((item) => item === id);
  }
}
