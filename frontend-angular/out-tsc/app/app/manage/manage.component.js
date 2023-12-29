import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ManageComponent = class ManageComponent {
    constructor(router) {
        this.router = router;
    }
    navigateTo(route) {
        this.router.navigate([route]);
    }
};
ManageComponent = __decorate([
    Component({
        selector: 'app-manage',
        templateUrl: './manage.component.html',
        styleUrls: ['./manage.component.css']
    })
], ManageComponent);
export { ManageComponent };
//# sourceMappingURL=manage.component.js.map