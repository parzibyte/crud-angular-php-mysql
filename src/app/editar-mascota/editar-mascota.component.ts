import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MascotasService } from "../mascotas.service"
import { Mascota } from '../mascota';
@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {

  private mascota: Mascota

  constructor(private route: ActivatedRoute,
    private router: Router, private mascotasService: MascotasService) { }

  ngOnInit() {
    let idMascota = this.route.snapshot.paramMap.get("id");
    this.mascotasService.getMascota(idMascota).subscribe((mascota: Mascota) => this.mascota = mascota)
  }

  volver() {
    this.router.navigate(['/mascotas']);
  }

}
