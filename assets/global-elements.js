class LeanframeForm extends HTMLElement {
  constructor() {
    super();
    this.allSelectButtons = this.querySelectorAll("select-button");
    this.allTextInput = this.querySelectorAll('input[type="text"]');
  }
  connectedCallback() {}
}
