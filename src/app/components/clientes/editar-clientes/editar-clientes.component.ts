import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css']
})
export class EditarClientesComponent implements OnInit{
  public clientes: any;
  id: number;
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
      private aRoute: ActivatedRoute,
  ) {
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
    console.log(this.id);
   }
 
  ngOnInit(): void {
    this.obtenerCliente(this.id);

  }

  public setDatos(dato:any){
    this.clienteForm.controls['id'].setValue(dato.id)
    this.clienteForm.controls['nombre'].setValue(dato.nombre);
    this.clienteForm.controls['apellido'].setValue(dato.apellido);
  }

  public obtenerCliente(id: number){
    this.clienteService.listarClientesPorId(id).subscribe({
      next: (data) => {
        console.log(data);
        this.setDatos(data);
      }
    })
   }

  public editar() {
      if (this.clienteForm.valid) { 
        console.log(this.clienteForm);
        this.clienteService.actualizarClientes(this.id, this.clienteForm.getRawValue()).subscribe({
          next: (data) => {
            this.clientes = data;
            console.log(data);
          this.toastr.success("Se Actualizo cliente con exito");
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
