export interface Routes {
    [route: string]: {
        [path: string]: string;
    }
};

export interface ServerErrors {
    [action: string]: string;
}

export interface Hotel {
    id: string;
    name: string;
    rating: number;
    bedCount: number;
    location: string; // ?
    price: number;
    mainImage: string;
}