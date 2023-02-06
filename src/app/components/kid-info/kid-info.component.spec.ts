import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidInfoComponent } from './kid-info.component';

describe('KidInfoComponent', () => {
  let component: KidInfoComponent;
  let fixture: ComponentFixture<KidInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
