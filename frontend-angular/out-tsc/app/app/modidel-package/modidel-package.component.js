import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ModidelPackageComponent = class ModidelPackageComponent {
    constructor(router) {
        this.router = router;
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
    confirmDelete() {
        const userConfirmed = confirm("Êtes-vous sûr de vouloir supprimer cet élément ?");
        if (userConfirmed) {
            this.navigateTo('home');
        }
        else {
            this.navigateTo('modidel-package');
        }
    }
};
ModidelPackageComponent = __decorate([
    Component({
        selector: 'app-modidel-package',
        templateUrl: './modidel-package.component.html',
        styleUrl: './modidel-package.component.css'
    })
], ModidelPackageComponent);
export { ModidelPackageComponent };
//# sourceMappingURL=modidel-package.component.js.map