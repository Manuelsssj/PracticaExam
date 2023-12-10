// main.ts

import { Película } from './Pelicula';
import { Sala } from './Sala';
import { ListadosDatos } from './ListaDatos';
import { Cliente } from './Cliente';

// Crear instancias de películas y salas
const johnWick = new Película('John Wick');
const sala1 = new Sala(1, [], ['Palomitas', 'Refrescos']);

// Agregar las películas y salas a los listados
const listados = ListadosDatos.getInstance();
listados.agregarPelícula(johnWick);
listados.agregarSala(sala1);

// Crear un cliente
const cliente1 = new Cliente('Juan');

// Cliente selecciona una sala y una película
cliente1.seleccionarSala(sala1);
cliente1.seleccionarPelícula(johnWick);

// Cliente muestra detalles
cliente1.mostrarDetalle();

// Película notifica cambios (simulación de cambio de estado)
johnWick.notificarCambios('¡La película comenzará pronto!');

// Cliente muestra detalles actualizados
cliente1.mostrarDetalle();
