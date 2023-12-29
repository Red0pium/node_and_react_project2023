import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ManageFactsComponent = class ManageFactsComponent {
    constructor(router) {
        this.router = router;
    }
    navigateTo(route) {
        this.router.navigate([route]);
    }
};
ManageFactsComponent = __decorate([
    Component({
        selector: 'app-manage-facts',
        templateUrl: './manage-facts.component.html',
        styleUrl: './manage-facts.component.css'
    })
], ManageFactsComponent);
export { ManageFactsComponent };
//# sourceMappingURL=manage-facts.component.js.map