// Película.ts
import { Observer } from './Cliente';

class Película {
    private observadores: Observer[] = [];
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public agregarObservador(observador: Observer): void {
        this.observadores.push(observador);
    }

    public quitarObservador(observador: Observer): void {
        const index = this.observadores.indexOf(observador);
        if (index !== -1) {
            this.observadores.splice(index, 1);
        }
    }

    public notificarCambios(mensaje: string): void {
        for (const observador of this.observadores) {
            observador.actualizar(mensaje);
        }
    }
}

export { Película };
