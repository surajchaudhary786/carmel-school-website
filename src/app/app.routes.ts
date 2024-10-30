// import { Routes } from '@angular/router';

// export const routes: Routes = [];

import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallary/gallary.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },  // Default route
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'gallary', component: GalleryComponent},
  { path: '**', redirectTo: '' },  // Wildcard route to catch unknown paths
];

