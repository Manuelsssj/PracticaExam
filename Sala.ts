// Sala.ts
import { Asiento } from './Asiento';

class Sala {
    public número: number;
    public asientosDisponibles: Asiento[];
    public aperitivos: string[];

    constructor(número: number, asientos: Asiento[], aperitivos: string[]) {
        this.número = número;
        this.asientosDisponibles = asientos;
        this.aperitivos = aperitivos;
    }
}

export { Sala };
