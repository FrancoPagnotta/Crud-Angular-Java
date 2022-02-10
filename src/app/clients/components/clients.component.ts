import { Component, OnInit } from '@angular/core';
import { Client } from '../client';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [
    {
      id: 1,
      name: 'Kari',
      surename: 'Sorjonen',
      date: '10/02/2022',
      email: 'ksorjonen@gmail.com'
    },
    {
      id: 2,
      name: 'Niko',
      surename: 'Uusitalo',
      date: 'nuursitalo@gmail.com',
      email: '11/02/2022'
    },
    {
      id: 3,
      name: 'Lena',
      surename: 'Jaakkola',
      date: '12/02/2022',
      email: 'ljaakola@gmail.com'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
