import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuCotainerComponent } from './side-menu-cotainer.component';

describe('SideMenuCotainerComponent', () => {
  let component: SideMenuCotainerComponent;
  let fixture: ComponentFixture<SideMenuCotainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideMenuCotainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuCotainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
