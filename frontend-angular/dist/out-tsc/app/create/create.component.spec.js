import { TestBed } from '@angular/core/testing';
import { CreateComponent } from './create.component';
describe('CreateComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create.component.spec.js.map