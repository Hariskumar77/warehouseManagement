// export interface Location{
//     rackId:number;
//     shelfId:number;
//     isAvailable:boolean;
// }

// export const locations:Location[]=[
//     {
//         rackId:1,
//         shelfId:1,
//         isAvailable:true
//     },
//     {
//         rackId:1,
//         shelfId:2,
//         isAvailable:true
//     },
//     {
//         rackId:1,
//         shelfId:3,
//         isAvailable:false
//     },
//     {
//         rackId:2,
//         shelfId:1,
//         isAvailable:true
//     },
//     {
//         rackId:2,
//         shelfId:2,
//         isAvailable:false
//     },
//     {
//         rackId:2,
//         shelfId:3,
//         isAvailable:false
//     },

//     {
//         rackId:3,
//         shelfId:1,
//         isAvailable:true
//     },
//     {
//         rackId:3,
//         shelfId:2,
//         isAvailable:false
//     },
//     {
//         rackId:3,
//         shelfId:3,
//         isAvailable:false
//     },

//     {
//         rackId:4,
//         shelfId:1,
//         isAvailable:true
//     },
//     {
//         rackId:4,
//         shelfId:2,
//         isAvailable:false
//     },
//     {
//         rackId:4,
//         shelfId:3,
//         isAvailable:false
//     },

//     {
//         rackId:5,
//         shelfId:1,
//         isAvailable:true
//     },
//     {
//         rackId:5,
//         shelfId:2,
//         isAvailable:false
//     },
//     {
//         rackId:5,
//         shelfId:3,
//         isAvailable:false
//     },

//     {
//         rackId:6,
//         shelfId:1,
//         isAvailable:true
//     },
//     {
//         rackId:6,
//         shelfId:2,
//         isAvailable:false
//     },
//     {
//         rackId:6,
//         shelfId:3,
//         isAvailable:false
//     },
// ]

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
