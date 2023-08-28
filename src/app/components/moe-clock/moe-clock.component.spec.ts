import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoeClockComponent } from './moe-clock.component';

describe('MoeClockComponent', () => {
  let component: MoeClockComponent;
  let fixture: ComponentFixture<MoeClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoeClockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
