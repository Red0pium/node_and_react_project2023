import { TestBed } from '@angular/core/testing';
import { ManagePackagesComponent } from './manage-packages.component';
describe('ManagePackagesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ManagePackagesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ManagePackagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=manage-packages.component.spec.js.map