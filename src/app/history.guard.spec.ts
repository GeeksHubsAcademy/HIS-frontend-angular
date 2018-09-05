import { TestBed, async, inject } from '@angular/core/testing';

import { HistoryGuard } from './history.guard';

describe('HistoryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HistoryGuard]
    });
  });

  it('should ...', inject([HistoryGuard], (guard: HistoryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
