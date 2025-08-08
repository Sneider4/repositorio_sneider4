import { Component } from '@angular/core';
import { HeaderComponent } from "./components/core/layout/header/header.component";
import { FooterComponent } from "./components/core/layout/footer/footer.component";
import { SidebarComponent } from "./components/core/layout/sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from "./components/core/layout/loader/loader.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, RouterOutlet, FooterComponent, SidebarComponent, LoaderComponent]
})
export class AppComponent {

  title = '';
  sidebarCollapsed = true;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
