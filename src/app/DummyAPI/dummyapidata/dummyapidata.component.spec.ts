import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyapidataComponent } from './dummyapidata.component';

describe('DummyapidataComponent', () => {
  let component: DummyapidataComponent;
  let fixture: ComponentFixture<DummyapidataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyapidataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummyapidataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
