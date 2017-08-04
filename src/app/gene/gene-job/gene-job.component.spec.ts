import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneJobComponent } from './gene-job.component';

describe('GeneJobComponent', () => {
  let component: GeneJobComponent;
  let fixture: ComponentFixture<GeneJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
