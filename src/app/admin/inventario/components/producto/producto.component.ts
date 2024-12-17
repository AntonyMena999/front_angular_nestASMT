import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {

  categorias: any = [
    { name: 'Ropa Dama', code: 'RD' },
    { name: 'Ropa Caballero', code: 'RC' },
    { name: 'Herramientas', code: 'He' },
    { name: 'Tecnologias', code: 'Tec' },
    { name: 'Hogar', code: 'Hgr' }
  ]
  products:any[]=[
    {id:1, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:2, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:3, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:4, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:5, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:6, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:7, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:8, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:9, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:10, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:11, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:12, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:13, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:14, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:15, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"},
    {id:16, nombre: "Teclado RGB", precio: 120.99, categoria_id: 5, stock: 12, estado:"COMPLETO"}, 
   ];
   cols: any[]=[];


  openNew(){

  }

editProduct(prod:any){

}

deleteProduct(prod:any){

}

}
