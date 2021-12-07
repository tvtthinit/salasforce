import { LightningElement } from 'lwc';

export default class TestComponent extends LightningElement {
    greeting = "Begin";
    handleChange(event) {
        this.greeting = "handleChange";
    }
    handleClick(event) {
        this.greeting = "handleClick";
    }
    handleOnMousedown(event){
        this.greeting = "handleOnMousedown";
    }
}