import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableplusComponent } from './tableplus.component';

describe('TableplusComponent', () => {
  let component: TableplusComponent;
  let fixture: ComponentFixture<TableplusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableplusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableplusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
