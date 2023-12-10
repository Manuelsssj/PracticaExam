// ListadosDatos.ts
import { Película } from './Pelicula';
import { Sala } from './Sala';

class ListadosDatos {
    private static instance: ListadosDatos;
    private películas: Película[];
    private salas: Sala[];

    private constructor() {
        this.películas = [];
        this.salas = [];
    }

    public static getInstance(): ListadosDatos {
        if (!ListadosDatos.instance) {
            ListadosDatos.instance = new ListadosDatos();
        }
        return ListadosDatos.instance;
    }

    public agregarPelícula(película: Película): void {
        this.películas.push(película);
    }

    public agregarSala(sala: Sala): void {
        this.salas.push(sala);
    }

    public obtenerPelículas(): Película[] {
        return this.películas;
    }

    public obtenerSalas(): Sala[] {
        return this.salas;
    }
}

export { ListadosDatos };
