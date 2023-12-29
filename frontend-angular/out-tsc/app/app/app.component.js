import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from "@angular/router";
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'frontend-angular';
    }
    navigateTo(destination) {
        this.router.navigate([`/${destination}`]);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        imports: [CommonModule, RouterOutlet],
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map