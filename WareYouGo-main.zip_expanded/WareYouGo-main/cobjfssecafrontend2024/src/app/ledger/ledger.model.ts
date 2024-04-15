import { Timestamp } from "rxjs"
import { Product } from "../product/product.model";
import { Location } from "../location/location.model";

export class Ledger {
    LedgerId: number;
    inOutTime: Date;
    ledgerMode: string;
    user: any;
    product: Product;
    location: Location;
    supplier: string;
    quantity: number;
}