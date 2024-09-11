import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAvatarsComponent } from './items-avatars.component';

describe('ItemsAvatarsComponent', () => {
  let component: ItemsAvatarsComponent;
  let fixture: ComponentFixture<ItemsAvatarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemsAvatarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsAvatarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
