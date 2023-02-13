import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PirateDetailsComponent } from './pirate-details.component';

describe('PirateDetailsComponent', () => {
  let component: PirateDetailsComponent;
  let fixture: ComponentFixture<PirateDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PirateDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PirateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
