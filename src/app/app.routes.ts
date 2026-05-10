import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home';
import { AboutComponent } from './features/about/about';
import { SolutionsComponent } from './features/solutions/solutions';
import { SolutionDetailComponent } from './features/solutions/solution-detail';
import { ServicesComponent } from './features/services/services';
import { ContactComponent } from './features/contact/contact';
import { FormationsComponent } from './features/formations/formations';
import { BlogComponent } from './features/blog/blog';
import { BlogDetailComponent } from './features/blog/blog-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'solutions/:id', component: SolutionDetailComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'formations', component: FormationsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
