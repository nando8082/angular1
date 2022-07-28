export interface Producto {
    id: number;
    nombre:string;
    descripcion:string;
    marca:string;
    stock:number;
    estado:string;
    precio:number;
    quantity: number;
    clearance: boolean;
}