import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsListComponent } from './continents-list.component';

describe('ContinentsListComponent', () => {
  let component: ContinentsListComponent;
  let fixture: ComponentFixture<ContinentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
