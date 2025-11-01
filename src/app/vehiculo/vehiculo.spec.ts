import { Vehiculo } from './vehiculo';

describe('Vehiculo', () => {
  it('should create an instance with minimum props', () => {
    expect(new Vehiculo(1, 'Renault', 'Kangoo', 2017)).toBeTruthy();
  });
});
