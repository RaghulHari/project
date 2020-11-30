import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryaddComponent } from './historyadd.component';

describe('HistoryaddComponent', () => {
  let component: HistoryaddComponent;
  let fixture: ComponentFixture<HistoryaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
