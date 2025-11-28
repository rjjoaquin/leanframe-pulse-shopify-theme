class HeaderMenu extends HTMLElement {
  constructor() {
    super();
    // this runs on the assumption that shopify has max three level menus
    this.mobileMenu = this.querySelector(".mobile-menu");
    this.closeButton = this.querySelector(".mobile-menu .close-button");
  }

  connectedCallback() {
    document.addEventListener("MobileMenu:Close", () => {
      this.mobileMenu.open = false;
      this.mobileMenu.classList.remove("open");
    });
  }

  toggleMobileMenu() {
    this.mobileMenu.open = !this.mobileMenu.open;
  }
}

if (!customElements.get("header-menu")) {
  customElements.define("header-menu", HeaderMenu);
}
