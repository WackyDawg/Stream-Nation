import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelMetadataComponent } from './channel-metadata.component';

describe('ChannelMetadataComponent', () => {
  let component: ChannelMetadataComponent;
  let fixture: ComponentFixture<ChannelMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChannelMetadataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChannelMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
