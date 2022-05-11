import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import{ProductoServiceService} from 'src/app/shared/servicios/productos/service/producto-service.service'
import { Product } from 'src/app/shared/servicios/productos/model/producto-model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos:any ={};
  muestraSpinner = true;
  searchName = '';

  constructor( private activatedRoute: ActivatedRoute, private _ProductoServiceService: ProductoServiceService) {
    this.activatedRoute.params.subscribe( params =>{
         this.getProducts();
    }
    );
   }

   getProducts() {
      this._ProductoServiceService.getProducts().subscribe((productsData: Product[]) => {
          this.productos = productsData;
          this.muestraSpinner=false;
      });
   }

  ngOnInit(): void {
  }

  buscarProducto(texto: string){
    this.productos = this._ProductoServiceService.buscarProductos();

  }

  modificaCatalogoProductos(producto: string) {
    console.log("Mayra");
  }

  deshabilitaProducto(nombreProducto: string, codigoProducto: string, accion: string){

  }

  guardarProducto(){

  }


}
