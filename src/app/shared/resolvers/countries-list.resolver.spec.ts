import { TestBed } from '@angular/core/testing';

import { CountriesListResolver } from './countries-list.resolver';

describe('CountriesListResolver', () => {
  let resolver: CountriesListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CountriesListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
