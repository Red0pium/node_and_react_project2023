const cors = require('cors');
const express = require('express');
const app = express();
import sequelize from "./sequelize";
import LearningPackageTable from "./models/LearningPackageTable";
import LearningFactTable from "./models/LearningFactTable";

app.use(cors());
app.use(express.json()); //for parsing application/json

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/////////////////////Learning packages

//Get all learning packages
app.get('/learning-packages', async (req, res) => {
    try {
        const packages = await LearningPackageTable.findAll();
        res.json(packages);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Get a single learning package by ID
app.get('/learning-packages/:id', async (req, res) => {
    try {
        const packages = await LearningPackageTable.findByPk(req.params.id);
        if (packages) {
            res.json(packages);
        } else {
            res.status(404).send('Package not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Create a new learning package
app.post('/learning-packages', async (req, res) => {
    try {
        const newPackage = await LearningPackageTable.create(req.body);
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Update a learning package
app.put('/learning-packages/:id', async (req, res) => {
    try {
        const packageToUpdate = await LearningPackageTable.findByPk(req.params.id);
        if (packageToUpdate) {
            await packageToUpdate.update(req.body);
            res.json(packageToUpdate);
        } else {
            res.status(404).send('Package not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Delete a learning package
app.delete('/learning-packages/:id', async (req, res) => {
    try {
        const rowsDeleted = await LearningPackageTable.destroy({
            where: {
                LearningPackageID: req.params.id
            }
        });

        if (rowsDeleted) {
            res.send('Package deleted successfully');
        } else {
            res.status(404).send('Package not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});


/////////////////////Learning facts

//Get all learning facts
app.get('/learning-facts', async (req, res) => {
    try {
        const packages = await LearningFactTable.findAll();
        res.json(packages);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Get learning facts of a learning package
app.get('/learning-packages/:id/learning-facts', async (req, res) => {
    try {
        const packages = await LearningFactTable.findAll({where: {LearningPackageID:req.params.id}});
        if (packages) {
            res.json(packages);
        } else {
            res.status(404).send('Fact not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Get learning fact by id
app.get('/learning-facts/:id', async (req, res) => {
    try {
        const packages = await LearningFactTable.findByPk(req.params.id);
        if (packages) {
            res.json(packages);
        } else {
            res.status(404).send('Fact not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Create a new learning fact
app.post('/learning-facts', async (req, res) => {
    try {
        const newPackage = await LearningFactTable.create(req.body);
        res.status(201).json(newPackage);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Update a learning fact
app.put('learning-facts/:id', async (req, res) => {
    try {
        const packageToUpdate = await LearningFactTable.findByPk(req.params.id);
        if (packageToUpdate) {
            await packageToUpdate.update(req.body);
            res.json(packageToUpdate);
        } else {
            res.status(404).send('Fact not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});

//Delete a learning fact
app.delete('/learning-facts/:id', async (req, res) => {
    try {
        const rowsDeleted = await LearningFactTable.destroy({
            where: {
                ID: req.params.id
            }
        });

        if (rowsDeleted) {
            res.send('Fact deleted successfully');
        } else {
            res.status(404).send('Fact not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
});