import { Routes } from '@angular/router';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { EducationComponent } from '../components/education/education.component';
import { HomeComponent } from '../components/home/home.component';
import { SkillsComponent } from '../components/skills/skills.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'HomePage' }
  },
  {
    path: 'Experience',
    component: ExperienceComponent,
    data: { animation: 'ExperiencePage' }
  },
  {
    path: 'Skills',
    component: SkillsComponent,
    data: { animation: 'SkillsPage' }
  },
  {
    path: 'Projects',
    component: ProjectsComponent,
    data: { animation: 'ProjectsPage' }
  },
  {
    path: 'Education',
    component: EducationComponent,
    data: { animation: 'EducationPage' }
  }
];

