import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from "./mascota"
@Injectable({
  providedIn: 'root'
})
export class MascotasService {
  baseUrl = "http://localhost/mascotas_angular"

  constructor(private http: HttpClient) { }

  getMascotas() {
    return this.http.get(`${this.baseUrl}/getAll.php`);
  }

  getMascota(id: string | number) {
    return this.http.get(`${this.baseUrl}/get.php?idMascota=${id}`);
  }

  addMascota(mascota: Mascota) {
    return this.http.post(`${this.baseUrl}/post.php`, mascota);
  }

  deleteMascota(mascota: Mascota) {
    return this.http.delete(`${this.baseUrl}/delete.php?idMascota=${mascota.id}`);
  }

  updateMascota(mascota: Mascota) {
    return this.http.put(`${this.baseUrl}/update.php`, mascota);
  }
}