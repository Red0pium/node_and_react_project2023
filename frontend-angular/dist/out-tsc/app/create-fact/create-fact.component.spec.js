import { TestBed } from '@angular/core/testing';
import { CreateFactComponent } from './create-fact.component';
describe('CreateFactComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateFactComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CreateFactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-fact.component.spec.js.map