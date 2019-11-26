/*

    Programado por Luis Cabrera Benito 
  ____          _____               _ _           _       
 |  _ \        |  __ \             (_) |         | |      
 | |_) |_   _  | |__) |_ _ _ __ _____| |__  _   _| |_ ___ 
 |  _ <| | | | |  ___/ _` | '__|_  / | '_ \| | | | __/ _ \
 | |_) | |_| | | |  | (_| | |   / /| | |_) | |_| | ||  __/
 |____/ \__, | |_|   \__,_|_|  /___|_|_.__/ \__, |\__\___|
         __/ |                               __/ |        
        |___/                               |___/         
    
    
    Blog:       https://parzibyte.me/blog
    Ayuda:      https://parzibyte.me/blog/contrataciones-ayuda/
    Contacto:   https://parzibyte.me/blog/contacto/
*/
import { Component, OnInit } from '@angular/core';
import { MascotasService } from "../mascotas.service"
import { Mascota } from "../mascota"
import { MatDialog } from '@angular/material/dialog';
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component"
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {
  public mascotas: Mascota[] = [
    new Mascota("Maggie", "Chihuahua", 20)
  ];

  constructor(private mascotasService: MascotasService, private dialogo: MatDialog, private snackBar: MatSnackBar) { }

  eliminarMascota(mascota: Mascota) {
    this.dialogo
      .open(DialogoConfirmacionComponent, {
        data: `¿Realmente quieres eliminar a ${mascota.nombre}?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (!confirmado) return;
        this.mascotasService
          .deleteMascota(mascota)
          .subscribe(() => {
            this.obtenerMascotas();
            this.snackBar.open('Mascota eliminada', undefined, {
              duration: 1500,
            });
          });
      })
  }

  ngOnInit() {
    this.obtenerMascotas();
  }

  obtenerMascotas() {
    return this.mascotasService
      .getMascotas()
      .subscribe((mascotas: Mascota[]) => this.mascotas = mascotas);
  }

}
