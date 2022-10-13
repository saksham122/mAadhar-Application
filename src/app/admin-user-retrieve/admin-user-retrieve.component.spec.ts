import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserRetrieveComponent } from './admin-user-retrieve.component';

describe('AdminUserRetrieveComponent', () => {
  let component: AdminUserRetrieveComponent;
  let fixture: ComponentFixture<AdminUserRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserRetrieveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminUserRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
