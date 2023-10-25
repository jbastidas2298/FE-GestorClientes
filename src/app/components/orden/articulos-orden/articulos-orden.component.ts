import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CrearOrdenComponent } from '../crear-orden/crear-orden.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticuloService } from 'src/app/services/articulo.service';

@Component({
  selector: 'app-articulos-orden',
  templateUrl: './articulos-orden.component.html',
  styleUrls: ['./articulos-orden.component.css']
})
export class ArticulosOrdenComponent implements OnInit {

  public columnas: string[] = ['id', 'nombre', 'precio', 'codigo'];
  public lista: any[] = [];
  public table: MatTableDataSource<any> = new MatTableDataSource(this.lista);

  constructor(
    private dialogRef: MatDialogRef<CrearOrdenComponent>,
    private articuloService: ArticuloService,
  ) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.listarArticulos();
  }

  public listarArticulos() {
    this.articuloService.listarArticulos().subscribe({
      next: (data) => {
        this.lista = data;
        this.table = new MatTableDataSource<any>(this.lista);
        this.table.paginator = this.paginator;
        this.table.sort = this.sort;
      }

    })
  }

  public tablaFiltro(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.table.filter = filter.trim().toLowerCase();
  }

  public seleccionar(registro: any) {
    this.dialogRef.close(registro);
  }
}