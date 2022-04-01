import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/components/clients.component';

const routes: Routes = [
  { path: 'Clients', component: ClientsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'Clients' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
