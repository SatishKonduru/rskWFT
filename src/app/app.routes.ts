import { Routes } from '@angular/router';
import { HomeComponent } from './public-pages/home/home.component';
import { AboutUsComponent } from './public-pages/about-us/about-us.component';
import { ServicesComponent } from './public-pages/services/services.component';
import { BmiComponent } from './public-pages/bmi/bmi.component';
import { OurTeamComponent } from './public-pages/our-team/our-team.component';
import { PricingComponent } from './public-pages/pricing/pricing.component';
import { ContactUsComponent } from './public-pages/contact-us/contact-us.component';
import { LoginComponent } from './public-pages/login/login.component';
import { RegisterComponent } from './public-pages/register/register.component';
import { PageNotFoundComponent } from './public-pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'bmi', component: BmiComponent },
  { path: 'ourteam', component: OurTeamComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];
