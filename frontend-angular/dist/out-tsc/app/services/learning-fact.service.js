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
    createFact(factData) {
        return this.http.post(`${this.baseUrl}`, factData);
    }
    updateFact(id, factData) {
        return this.http.put(`${this.baseUrl}/${id}`, factData);
    }
    deleteFact(id) {
        console.log(`${this.baseUrl}/${id}`);
        return this.http.delete(`${this.baseUrl}/${id}`);
    }
};
LearningFactService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LearningFactService);
export { LearningFactService };
//# sourceMappingURL=learning-fact.service.js.map