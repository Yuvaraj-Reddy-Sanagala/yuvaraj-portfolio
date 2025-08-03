import { Routes } from '@angular/router';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { EducationComponent } from '../components/education/education.component';
import { HomeComponent } from '../components/home/home.component';
import { SkillsComponent } from '../components/skills/skills.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "Experience", component: ExperienceComponent},
    {path: "Skills", component: SkillsComponent},
    {path: "Projects", component: ProjectsComponent},
    {path: "Education", component: EducationComponent}
];
