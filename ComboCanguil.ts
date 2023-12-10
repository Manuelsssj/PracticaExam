// ComboCanguil.ts
import { ComboDecorator } from './ComboDecorator';
import { ProductoComestible } from './ProductoComestible';

class ComboCanguil extends ComboDecorator {
    constructor(productoComestible: ProductoComestible) {
        super(productoComestible);
    }

    public getNombre(): string {
        return `${this.productoComestible.nombre} + Canguil`;
    }

    public getPrecio(): number {
        return this.productoComestible.precio + 2.5; // Precio adicional por el combo
    }
}

export { ComboCanguil };
