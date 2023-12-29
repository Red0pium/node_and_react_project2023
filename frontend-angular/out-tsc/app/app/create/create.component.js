import { __decorate } from "tslib";
import { Component } from '@angular/core';
// Import additional dependencies if you're sending data to a server.
let CreateComponent = class CreateComponent {
    constructor() {
        this.newCard = { title: '', content: '' };
    }
    onFlashcardCreated(flashcardData) {
        console.log('Flashcard created:', flashcardData);
    }
    createFlashcard() {
        if (this.newCard.title && this.newCard.content) {
            // Assuming you have a service to add flashcards
            // this.flashcardService.addFlashcard(this.newCard).subscribe(...);
            console.log('Flashcard created:', this.newCard);
            // Clear the form to allow for a new flashcard to be entered
            this.newCard = { title: '', content: '' };
        }
        else {
            console.error('Title and content are required to create a flashcard.');
        }
    }
};
CreateComponent = __decorate([
    Component({
        selector: 'app-create',
        templateUrl: './create.component.html',
        styleUrls: ['./create.component.css']
    })
], CreateComponent);
export { CreateComponent };
//# sourceMappingURL=create.component.js.map