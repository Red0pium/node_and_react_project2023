import { TestBed } from '@angular/core/testing';
import { ModidelFactComponent } from './modidel-fact.component';
describe('ModidelFactComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModidelFactComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ModidelFactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=modidel-fact.component.spec.js.map