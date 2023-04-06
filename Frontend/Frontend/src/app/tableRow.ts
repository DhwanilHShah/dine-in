import { DecimalPipe } from "@angular/common";

export interface tableRow{
    businesses?: eachArray[]
}

export interface eachArray{
    id: string,
    name: string,
    rating: number,
    distance: number,
    image_url: string
}