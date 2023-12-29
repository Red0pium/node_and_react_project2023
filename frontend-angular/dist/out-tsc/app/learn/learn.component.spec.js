import { TestBed } from '@angular/core/testing';
import { LearnComponent } from './learn.component';
describe('LearnComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LearnComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LearnComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=learn.component.spec.js.map