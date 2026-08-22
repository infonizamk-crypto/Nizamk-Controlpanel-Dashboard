import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProduct } from './mproduct';

describe('MProduct', () => {
  let component: MProduct;
  let fixture: ComponentFixture<MProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(MProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
