import { LightningElement,wire } from 'lwc';
import getListObjCustom from '@salesforce/apex/customObject.getListObjCustom';

export default class App extends LightningElement {
    @wire(getListObjCustom) listObject;
    
}