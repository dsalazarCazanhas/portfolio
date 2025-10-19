import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fakefacebook } from './fakefacebook';

describe('Fakefacebook', () => {
  let component: Fakefacebook;
  let fixture: ComponentFixture<Fakefacebook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fakefacebook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fakefacebook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
