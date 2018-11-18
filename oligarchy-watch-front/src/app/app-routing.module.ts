import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualsComponent } from './components/individuals/individuals.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { LinksComponent } from './components/links/links.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'individuals', component: IndividualsComponent},
  {path: 'organizations', component: OrganizationsComponent},
  {path: 'links', component: LinksComponent},
  {path: '', redirectTo: '/individuals', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
