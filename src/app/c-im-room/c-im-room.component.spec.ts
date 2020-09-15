import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CImRoomComponent } from './c-im-room.component';

describe('CImRoomComponent', () => {
  let component: CImRoomComponent;
  let fixture: ComponentFixture<CImRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CImRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CImRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
