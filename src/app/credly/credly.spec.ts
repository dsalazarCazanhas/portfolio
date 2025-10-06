import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Credly } from './credly';

describe('Credly', () => {
  let component: Credly;
  let fixture: ComponentFixture<Credly>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Credly]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Credly);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
