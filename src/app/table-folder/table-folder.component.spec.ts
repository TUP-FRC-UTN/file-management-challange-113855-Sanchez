import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFolderComponent } from './table-folder.component';

describe('TableFolderComponent', () => {
  let component: TableFolderComponent;
  let fixture: ComponentFixture<TableFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableFolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
