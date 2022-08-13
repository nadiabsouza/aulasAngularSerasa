import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = [] as any;

  cliente:Cliente = {
    nome:"",
    idade:0,

  
  }


  addCliente(){
    let novoCliente =  Object.assign({}, this.cliente)
    this.clientes.push(novoCliente);
  }



  constructor() { }

  ngOnInit(): void {
  }

}
