import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizacionClientesComponent } from './components/clientes/visualizacion-clientes/visualizacion-clientes.component';
import { VisualizacionArticulosComponent } from './components/articulos/visualizacion-articulos/visualizacion-articulos.component';
import { VisualizacionOrdenComponent } from './components/orden/visualizacion-orden/visualizacion-orden.component';
import { CrearClientesComponent } from './components/clientes/crear-clientes/crear-clientes.component';
import { CrearArticulosComponent } from './components/articulos/crear-articulos/crear-articulos.component';
import { VisualizacionComponent } from './components/inicio/visualizacion/visualizacion.component';
import { EditarClientesComponent } from './components/clientes/editar-clientes/editar-clientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule} from '@angular/forms'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CrearOrdenComponent } from './components/orden/crear-orden/crear-orden.component';
import { ArticulosOrdenComponent } from './components/orden/articulos-orden/articulos-orden.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    VisualizacionClientesComponent,
    VisualizacionArticulosComponent,
    VisualizacionOrdenComponent,
    CrearClientesComponent,
    CrearArticulosComponent,
    VisualizacionComponent,
    EditarClientesComponent,
    NavbarComponent,
    CrearOrdenComponent,
    ArticulosOrdenComponent
  ],
  imports: [
    MatDialogModule,
    NgbDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, 
    MatGridListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    RouterModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    MatSelectModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule, 
    MatGridListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
