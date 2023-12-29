import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LearnComponent = class LearnComponent {
    constructor(router) {
        this.router = router;
    }
    navigateHome() {
        this.router.navigate(['/home']);
    }
};
LearnComponent = __decorate([
    Component({
        selector: 'app-learn',
        templateUrl: './learn.component.html',
        styleUrls: ['./learn.component.css']
    })
], LearnComponent);
export { LearnComponent };
//# sourceMappingURL=learn.component.js.map