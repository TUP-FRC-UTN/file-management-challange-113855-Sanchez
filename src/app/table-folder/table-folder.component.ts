import { Component, Input } from '@angular/core';
import { FILE_LIST } from '../../data/file.storage';
import { FileItem, FileType } from '../../models/file.item.model';

@Component({
  selector: 'app-table-folder',
  standalone: true,
  imports: [],
  templateUrl: './table-folder.component.html',
  styleUrl: './table-folder.component.css'
})
export class TableFolderComponent {
  @Input() FilesItems: FileItem[] = [];
  FileType = FileType
}
