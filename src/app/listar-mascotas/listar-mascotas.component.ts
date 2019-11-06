import { Component, OnInit } from '@angular/core';
import { MascotasService } from "../mascotas.service"
import { Mascota } from "../mascota"
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {
  private mascotas: Mascota[] = [
    new Mascota("Maggie", "Chihuahua", 20)
  ];

  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
    this.mascotasService
      .getMascotas()
      .subscribe((mascotas: Mascota[]) => this.mascotas = mascotas);
  }

}
