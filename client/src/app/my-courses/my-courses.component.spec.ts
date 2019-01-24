import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCoursesComponent } from './my-courses.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('MyCoursesComponent', () => {
  let component: MyCoursesComponent;
  let fixture: ComponentFixture<MyCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCoursesComponent ], imports: [RouterTestingModule, FormsModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
