import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentPortalComponent } from './managment-portal.component';

describe('ManagmentPortalComponent', () => {
  let component: ManagmentPortalComponent;
  let fixture: ComponentFixture<ManagmentPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagmentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
