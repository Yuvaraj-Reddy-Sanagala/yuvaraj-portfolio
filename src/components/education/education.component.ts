import { Component, ChangeDetectionStrategy,signal } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-education',
  imports: [MatExpansionModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationComponent {
  readonly panelOpenState = signal(false);
}
