import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LearningFactService = class LearningFactService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000/learning-facts'; // Adjust as needed
    }
    getAllFacts() {
        return this.http.get(this.baseUrl);
    }
    getFactById(Id) {
        return this.http.get(`${this.baseUrl}/${Id}`);
    }
    getFactsByPackageId(Id) {
        return this.http.get(`http://localhost:3000/learning-packages/${Id}/learning-facts`);
    }
};
LearningFactService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LearningFactService);
export { LearningFactService };
//# sourceMappingURL=learning-fact.service.js.map