import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiPikachuComponent } from './api-pikachu.component';

describe('ApiPikachuComponent', () => {
  let component: ApiPikachuComponent;
  let fixture: ComponentFixture<ApiPikachuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPikachuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiPikachuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
