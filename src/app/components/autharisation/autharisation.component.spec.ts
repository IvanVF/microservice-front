import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutharisationComponent } from './autharisation.component';

describe('AutharisationComponent', () => {
  let component: AutharisationComponent;
  let fixture: ComponentFixture<AutharisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutharisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutharisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
