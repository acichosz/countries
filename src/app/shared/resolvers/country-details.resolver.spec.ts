import { TestBed } from '@angular/core/testing';

import { CountryDetailsResolver } from './country-details.resolver';

describe('CountryDetailsResolver', () => {
  let resolver: CountryDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountryDetailsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
