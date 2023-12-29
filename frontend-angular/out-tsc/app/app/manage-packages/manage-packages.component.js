import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ManagePackagesComponent = class ManagePackagesComponent {
    constructor(router) {
        this.router = router;
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
};
ManagePackagesComponent = __decorate([
    Component({
        selector: 'app-manage-packages',
        templateUrl: './manage-packages.component.html',
        styleUrl: './manage-packages.component.css'
    })
], ManagePackagesComponent);
export { ManagePackagesComponent };
//# sourceMappingURL=manage-packages.component.js.map