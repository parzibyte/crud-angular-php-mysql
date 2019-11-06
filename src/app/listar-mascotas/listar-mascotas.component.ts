import { Component, OnInit } from '@angular/core';
import { MascotasService } from "../mascotas.service"
import { Mascota } from "../mascota"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {
  private mascotas: Mascota[] = [
    new Mascota("Maggie", "Chihuahua", 20)
  ];

  constructor(private mascotasService: MascotasService, private dialogo: MatDialog) { }

  eliminarMascota(mascota: Mascota) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${mascota.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          console.log("Confirmado");
        }
      })
  }

  ngOnInit() {
    this.mascotasService
      .getMascotas()
      .subscribe((mascotas: Mascota[]) => this.mascotas = mascotas);
  }

}
