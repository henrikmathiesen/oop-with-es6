import $ from 'jquery';

export default class BaseElement {

    constructor() {
        this.element = null; // jQuery object
    }

    appendToElement(element) { 
        element = $(element);
        element.append(this.element);
    }

    createElement() {
        let s = this.getElementString();
        this.element = $(s);
    }

    getElementString() {
        throw "Please override getElementString() in BaseElement";
    }

}