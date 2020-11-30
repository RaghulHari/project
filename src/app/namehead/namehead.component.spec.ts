import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameheadComponent } from './namehead.component';

describe('NameheadComponent', () => {
  let component: NameheadComponent;
  let fixture: ComponentFixture<NameheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
