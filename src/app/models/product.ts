import { Cart } from "./cart";
import { OrderItems } from "./order-items";


export class Products {
    id!: number;
    name!: string;
    description!: string;
    category!: string;
    year!: number;
    price!: number;
    stockAvailable!: number;

    cart: Cart[] = [];
    orderItems: OrderItems[] = [];
}