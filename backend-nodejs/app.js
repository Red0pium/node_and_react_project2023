"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors = require('cors');
const express = require('express');
const app = express();
const sequelize_1 = require("./sequelize");
const LearningPackageTable_1 = require("./models/LearningPackageTable");
const LearningFactTable_1 = require("./models/LearningFactTable");
app.use(cors());
app.use(express.json()); //for parsing application/json
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
/////////////////////Learning packages
//Get all learning packages
app.get('/learning-packages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield LearningPackageTable_1.default.findAll();
        res.json(packages);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Get a single learning package by ID
app.get('/learning-packages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield LearningPackageTable_1.default.findByPk(req.params.id);
        if (packages) {
            res.json(packages);
        }
        else {
            res.status(404).send('Package not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Create a new learning package
app.post('/learning-packages', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPackage = yield LearningPackageTable_1.default.create(req.body);
        res.status(201).json(newPackage);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Update a learning package
app.put('/learning-packages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packageToUpdate = yield LearningPackageTable_1.default.findByPk(req.params.id);
        if (packageToUpdate) {
            yield packageToUpdate.update(req.body);
            res.json(packageToUpdate);
        }
        else {
            res.status(404).send('Package not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Delete a learning package
app.delete('/learning-packages/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const packageId = req.params.id;
    try {
        const result = yield sequelize_1.default.transaction((t) => __awaiter(void 0, void 0, void 0, function* () {
            // Delete all learning facts associated with the package
            yield LearningFactTable_1.default.destroy({
                where: { LearningPackageID: packageId },
                transaction: t
            });
            // Delete the package itself
            const rowsDeleted = yield LearningPackageTable_1.default.destroy({
                where: { LearningPackageID: packageId },
                transaction: t
            });
            return rowsDeleted;
        }));
        // Check if the package was deleted
        if (result) {
            res.send('Package and its associated facts deleted successfully');
        }
        else {
            res.status(404).send('Package not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
/////////////////////Learning facts
//Get all learning facts
app.get('/learning-facts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield LearningFactTable_1.default.findAll();
        res.json(packages);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Get learning facts of a learning package
app.get('/learning-packages/:id/learning-facts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield LearningFactTable_1.default.findAll({ where: { LearningPackageID: req.params.id } });
        if (packages) {
            res.json(packages);
        }
        else {
            res.status(404).send('Fact not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Get learning fact by id
app.get('/learning-facts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packages = yield LearningFactTable_1.default.findByPk(req.params.id);
        if (packages) {
            res.json(packages);
        }
        else {
            res.status(404).send('Fact not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Create a new learning fact
app.post('/learning-facts', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newPackage = yield LearningFactTable_1.default.create(req.body);
        res.status(201).json(newPackage);
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Update a learning fact
app.put('/learning-facts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const packageToUpdate = yield LearningFactTable_1.default.findByPk(req.params.id);
        if (packageToUpdate) {
            yield packageToUpdate.update(req.body);
            res.json(packageToUpdate);
        }
        else {
            res.status(404).send('Fact not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//Delete a learning fact
app.delete('/learning-facts/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rowsDeleted = yield LearningFactTable_1.default.destroy({
            where: {
                ID: req.params.id
            }
        });
        if (rowsDeleted) {
            res.send('Fact deleted successfully');
        }
        else {
            res.status(404).send('Fact not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}));
//# sourceMappingURL=app.js.map