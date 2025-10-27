class HeaderMenu extends HTMLElement {
  constructor() {
    super();
    this.menuHasSubmenu = this.querySelectorAll("[data-has-submenu]");
  }

  connectedCallback() {
    this.menuHasSubmenu.forEach((subMenu) => {
      subMenu.addEventListener("mouseover", () => {
        this.openSubmenu(subMenu);
      });
      subMenu.addEventListener("mouseout", () => {
        this.closeSubmenu(subMenu);
      });
    });
  }

  openSubmenu(subMenu) {
    const sub = subMenu.querySelector("[data-submenu]");
    sub.classList.remove("hidden");
    sub.classList.add("flex");
    if (sub.closest("[data-menu-item]")) {
      const menuLink = sub
        .closest("[data-menu-item]")
        .querySelector("[data-menu-link]");
      const dataHref = menuLink.getAttribute("data-href");
      menuLink.setAttribute("href", dataHref);
    }
  }
  closeSubmenu(subMenu) {
    const sub = subMenu.querySelector("[data-submenu]");
    sub.classList.add("hidden");
    sub.classList.remove("flex");
    if (sub.closest("[data-menu-item]")) {
      const menuLink = sub
        .closest("[data-menu-item]")
        .querySelector("[data-menu-link]");
      menuLink.removeAttribute("href");
    }
  }
}

if (!customElements.get("header-menu")) {
  customElements.define("header-menu", HeaderMenu);
}
