import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPropertyBindingComponent } from './topic-property-binding.component';

describe('TopicPropertyBindingComponent', () => {
  let component: TopicPropertyBindingComponent;
  let fixture: ComponentFixture<TopicPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
