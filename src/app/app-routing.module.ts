import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePetsComponent } from './home-pets/home-pets.component';
import { PetMoreComponent } from './pet-more/pet-more.component';
import { PetServicesComponent } from './pet-services/pet-services.component';

const routes: Routes = [{
  path: "", component: HomePetsComponent
},
{
  path: "pet-services", component: PetServicesComponent
},
{
  path: "pet-more", component: PetMoreComponent
},
{
  path:"**", redirectTo:"**"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
