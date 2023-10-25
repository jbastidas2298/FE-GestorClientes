import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdenService } from 'src/app/services/orden.service';
import { ArticulosOrdenComponent } from '../articulos-orden/articulos-orden.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
  
})

export class CrearOrdenComponent implements OnInit{
  public orden: any;
  public listaClientes: any[] = [];
  articulosOrden: any[] = [];
  public columnas: string[] = ['articuloId', 'nombre', 'precio', 'codigo'];
  public table: MatTableDataSource<any> = new MatTableDataSource(this.articulosOrden);
  public ordenForm = this.formBuilder.group({
    id: [0],
    clienteId: [null, Validators.required],
    articulosOrden: [[null]],
  });

  
  constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService,
      private ordenService: OrdenService,
      private clienteService: ClienteService,
      private router: Router,
      private dialog: MatDialog,
      config: NgbModalConfig, 
      private modalService: NgbModal
  ) { }
 
  ngOnInit(): void {
    this.listarClientes();
    console.log(this.listaClientes)
  }
  public listarClientes() {
    this.clienteService.listarClientes().subscribe({
      next: (data) => {
        console.log(data);
        this.listaClientes = data;
      }
    })
  }
  public setDatos(dato:any){
    this.ordenForm.controls['id'].setValue(dato.id)
    this.ordenForm.controls['clienteId'].setValue(dato.clienteId);
  }
  public obtenerArticulos() {
    let dialogRef = this.dialog.open(ArticulosOrdenComponent, {
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(x => {
      if (x && x.id) {
        console.log('Diálogo cerrado', x);
        x.articuloId = x.id;
        delete x.id; // Elimina la propiedad 'id'.
        this.articulosOrden.push(x);
    
        // Actualiza la tabla para reflejar los cambios.
        this.updateTable();
      }
    });    
  }

  private updateTable() {
    this.ordenForm.controls['articulosOrden'].setValue(this.articulosOrden as any);
    this.table = new MatTableDataSource<any>(this.articulosOrden);
  }

  public guardar() {
      if (this.ordenForm.valid) { 
        console.log(this.ordenForm);
        this.ordenService.insertarOrden(this.ordenForm.getRawValue()).subscribe({
          next: (data) => {
            this.orden = data;
            console.log(this.orden);
            this.toastr.success("Se registro orden con exito");
            this.router.navigate(['/listarClientes/']);
          },
          error: (error) => {
            this.toastr.error("Error", error.message );
            console.error(error);
          }
        });
      }
  }
}
