import { TestBed } from '@angular/core/testing';
import { CreatePackageComponent } from './create-package.component';
describe('CreatePackageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreatePackageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(CreatePackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=create-package.component.spec.js.map