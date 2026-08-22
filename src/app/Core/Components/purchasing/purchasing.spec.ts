import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Purchasing } from './purchasing';

describe('Purchasing', () => {
  let component: Purchasing;
  let fixture: ComponentFixture<Purchasing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Purchasing],
    }).compileComponents();

    fixture = TestBed.createComponent(Purchasing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
