import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveItem } from './add-remove-item';

describe('AddRemoveItem', () => {
  let component: AddRemoveItem;
  let fixture: ComponentFixture<AddRemoveItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRemoveItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AddRemoveItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
