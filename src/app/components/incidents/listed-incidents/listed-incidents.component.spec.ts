import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedIncidentsComponent } from './listed-incidents.component';

describe('ListedIncidentsComponent', () => {
  let component: ListedIncidentsComponent;
  let fixture: ComponentFixture<ListedIncidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListedIncidentsComponent]
    });
    fixture = TestBed.createComponent(ListedIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
