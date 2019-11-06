import { Component, OnInit } from '@angular/core';
import { MascotasService } from "../mascotas.service"
@Component({
  selector: 'app-listar-mascotas',
  templateUrl: './listar-mascotas.component.html',
  styleUrls: ['./listar-mascotas.component.css']
})
export class ListarMascotasComponent implements OnInit {

  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
    this.mascotasService.getMascotas().subscribe(data => {
      console.log("Los datos: ", data);
    });
  }

}
