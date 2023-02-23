import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetMoreComponent } from './pet-more.component';

describe('PetMoreComponent', () => {
  let component: PetMoreComponent;
  let fixture: ComponentFixture<PetMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetMoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
