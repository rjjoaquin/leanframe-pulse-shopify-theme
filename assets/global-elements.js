class LeanframeForm extends HTMLElement {
  constructor() {
    super();
    this.allSelectButtons = this.querySelectorAll("select-button");
    this.allTextInput = this.querySelectorAll('input[type="text"]');
  }
  connectedCallback() {
    if (this.allSelectButtons.length > 0) {
      this.allSelectButtons.forEach((selectButton) => {
        selectButton
          .querySelector('input[type="radio"]')
          .addEventListener("change", (e) => {
            const parentForm = e.target.closest("form");
            const formName = e.target.name;
            if (parentForm) {
              parentForm
                .querySelectorAll(`select-button input[name="${formName}"]`)
                .removeAttribute("checked");
            }
            e.target.checked = true;
          });
      });
    }
  }
}
