import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Death } from './death';

describe('Death', () => {
  let component: Death;
  let fixture: ComponentFixture<Death>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Death]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Death);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
