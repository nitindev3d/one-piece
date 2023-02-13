import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrawHatComponent } from './straw-hat.component';

describe('StrawHatComponent', () => {
  let component: StrawHatComponent;
  let fixture: ComponentFixture<StrawHatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrawHatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrawHatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
