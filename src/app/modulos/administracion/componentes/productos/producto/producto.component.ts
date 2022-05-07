import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ProductoServiceService} from 'src/app/shared/servicios/productos/producto-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos:any ={};
  muestraSpinner = true;
  searchName = '';

  constructor( private activatedRoute: ActivatedRoute, private _ProductoServiceService: ProductoServiceService,
    private router: Router) {
    this.activatedRoute.params.subscribe( params =>{
      this.productos=this._ProductoServiceService.getProductos();
      this.muestraSpinner=false;
    }
    );
   }

  ngOnInit(): void {
  }

  buscarProducto(texto: string){
    this.productos = this._ProductoServiceService.buscarProductos();

  }

  modificaCatalogoProductos(producto: string) {
    this.router.navigate(['administracion/editar-productos']);
    console.log("Mayra");
  }

  deshabilitaProducto(nombreProducto: string, codigoProducto: string, accion: string){
    
  }

  guardarProducto(){
    
  }


}
