import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { LearnComponent } from './learn/learn.component';
import { ManageComponent } from './manage/manage.component';
import { ManagePackagesComponent} from "./manage-packages/manage-packages.component";
import { ManageFactsComponent} from "./manage-facts/manage-facts.component";
import { CreatePackageComponent} from "./create-package/create-package.component";
import { ModidelPackageComponent} from "./modidel-package/modidel-package.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'manage-packages', component: ManagePackagesComponent},
  { path: 'manage-facts', component: ManageFactsComponent},
  { path: 'create-package', component: CreatePackageComponent},
  { path: 'modidel-package', component: ModidelPackageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
