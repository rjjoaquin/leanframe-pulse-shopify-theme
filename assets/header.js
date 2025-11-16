class HeaderMenu extends HTMLElement {
  constructor() {
    super();
    // this runs on the assumption that shopify has max three level menus
    this.menuHasSubmenu = this.querySelectorAll("[data-has-submenu]");
    this.submenuHasGrandchild = this.querySelectorAll("[data-has-grandchild]");
    this.mobileMenu = this.querySelector(".mobile-menu");
  }

  connectedCallback() {
    if (this.menuHasSubmenu.length > 0) {
      this.menuHasSubmenu.forEach((subMenu) => {
        subMenu.addEventListener("mouseover", () => {
          this.menuHasSubmenu.forEach((menu) => {
            if (menu !== subMenu) {
              this.closeSubmenu(menu);
            } else {
              if (
                !subMenu
                  .querySelector("[data-submenu]")
                  .classList.contains("flex")
              )
                this.openSubmenu(subMenu);
            }
          });
        });
        subMenu.addEventListener("mouseout", () => {
          this.closeSubmenu(subMenu);
        });
      });
    }

    if (this.submenuHasGrandchild.length > 0) {
      this.submenuHasGrandchild.forEach((grandchildMenu) => {
        grandchildMenu.addEventListener("mouseover", () => {
          this.submenuHasGrandchild.forEach((menu) => {
            if (menu != grandchildMenu) {
              this.closeSubmenu(menu, true);
            } else {
              if (
                !grandchildMenu
                  .querySelector("[data-grandchildmenu]")
                  .classList.contains("flex")
              ) {
                this.openSubmenu(grandchildMenu, true);
              }
            }
          });
        });
        grandchildMenu.addEventListener("mouseout", () => {
          this.closeSubmenu(grandchildMenu, true);
        });
      });
    }

    this.mobileMenu
      ?.querySelector(".close-button")
      .addEventListener("click", () => {
        this.toggleMobileMenu();
      });
  }

  openSubmenu(subMenu, isGrandchild = false) {
    const sub = subMenu.querySelector(
      `${isGrandchild === true ? "[data-grandchildmenu]" : "[data-submenu]"}`
    );
    if (sub) {
      sub.classList.remove("hidden");
      sub.classList.add("flex");
    }
  }
  closeSubmenu(subMenu, isGrandchild = false) {
    const sub = subMenu.querySelector(
      `${isGrandchild === true ? "[data-grandchildmenu]" : "[data-submenu]"}`
    );
    if (sub) {
      if (isGrandchild) {
        console.log("closing this", sub);
      }

      sub.classList.add("hidden");
      sub.classList.remove("flex");
    }
  }

  toggleMobileMenu() {
    this.mobileMenu.open = !this.mobileMenu.open;
  }
}

if (!customElements.get("header-menu")) {
  customElements.define("header-menu", HeaderMenu);
}
