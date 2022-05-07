import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './componentes/empresa/empresa.component';
import { OficinaComponent } from './componentes/oficina/oficina.component';
import {ProductoComponent} from './componentes/productos/producto/producto.component'
import {LoteComponent} from './componentes/productos/lote/lote.component'

const routes: Routes = [
  { path: '',
    children: [
       { path: 'empresa', component: EmpresaComponent},
       { path: 'oficina', component: OficinaComponent},       
       { path: 'productos', component: ProductoComponent},
       { path: 'lote', component: LoteComponent},
       { path: '**', redirectTo: "/"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
