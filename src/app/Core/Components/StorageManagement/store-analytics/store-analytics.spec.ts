import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAnalytics } from './store-analytics';

describe('StoreAnalytics', () => {
  let component: StoreAnalytics;
  let fixture: ComponentFixture<StoreAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreAnalytics],
    }).compileComponents();

    fixture = TestBed.createComponent(StoreAnalytics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
