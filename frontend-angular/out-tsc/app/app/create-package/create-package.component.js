import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CreatePackageComponent = class CreatePackageComponent {
    constructor(router) {
        this.router = router;
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
};
CreatePackageComponent = __decorate([
    Component({
        selector: 'app-create-package',
        templateUrl: './create-package.component.html',
        styleUrl: './create-package.component.css'
    })
], CreatePackageComponent);
export { CreatePackageComponent };
//# sourceMappingURL=create-package.component.js.map