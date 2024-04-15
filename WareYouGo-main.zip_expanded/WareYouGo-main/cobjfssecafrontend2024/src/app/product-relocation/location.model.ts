export class Location{
    locationId:number;
    description:string;
    statusCode:StatusCode;
    rackId:number;
    shelfId:number;
    length:number;
    width:number;
    height:number;
 
    constructor(){}
 
    // constructor(locationId:number,description:string,statusCode:StatusCode,rackId:number,shelfId:number,length:number,width:number,height:number){
        
    // }
}

enum StatusCode{
    DEFAULT,
    TEMPORARILY_BLOCKED,
    PERMANENTLY_BLOCKED
}