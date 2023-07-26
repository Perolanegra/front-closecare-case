export interface TableDataModel { 
    name: string; 
    url?: string;
    types: any;
    sprite: {
        front: string;
        back: string;
    };
    abilities: Array<string>;
    id: number;
}