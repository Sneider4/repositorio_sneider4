import { Component, ElementRef, Renderer2, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {

  @Output() sidebarToggle = new EventEmitter<boolean>();
  private isCollapsed = false;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const toggleDropdown = (
      dropdown: HTMLElement,
      menu: HTMLElement,
      isOpen: boolean
    ) => {
      this.renderer[isOpen ? 'addClass' : 'removeClass'](dropdown, 'open');
      this.renderer.setStyle(
        menu,
        'height',
        isOpen ? `${menu.scrollHeight}px` : '0'
      );
    };

    const closeAllDropdowns = () => {
      const openDropdowns = this.el.nativeElement.querySelectorAll(
        '.dropdown-container.open'
      );
      openDropdowns.forEach((openDropdown: HTMLElement) => {
        const menu = openDropdown.querySelector(
          '.dropdown-menu'
        ) as HTMLElement;
        toggleDropdown(openDropdown, menu, false);
      });
    };

    const dropdownToggles =
      this.el.nativeElement.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach((dropdownToggle: HTMLElement) => {
      this.renderer.listen(dropdownToggle, 'click', (e: Event) => {
        e.preventDefault();
        const dropdown = dropdownToggle.closest(
          '.dropdown-container'
        ) as HTMLElement;
        const menu = dropdown.querySelector('.dropdown-menu') as HTMLElement;
        const isOpen = dropdown.classList.contains('open');
        closeAllDropdowns();
        toggleDropdown(dropdown, menu, !isOpen);

        // Si el sidebar está colapsado, asegúrate de mostrar el submenú
        if (
          this.el.nativeElement
            .querySelector('.sidebar')
            .classList.contains('collapsed')
        ) {
          this.renderer.setStyle(menu, 'opacity', '1');
          this.renderer.setStyle(menu, 'pointer-events', 'auto');
        }
      });
    });

    const sidebarToggles = this.el.nativeElement.querySelectorAll(
      '.sidebar-toggler, .sidebar-menu-button'
    );
    sidebarToggles.forEach((button: HTMLElement) => {
      this.renderer.listen(button, 'click', () => {
        closeAllDropdowns();
        const sidebar = this.el.nativeElement.querySelector(
          '.sidebar'
        ) as HTMLElement;
        if (sidebar.classList.contains('collapsed')) {
          this.renderer.removeClass(sidebar, 'collapsed');
          this.isCollapsed = false;
        } else {
          this.renderer.addClass(sidebar, 'collapsed');
          this.isCollapsed = true;
        }
        // Emitir el evento al componente padre
        this.sidebarToggle.emit(this.isCollapsed);
      });
    });

    if (window.innerWidth <= 1024) {
      const sidebar = this.el.nativeElement.querySelector(
        '.sidebar'
      ) as HTMLElement;
      this.renderer.addClass(sidebar, 'collapsed');
    }
  }
}
