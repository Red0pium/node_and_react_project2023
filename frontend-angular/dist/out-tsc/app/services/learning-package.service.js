import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LearningPackageService = class LearningPackageService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/learning-packages'; // Update with your API URL
    }
    getAllPackages() {
        return this.http.get(this.baseUrl);
    }
    getPackageById(Id) {
        return this.http.get(`${this.baseUrl}/${Id}`);
    }
    getPackageFacts(Id) {
        return this.http.get(`${this.baseUrl}/${Id}/learning-facts`);
    }
};
LearningPackageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LearningPackageService);
export { LearningPackageService };
//# sourceMappingURL=learning-package.service.js.map