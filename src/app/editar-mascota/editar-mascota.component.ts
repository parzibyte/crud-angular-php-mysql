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
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from "../mascotas.service"
import { Mascota } from '../mascota';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  public mascota: Mascota = new Mascota("", "", 0);

  constructor(private route: ActivatedRoute,
    private router: Router, private mascotasService: MascotasService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    let idMascota = this.route.snapshot.paramMap.get("id");
    this.mascotasService.getMascota(idMascota).subscribe((mascota: Mascota) => this.mascota = mascota)
  }

  volver() {
    this.router.navigate(['/mascotas']);
  }

  onSubmit() {
    this.mascotasService.updateMascota(this.mascota).subscribe(() => {
      this.snackBar.open('Mascota actualizada', undefined, {
        duration: 1500,
      });
      this.volver();
    });
  }

}
