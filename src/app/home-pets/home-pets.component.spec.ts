import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePetsComponent } from './home-pets.component';

describe('HomePetsComponent', () => {
  let component: HomePetsComponent;
  let fixture: ComponentFixture<HomePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
