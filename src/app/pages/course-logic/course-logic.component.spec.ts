import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLogicComponent } from './course-logic.component';

describe('CourseLogicComponent', () => {
  let component: CourseLogicComponent;
  let fixture: ComponentFixture<CourseLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
