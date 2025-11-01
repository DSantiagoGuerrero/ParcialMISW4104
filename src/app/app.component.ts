import { Component } from '@angular/core';
import { VehiculoModule } from './vehiculo/vehiculo.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [VehiculoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'parcial-vehiculos';
}