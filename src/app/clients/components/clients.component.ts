import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from '../services/clients.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = []

  constructor(private clientsService: ClientsService) { }

  ngOnInit(): void {
    this.clientsService.getClients().subscribe(resp => this.clients = resp)
  }

}
