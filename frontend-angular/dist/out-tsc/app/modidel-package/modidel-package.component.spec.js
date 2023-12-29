import { TestBed } from '@angular/core/testing';
import { ModidelPackageComponent } from './modidel-package.component';
describe('ModidelPackageComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModidelPackageComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ModidelPackageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modidel-package.component.spec.js.map