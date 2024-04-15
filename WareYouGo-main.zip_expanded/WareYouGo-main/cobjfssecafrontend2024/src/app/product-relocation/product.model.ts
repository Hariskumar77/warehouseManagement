export class Product {
    productId: number;
    name: string;
    uom: string;
    unitCost: number;
    currentStock:number;
    damagedStock:number;
    weight: number;
    length: number;
    width: number;
    height: number;
 
    constructor() {}
 
    // constructor(name: string, uom: string, unitCost: number, weight: number, length: number, width: number, height: number) {
    //     this.name = name;
    //     this.uom = uom;
    //     this.unitCost = unitCost;
    //     this.weight = weight;
    //     this.length = length;
    //     this.width = width;
    //     this.height = height;
    // }
}