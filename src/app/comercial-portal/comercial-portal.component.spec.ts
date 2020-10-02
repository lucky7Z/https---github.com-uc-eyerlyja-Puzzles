import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialPortalComponent } from './comercial-portal.component';

describe('ComercialPortalComponent', () => {
  let component: ComercialPortalComponent;
  let fixture: ComponentFixture<ComercialPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercialPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComercialPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
