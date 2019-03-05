import { Component, OnInit } from '@angular/core';
import{Cliente} from './cliente';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes:Cliente[]=[
    {
      id:1,nombre:'cristian',apellido:'gil', email:'cristianingeniero2018@hotmail.com',createAt:'2018-03-04'
    },
    {
      id:2,nombre:'david',apellido:'gil', email:'david@hotmail.com',createAt:'2018-03-04'
    },
    {
      id:3,nombre:'matilda',apellido:'salazar', email:'matilda@hotmail.com',createAt:'2018-03-04'
    },
    {
      id:4,nombre:'socrates',apellido:'soriano', email:'socrates@hotmail.com',createAt:'2018-03-04'
    },
    {
      id:5,nombre:'julia',apellido:'monsalve', email:'julia@hotmail.com',createAt:'2018-03-04'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
