import { Component } from '@angular/core';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  // IMPORTANTE: importar el NgModule que exporta <app-vehiculo-list>
  imports: [VehiculoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'parcial-vehiculos';
}
