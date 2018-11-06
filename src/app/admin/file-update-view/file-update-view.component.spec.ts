import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUpdateViewComponent } from './file-update-view.component';

describe('FileUpdateViewComponent', () => {
  let component: FileUpdateViewComponent;
  let fixture: ComponentFixture<FileUpdateViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileUpdateViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUpdateViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
