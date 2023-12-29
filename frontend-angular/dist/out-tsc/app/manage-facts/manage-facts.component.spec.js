import { TestBed } from '@angular/core/testing';
import { ManageFactsComponent } from './manage-facts.component';
describe('ManageFactsComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ManageFactsComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ManageFactsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage-facts.component.spec.js.map