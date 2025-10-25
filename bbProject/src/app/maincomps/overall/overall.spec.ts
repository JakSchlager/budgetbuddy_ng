import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Overall } from './overall';

describe('Overall', () => {
  let component: Overall;
  let fixture: ComponentFixture<Overall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Overall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Overall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
