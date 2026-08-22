import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreOperation } from './store-operation';

describe('StoreOperation', () => {
  let component: StoreOperation;
  let fixture: ComponentFixture<StoreOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreOperation],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreOperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
