import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LearningPackageService = class LearningPackageService {
    constructor(http, factService) {
        this.http = http;
        this.factService = factService;
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
    createPackage(factData) {
        return this.http.post(`${this.baseUrl}`, factData);
    }
    updatePackage(id, factData) {
        return this.http.put(`${this.baseUrl}/${id}`, factData);
    }
    deletePackage(packageId) {
        return this.http.delete(`${this.baseUrl}/${packageId}`, { responseType: 'text' });
    }
};
LearningPackageService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LearningPackageService);
export { LearningPackageService };
//# sourceMappingURL=learning-package.service.js.map