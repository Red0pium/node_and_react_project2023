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
const sequelize_1 = require("./sequelize");
const LearningPackageTable_1 = require("./models/LearningPackageTable");
const LearningFactTable_1 = require("./models/LearningFactTable");
sequelize_1.default.addModels([LearningPackageTable_1.default, LearningFactTable_1.default]);
const lp1 = { LearningPackageID: 1, Title: "Learn TypeScript", Description: 'An introduction to TypeScript', Category: 'Programming', TargetAudience: 'Beginner', DifficultyLevel: 3 };
const lp2 = { LearningPackageID: 2, Title: 'Learn Node.js', Description: 'Getting started with Node.js', Category: 'Web Development', TargetAudience: 'Intermediate', DifficultyLevel: 4 };
const lp3 = { LearningPackageID: 3, Title: 'Learn HTML', Description: 'HTML fundamentals and basics', Category: 'Web Development', TargetAudience: 'Beginner', DifficultyLevel: 2 };
const lp4 = { LearningPackageID: 4, Title: 'Learn Angular', Description: 'Building web applications with Angular', Category: 'Web Development', TargetAudience: 'Intermediate', DifficultyLevel: 5 };
const tsFacts = [
    { LearningPackageID: 1, recto: "What is TypeScript and how is it different from JavaScript?", verso: "TypeScript is a superset of JavaScript that adds static typing. It helps catch errors early during the development process." },
    { LearningPackageID: 1, recto: "How do you declare a variable in TypeScript?", verso: "Variables in TypeScript can be declared using `let` or `const`, similar to JavaScript, with type annotations: `let age: number = 30;`" },
    { LearningPackageID: 1, recto: "What are TypeScript interfaces?", verso: "Interfaces in TypeScript define the structure of an object. They are used to enforce a certain shape of objects." },
    { LearningPackageID: 1, recto: "Can TypeScript types be inferred?", verso: "Yes, TypeScript is capable of type inference. When you assign a value to a variable, TypeScript can infer its type." }
];
const nodeFacts = [
    { LearningPackageID: 2, recto: "What is Node.js primarily used for?", verso: "Node.js is used for building server-side applications, particularly for web applications and APIs." },
    { LearningPackageID: 2, recto: "What module system does Node.js use?", verso: "Node.js uses the CommonJS module system for importing and exporting modules." },
    { LearningPackageID: 2, recto: "How do you create a simple server in Node.js?", verso: "A simple server can be created using the `http` module, for example, with `http.createServer()`." },
    { LearningPackageID: 2, recto: "What is npm in the context of Node.js?", verso: "npm (Node Package Manager) is the default package manager for Node.js, used for installing third-party modules." }
];
const htmlFacts = [
    { LearningPackageID: 3, recto: "What does HTML stand for?", verso: "HTML stands for HyperText Markup Language." },
    { LearningPackageID: 3, recto: "What is the purpose of the `<head>` tag in an HTML document?", verso: "The `<head>` tag contains metadata and links to scripts and stylesheets; it does not render content on the page." },
    { LearningPackageID: 3, recto: "How do you create a hyperlink in HTML?", verso: "Hyperlinks are created using the `<a>` tag with an `href` attribute, like `<a href='url'>Link Text</a>`." },
    { LearningPackageID: 3, recto: "What is the difference between `<div>` and `<span>` tags in HTML?", verso: "`<div>` is a block-level element, while `<span>` is an inline element. `<div>` starts on a new line, `<span>` does not." }
];
const angularFacts = [
    { LearningPackageID: 4, recto: "What is Angular mainly used for?", verso: "Angular is a framework for building client-side applications, particularly single-page applications (SPAs)." },
    { LearningPackageID: 4, recto: "What is a component in Angular?", verso: "Components are the basic building blocks in Angular. They control a part of the UI for an application." },
    { LearningPackageID: 4, recto: "How do you bind data in Angular templates?", verso: "Data binding in Angular can be done using interpolation (`{{ }}`), property binding (`[property]`), or event binding (`(event)`)." },
    { LearningPackageID: 4, recto: "What is a service in Angular?", verso: "A service in Angular is a singleton object that provides a set of functionalities across different components." }
];
function Create(lp) {
    return __awaiter(this, void 0, void 0, function* () {
        yield LearningPackageTable_1.default.create({
            Title: lp.Title,
            Description: lp.Description,
            Category: lp.Category,
            TargetAudience: lp.TargetAudience,
            DifficultyLevel: lp.DifficultyLevel
        });
    });
}
function syncTables() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log('syncing tables!');
            yield sequelize_1.default.sync({ force: true });
            // Insert learning packages after synchronization
            yield Promise.all([Create(lp1), Create(lp2), Create(lp3), Create(lp4)]);
            yield LearningFactTable_1.default.bulkCreate(tsFacts);
            yield LearningFactTable_1.default.bulkCreate(nodeFacts);
            yield LearningFactTable_1.default.bulkCreate(htmlFacts);
            yield LearningFactTable_1.default.bulkCreate(angularFacts);
            console.log('Tables synchronized successfully!');
        }
        catch (error) {
            console.error('Error synchronizing tables:', error);
        }
        finally {
            // Consider when to close the connection
            // await sequelize.close();
        }
    });
}
syncTables();
//# sourceMappingURL=syncTables.js.map