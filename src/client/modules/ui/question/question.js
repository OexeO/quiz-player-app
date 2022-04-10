import { LightningElement, api } from 'lwc';

export default class Question extends LightningElement {
    @api question;
    isSaving;

    connectedCallback() {
        this.isSaving = false;
    }

    handleAnswerClick(event) {
        console.log('ANSWER STRINGIFY:', JSON.stringify(event));
        console.log('EVENT', event);
        // Prevent duplicate answers
        if (this.isSaving) {
            return;
        }
        this.isSaving = true;
        // Send answer to parent component
        console.log('EVENT.TARGET', event.target);
        console.log('EVENT.TARGET.DATASET', event.target.dataset);
        const { answer } = event.target.dataset;
        const answerEvent = new CustomEvent('answer', {
            detail: {
                answer
            }
        });
        this.dispatchEvent(answerEvent);
    }
}
