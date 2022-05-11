import { Injectable } from '@angular/core';
import { string } from 'fp-ts';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {

  private productos:Producto[]=[
    {
      id_producto: "1",
      codigo: "45124511000",
      nombre: "Paracetamol",
      descripcion: "Paracetamol",
      precio_compra: 0.30,
      precio_venta: 0.45,
      firma_farmaceutica: "La Sante",
      concentracion: "500 mg",
      registro_sanitario: "REG_SAN-485410000",
      estado: true,
      transaccion: "0000000000152",
      fecha_transaccion: "2022-05-01",
      usuario: "gwmaila",
    },
    {
      id_producto: "2",
      codigo: "784510511000",
      nombre: "Dolgenal",
      descripcion: "Dolgenal",
      precio_compra: 0.65,
      precio_venta: 0.90,
      firma_farmaceutica: "La Sante",
      concentracion: "20 mg",
      registro_sanitario: "REG_SAN-487485200",
      estado: true,
      transaccion: "0000000000160",
      fecha_transaccion: "2022-05-02",
      usuario: "gwmaila",
    }


  ]

  private productoBuscado:Producto[]=[
    {
      id_producto: "3",
      codigo: "45124511000",
      nombre: "Ibuprofeno",
      descripcion: "Ibuprofeno",
      precio_compra: 0.30,
      precio_venta: 0.45,
      firma_farmaceutica: "La Sante",
      concentracion: "500 mg",
      registro_sanitario: "REG_SAN-485410000",
      estado: true,
      transaccion: "0000000000152",
      fecha_transaccion: "2022-05-01",
      usuario: "anita",
    }
  ]
  
  constructor() { }

  getProductos(){
    return this.productos;
  }

  buscarProductos(){
    return this.productoBuscado;
  }
}


export interface Producto{
  id_producto: string;
  codigo: string;
  nombre: string;
  descripcion: string;
  precio_compra: number;
  precio_venta: number;
  firma_farmaceutica: string;
  concentracion: string;
  registro_sanitario: string;
  estado: boolean;
  transaccion: string;
  fecha_transaccion: string;
  usuario: string;
}
