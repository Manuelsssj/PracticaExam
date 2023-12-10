// Cliente.ts
import { Película } from './Pelicula';
import { Sala } from './Sala';

// Observer para notificar cambios en las películas
interface Observer {
    actualizar(mensaje: string): void;
}

class Cliente implements Observer {
    private nombre: string;
    private películaSeleccionada: Película | null = null;
    private salaSeleccionada: Sala | null = null;
    private productosComestiblesSeleccionados: string[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.productosComestiblesSeleccionados = [];
    }

    public seleccionarSala(sala: Sala): void {
        this.salaSeleccionada = sala;
    }

    public seleccionarProductosComestibles(productos: string[]): void {
        this.productosComestiblesSeleccionados = productos;
    }

    public seleccionarPelícula(película: Película): void {
        if (this.películaSeleccionada) {
            this.películaSeleccionada.quitarObservador(this);
        }
        this.películaSeleccionada = película;
        película.agregarObservador(this);
    }

    public mostrarDetalle(): void {
        if (this.películaSeleccionada && this.salaSeleccionada) {
            console.log(`Cliente: ${this.nombre}`);
            console.log(`Película seleccionada: ${this.películaSeleccionada.nombre}`);
            console.log(`Sala de cine: ${this.salaSeleccionada.número}`);
            console.log("Productos comestibles seleccionados: ", this.productosComestiblesSeleccionados);
        } else {
            console.log("Cliente no ha seleccionado película o sala.");
        }
    }

    actualizar(mensaje: string): void {
        console.log(`Cliente ${this.nombre}: ${mensaje}`);
    }
}

export { Cliente, Observer };  // Agregamos la exportación de Observer
