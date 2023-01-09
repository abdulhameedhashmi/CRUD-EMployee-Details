import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpempComponent } from './upemp.component';

describe('UpempComponent', () => {
  let component: UpempComponent;
  let fixture: ComponentFixture<UpempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
