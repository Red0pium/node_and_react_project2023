"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("../sequelize");
const LearningPackageTable_1 = require("./LearningPackageTable");
let LearningFactTable = class LearningFactTable extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, primaryKey: true, autoIncrement: true })
], LearningFactTable.prototype, "ID", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => LearningPackageTable_1.default),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER }) // Define the data type for LearningPackageID
], LearningFactTable.prototype, "LearningPackageID", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => LearningPackageTable_1.default)
], LearningFactTable.prototype, "learningPackage", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], LearningFactTable.prototype, "recto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.TEXT, allowNull: false })
], LearningFactTable.prototype, "verso", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.BOOLEAN, defaultValue: false })
], LearningFactTable.prototype, "disable", void 0);
LearningFactTable = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'LearningFact' })
], LearningFactTable);
sequelize_1.default.addModels([LearningFactTable]);
exports.default = LearningFactTable;
//# sourceMappingURL=LearningFactTable.js.map