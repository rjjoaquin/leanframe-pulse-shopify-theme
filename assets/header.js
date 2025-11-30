class HeaderMenu extends HTMLElement {
  constructor() {
    super();
    // this runs on the assumption that shopify has max three level menus
    this.mobileMenu = this.querySelector(".mobile-menu");
    this.closeButton = this.querySelector(".mobile-menu .close-button");
    this.headerMenu = this.querySelector("[data-header-menu]");
    this.topLevelItems = this.querySelectorAll("[data-top-level-item]");
    this.megaMenuItems = this.querySelector("[data-megamenu-items]");
  }

  connectedCallback() {
    document.addEventListener("MobileMenu:Close", () => {
      this.mobileMenu.open = false;
      this.mobileMenu.classList.remove("open");
    });

    if (this.topLevelItems && this.megaMenuItems) {
      this.topLevelItems.forEach((item) => {
        item.addEventListener("mouseover", (e) => {
          const tag = e.target.getAttribute("data-tag");
          if (tag) {
            this.openMegamenuItem(tag);
          }
        });
      });
      if (this.headerMenu) {
        this.addEventListener("mouseleave", () => {
          this.closeMegamenuItems();
        });
      }
    }
  }

  toggleMobileMenu() {
    this.mobileMenu.open = !this.mobileMenu.open;
  }

  openMegamenuItem(tag) {
    if (this.megaMenuItems) {
      this.megaMenuItems.classList.remove("z-[-999]", "h-0", "w-0");
      this.megaMenuItems.classList.add("z-2", "h-auto", "w-full");
      this.megaMenuItems
        .querySelector(`[item-tag="${tag}"`)
        .classList.remove("hidden");
    }
  }

  closeMegamenuItems() {
    if (this.megaMenuItems) {
      this.megaMenuItems.classList.add("z-[-999]", "h-0", "w-0");
      this.megaMenuItems.classList.remove("z-2", "h-auto", "w-full");
      this.megaMenuItems
        .querySelectorAll("[data-megamenu-item]")
        .forEach((item) => {
          item.classList.add("hidden");
        });
    }
  }
}

if (!customElements.get("header-menu")) {
  customElements.define("header-menu", HeaderMenu);
}
