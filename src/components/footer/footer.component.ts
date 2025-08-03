import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
}
