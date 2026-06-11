import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Playcard } from './playcard';

describe('Playcard', () => {
  let component: Playcard;
  let fixture: ComponentFixture<Playcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Playcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
