import { TestBed } from '@angular/core/testing';

import { TechComponentService } from './tech-component.service';

describe('TechComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechComponentService = TestBed.get(TechComponentService);
    expect(service).toBeTruthy();
  });
});
