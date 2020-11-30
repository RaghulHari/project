import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicemainComponent } from './servicemain.component';

describe('ServicemainComponent', () => {
  let component: ServicemainComponent;
  let fixture: ComponentFixture<ServicemainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicemainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicemainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
