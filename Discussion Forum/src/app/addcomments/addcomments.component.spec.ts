import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcommentsComponent } from './addcomments.component';

describe('AddcommentsComponent', () => {
  let component: AddcommentsComponent;
  let fixture: ComponentFixture<AddcommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
