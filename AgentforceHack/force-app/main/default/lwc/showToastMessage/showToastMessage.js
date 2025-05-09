import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ShowToastMessage extends LightningElement {
    showToastMessage(){
        const evt = new ShowToastEvent({
        title: 'Toast Notification Success',
        message: 'Data load completed successfully',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
        
    }
}