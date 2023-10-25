import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizacionComponent } from './components/inicio/visualizacion/visualizacion.component';
import { CrearClientesComponent } from './components/clientes/crear-clientes/crear-clientes.component';
import { EditarClientesComponent } from './components/clientes/editar-clientes/editar-clientes.component';
import { VisualizacionClientesComponent } from './components/clientes/visualizacion-clientes/visualizacion-clientes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CrearArticulosComponent } from './components/articulos/crear-articulos/crear-articulos.component';
import { CrearOrdenComponent } from './components/orden/crear-orden/crear-orden.component';

const routes: Routes = [
  {path: '', redirectTo:'listarClientes', pathMatch: 'full'},
  {path: 'gestorClientes', component: NavbarComponent},
  {path: 'crearClientes', component: CrearClientesComponent},
  {path: 'listarClientes', component: VisualizacionClientesComponent},
  {path: 'editarClientes', component: EditarClientesComponent},
  {path: 'editarClientes/:id', component: EditarClientesComponent},
  {path: 'crearArticulos', component: CrearArticulosComponent},
  {path: 'crearOrden', component: CrearOrdenComponent},
  {path: '**', redirectTo:'listarClientes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
