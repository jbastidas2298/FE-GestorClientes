import { Component, OnInit, ViewChild } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-visualizacion-clientes',
  templateUrl: './visualizacion-clientes.component.html',
  styleUrls: ['./visualizacion-clientes.component.css']
})
export class VisualizacionClientesComponent implements OnInit {
  id: number;
  public clientes: any[] = [];
  public lista: any[] = [];
  dataSource: any[] = [];
  public table: MatTableDataSource<any> = new MatTableDataSource(this.lista);
  public columnas: string[] = ['nombre', 'apellido','editar','eliminar'];



  constructor(
    private clienteService: ClienteService,
    private aRoute: ActivatedRoute,
    private toastr: ToastrService

  ) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.listarClientes();
  }

  public listarClientes() {
    this.clienteService.listarClientes().subscribe({
      next: (data) => {
        this.lista = data;
        this.table = new MatTableDataSource<any>(this.lista);
        this.table.paginator = this.paginator;
        this.table.sort = this.sort;
      }

    })
  }
  public eliminarClientes(id: number){
    this.clienteService.eliminarClientes(id).subscribe(() =>{
      this.toastr.error("Se elimino el cliente " +id);
      this.listarClientes();
    });
  }

}
