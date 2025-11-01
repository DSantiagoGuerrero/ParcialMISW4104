import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

import { VehiculoListComponent } from './vehiculo-list.component';
import { Vehiculo } from '../vehiculo';

describe('VehiculoListComponent', () => {
  let component: VehiculoListComponent;
  let fixture: ComponentFixture<VehiculoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [VehiculoListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculoListComponent);
    component = fixture.componentInstance;

    // Cargar 3 vehículos “mockeados”
    const mocks: Vehiculo[] = [
      new Vehiculo(1, 'Renault', 'Kangoo', 2017),
      new Vehiculo(2, 'Chevrolet', 'Spark', 2018),
      new Vehiculo(3, 'Chevrolet', 'Sail', 2016),
    ];

    // Inyectar directamente para la prueba
    (component as any).vehiculos = mocks;
    (component as any).totalesPorMarca = { Renault: 1, Chevrolet: 2 };
    component.loading = false;

    fixture.detectChanges();
  });

  it('crea el componente', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza encabezado de tabla (thead)', () => {
    const thead = fixture.debugElement.query(By.css('thead'));
    expect(thead).toBeTruthy();
    const ths = thead.queryAll(By.css('th'));
    expect(ths.length).toBe(4); // #, Marca, Línea, Modelo
  });

  it('renderiza 3 filas en el tbody', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(3);
  });
});
