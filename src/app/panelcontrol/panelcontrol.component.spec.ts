import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelcontrolComponent } from './panelcontrol.component';

describe('PanelcontrolComponent', () => {
  let component: PanelcontrolComponent;
  let fixture: ComponentFixture<PanelcontrolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelcontrolComponent]
    });
    fixture = TestBed.createComponent(PanelcontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
