import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { TableFolderComponent } from "./table-folder/table-folder.component";
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableFolderComponent,HeaderComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';

  typeAction: string|null= ""

  handleAction(action: string|null) {
    this.typeAction = action; 
  }

  handleNewItem(item:FileItem){
    this.files.push(item)
  }

}
