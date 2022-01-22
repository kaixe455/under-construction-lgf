import { Component } from '@angular/core';
import { faTwitter, faInstagram, faTwitch, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'under-construction-lgf'
  faInstagram = faInstagram
  faTwitter = faTwitter
  faTwitch = faTwitch
  faLinkedin = faLinkedin
}
