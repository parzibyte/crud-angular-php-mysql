import { Component, OnInit } from '@angular/core';
import { Mascota } from '../mascota';
import { MascotasService } from "../mascotas.service"
@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.css']
})
export class AgregarMascotaComponent implements OnInit {

  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
  }
  mascotaModel = new Mascota("", "", undefined)

  onSubmit() {
    console.log("Se envía el formulario: ", this.mascotaModel)
    this.mascotasService.addMascota(this.mascotaModel).subscribe(r => {
      console.log("Al agregar: ", r);
    })
  }

}
