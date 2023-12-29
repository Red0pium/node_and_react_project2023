import { TestBed } from '@angular/core/testing';
import { ManageComponent } from './manage.component';
describe('ManageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ManageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ManageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage.component.spec.js.map