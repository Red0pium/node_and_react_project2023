import { TestBed } from '@angular/core/testing';
import { LearningComponent } from './learning.component';
describe('LearningComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LearningComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LearningComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=learning.component.spec.js.map