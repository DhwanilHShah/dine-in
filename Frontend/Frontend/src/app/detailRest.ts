export interface detailRest{
    id?: string,
    name?: string,
    url?: string,
    display_phone?: string,
    price?: string,
    photos?: Array<string>,
    location?: eachLocation,
    hours?: eachHour[],
    categories?: eachCategory[]
}

export interface eachHour{
    is_open_now?: boolean
}

export interface eachCategory{
    title?: string
}

export interface eachLocation{
    address1?: string,
    address2?: string,
    address3?: string
    city?: string,
    zip_code?: string,
    country?: string,
    state?: string,
    display_address?: Array<string>
}