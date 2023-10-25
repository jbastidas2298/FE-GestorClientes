import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-crear-clientes',
  templateUrl: './crear-clientes.component.html',
  styleUrls: ['./crear-clientes.component.css']
})
export class CrearClientesComponent implements OnInit{

  public clientes: any;

  public clienteForm = this.formBuilder.group({
    id: [0],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
  });


  constructor(
      private formBuilder: FormBuilder,
      private toastr: ToastrService,
      private clienteService: ClienteService,
      private router: Router,
  ) { }
 
  ngOnInit(): void {

  }

  public setDatos(dato:any){
    this.clienteForm.controls['id'].setValue(dato.id)
    this.clienteForm.controls['nombre'].setValue(dato.nombre);
    this.clienteForm.controls['apellido'].setValue(dato.apellido);
  }

  public guardar() {
      if (this.clienteForm.valid) { 
        console.log(this.clienteForm);
        this.clienteService.insertarClientes(this.clienteForm.getRawValue()).subscribe({
          next: (data) => {
            this.clientes = data;
            console.log(data);
          this.toastr.success("Se registro Cliente con exito");
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
