import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicinescheckComponent } from './medicinescheck.component';

describe('MedicinescheckComponent', () => {
  let component: MedicinescheckComponent;
  let fixture: ComponentFixture<MedicinescheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicinescheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicinescheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
