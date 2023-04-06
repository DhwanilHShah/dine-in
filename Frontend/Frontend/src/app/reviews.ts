export interface reviews{
    reviews?: eachReview[]
}

export interface eachReview{
    id?: string,
    rating?: number,
    user?: eachUser,
    text?: string,
    time_created?: string
}

export interface eachUser{
    name?: string
}