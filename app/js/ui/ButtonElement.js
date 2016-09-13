import BaseElement from './BaseElement'

export default class ButtonElement extends BaseElement {
    constructor(title){
        super();
        this.title = title;
    }

    getElementString() {
        return `
            <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
                ${this.title}
            </button>
        `;
    }
}