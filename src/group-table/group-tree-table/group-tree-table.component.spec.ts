import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTreeTableComponent } from './group-tree-table.component';

describe('GroupComponent', () => {
  let component: GroupTreeTableComponent;
  let fixture: ComponentFixture<GroupTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTreeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
