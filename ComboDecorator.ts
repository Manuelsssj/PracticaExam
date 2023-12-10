// ComboDecorator.ts
import { ProductoComestible } from './ProductoComestible';

abstract class ComboDecorator {
    protected productoComestible: ProductoComestible;

    constructor(productoComestible: ProductoComestible) {
        this.productoComestible = productoComestible;
    }

    public abstract getNombre(): string;
    public abstract getPrecio(): number;
}

export { ComboDecorator };
