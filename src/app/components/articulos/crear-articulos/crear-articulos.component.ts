import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArticuloService } from 'src/app/services/articulo.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-crear-articulos',
  templateUrl: './crear-articulos.component.html',
  styleUrls: ['./crear-articulos.component.css']
})
export class CrearArticulosComponent implements OnInit{

  public articulos: any;

  public articuloForm = this.formBuilder.group({
    id: [0],
    nombre: ['', Validators.required],
    precio: ['', Validators.required],
    codigo: ['', Validators.required],

  });


  constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService,
      private articuloService: ArticuloService,
      private router: Router,
  ) { }
 
  ngOnInit(): void {

  }

  public setDatos(dato:any){
    this.articuloForm.controls['id'].setValue(dato.id)
    this.articuloForm.controls['nombre'].setValue(dato.nombre);
    this.articuloForm.controls['precio'].setValue(dato.precio);
    this.articuloForm.controls['codigo'].setValue(dato.codigo);
  }

  public guardar() {
      if (this.articuloForm.valid) { 
        console.log(this.articuloForm);
        this.articuloService.insertarArticulos(this.articuloForm.getRawValue()).subscribe({
          next: (data) => {
            this.articulos = data;
            console.log(data);
          this.toastr.success("Se registro Articulo con exito");
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
