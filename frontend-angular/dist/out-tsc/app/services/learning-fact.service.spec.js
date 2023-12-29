import { TestBed } from '@angular/core/testing';
import { LearningFactService } from './learning-fact.service';
describe('LearningFactService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LearningFactService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=learning-fact.service.spec.js.map