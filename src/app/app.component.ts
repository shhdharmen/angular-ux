import { Component } from '@angular/core';
import { faCoffee, faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'aux-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aux';
  faCoffee = faCoffee;
  faHome = faHome;
}
