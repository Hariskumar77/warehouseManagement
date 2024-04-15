export class Location {
    locationId: number // set by backend so dont include this in form
    description: string
    shelfId: number
    rackId: number
    length: number
    width: number
    height: number
    statusCode: any  // set by backend so dont include this in form

    constructor() {}
}
