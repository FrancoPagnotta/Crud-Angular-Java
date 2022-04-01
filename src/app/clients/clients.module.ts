import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients.component';

@NgModule({
  declarations: [ClientsComponent],
  imports: [CommonModule],
  exports: [ClientsComponent],
})
export class ClientsModule {}
