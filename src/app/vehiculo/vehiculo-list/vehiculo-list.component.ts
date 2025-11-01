import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-vehiculo-list',
  templateUrl: './vehiculo-list.component.html',
  styleUrls: ['./vehiculo-list.component.scss']
})
export class VehiculoListComponent implements OnInit {
  vehiculos: Vehiculo[] = [];
  loading = true;
  error?: string;

  totalesPorMarca: Record<string, number> = {};

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe({
      next: data => {
        this.vehiculos = data;
        this.totalesPorMarca = this.contarPorMarca(this.vehiculos);
        this.loading = false;
      },
      error: () => { this.error = 'No fue posible cargar los vehículos.'; this.loading = false; }
    });
  }

  private contarPorMarca(list: Vehiculo[]): Record<string, number> {
    return list.reduce((acc, v) => {
      acc[v.marca] = (acc[v.marca] ?? 0) + 1;
      return acc;
    }, {} as Record<string, number>);
  }

  marcasOrdenadas(): string[] {
    return Object.keys(this.totalesPorMarca).sort((a, b) => a.localeCompare(b));
  }
}
