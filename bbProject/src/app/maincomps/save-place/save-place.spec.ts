import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePlace } from './save-place';

describe('SavePlace', () => {
  let component: SavePlace;
  let fixture: ComponentFixture<SavePlace>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavePlace]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavePlace);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
