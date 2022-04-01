import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Client } from '../client';
import { CLIENTS } from '../clients.json';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor() {}

  getClients(): Observable<Client[]> {
    return of(CLIENTS);
  }
}
